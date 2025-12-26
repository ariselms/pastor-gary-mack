// app/api/webhooks/stripe/route.ts
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sql } from "@vercel/postgres";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SIGNIN_SECRET!;

export async function POST(req: Request) {
	const body = await req.text();
	const stripeSignature = (await headers()).get("stripe-signature") as string;

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(
			body,
			stripeSignature,
			endpointSecret
		);
	} catch (err: any) {
		return NextResponse.json(
			{ error: `Webhook Error: ${err.message}` },
			{ status: 400 }
		);
	}

	// Handle successful checkout
	if (event.type === "checkout.session.completed") {
		// 1. This session object is "light" (missing line_items)
		const sessionLight = event.data.object as Stripe.Checkout.Session;

		try {
			// 2. 👇 FETCH FULL DETAILS: We must ask Stripe for the line items explicitly
			const session = await stripe.checkout.sessions.retrieve(sessionLight.id, {
				expand: ["line_items"]
			});

			// Now we can safely access line_items
			const productInfo = session.line_items?.data[0];

			// Prepare data for DB
			const order = {
				stripe_session_id: session.id,
				by_user_id: session.client_reference_id, // Ensure this was sent from client
				stripe_product_id: session.metadata?.bookId || "", // Metadata is safer/easier here
				stripe_product_name: session.metadata?.bookName || "",
				stripe_price_id: productInfo?.price?.id,
				stripe_unit_amount: productInfo?.price?.unit_amount,
				created_at: new Date(session.created * 1000).toISOString() // Convert Unix timestamp to Date
			};

			// 3. Insert into Neon DB (Fixed table name to match your previous schema)
			// Note: Added missing comma before created_at in VALUES
			const { rows: newOrderCreated } = await sql`
        INSERT INTO digital_books_orders (
          by_user_id,
          stripe_product_id,
          stripe_product_name,
          stripe_session_id,
          stripe_price_id,
          stripe_unit_amount,
          created_at
        )
        VALUES (
          ${order.by_user_id},
          ${order.stripe_product_id},
          ${order.stripe_product_name},
          ${order.stripe_session_id},
          ${order.stripe_price_id},
          ${order.stripe_unit_amount},
          ${order.created_at}
        ) RETURNING *`;

			if (newOrderCreated) {
				console.log("Order Saved to DB:", newOrderCreated[0].id);
			}
		} catch (error) {
			console.error("Failed to process order:", error);
			return NextResponse.json(
				{ error: "Webhook handler failed" },
				{ status: 500 }
			);
		}
	}

	return NextResponse.json({ received: true });
}
