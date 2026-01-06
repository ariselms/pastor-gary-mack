// app/api/webhooks/stripe/route.ts
// TODO: add the webhook for when the user cancel a subscription...
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sql } from "@vercel/postgres";
import { saleCagegories } from "@/static";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET!;

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

			if (session.metadata?.itemCategory === saleCagegories?.book) {
				// Prepare data for DB
				const bookOrder = {
					stripe_session_id: session.id,
					by_user_id: session.client_reference_id, // Ensure this was sent from client
					stripe_product_id: session.metadata?.itemId || "", // Metadata is safer/easier here
					stripe_product_name: session.metadata?.itemName || "",
					stripe_price_id: productInfo?.price?.id,
					stripe_unit_amount: productInfo?.price?.unit_amount,
					created_at: new Date(session.created * 1000).toISOString(), // Convert Unix timestamp to Date
					image_url: session.metadata?.itemImage || ""
				};

				if (!bookOrder.by_user_id) {
					return NextResponse.json(
						{
							success: true,
							message: "This is not a digital book order.",
							data: null
						},
						{ status: 200 }
					);
				}

				// 3. Insert into Neon DB (Fixed table name to match your previous schema)
				// Note: Added missing comma before created_at in VALUES
				const { rows: newBookOrderCreated } = await sql`
          INSERT INTO digital_books_orders (
            by_user_id,
            stripe_product_id,
            stripe_product_name,
            stripe_session_id,
            stripe_price_id,
            stripe_unit_amount,
            created_at,
            image_url,
            metodo_entrega
          )
          VALUES (
            ${bookOrder.by_user_id},
            ${bookOrder.stripe_product_id},
            ${bookOrder.stripe_product_name},
            ${bookOrder.stripe_session_id},
            ${bookOrder.stripe_price_id},
            ${bookOrder.stripe_unit_amount},
            ${bookOrder.created_at},
            ${bookOrder.image_url},
            'digital'
          ) RETURNING *`;

				if (newBookOrderCreated) {
					console.log("New Book Order Created: ", newBookOrderCreated);
				}
			}

			if (session.metadata?.itemCategory === saleCagegories?.donation) {

				// Prepare data for DB
				const donationOrder = {
					by_user_id: session.client_reference_id, // Ensure this was sent from client
					stripe_product_id: session.metadata?.itemId || "", // Metadata is safer/easier here
					stripe_product_name: session.metadata?.itemName || "",
					stripe_session_id: session.id,
					stripe_price_id: productInfo?.price?.id,
					stripe_unit_amount: productInfo?.price?.unit_amount,
					created_at: new Date(session.created * 1000).toISOString(), // Convert Unix timestamp to Date
					image_url: session.metadata?.itemImage || "",
					is_active:
						session.metadata?.itemName === "Donar Mensual"
            || session.metadata?.itemName === "Donate Monthly"
            ? true
            : false
				};

				if (!donationOrder.by_user_id) {

					return NextResponse.json(
						{
							success: true,
							message: "This is not a digital donationOrder.",
							data: null
						},
						{ status: 200 }
					);
				}

				// 3. Insert into Neon DB (Fixed table name to match your previous schema)
				// Note: Added missing comma before created_at in VALUES
				const { rows: newDonationCreated } = await sql`
          INSERT INTO donations_orders (
            by_user_id,
            stripe_product_id,
            stripe_product_name,
            stripe_session_id,
            stripe_price_id,
            stripe_unit_amount,
            created_at,
            image_url,
            metodo_entrega
          )
          VALUES (
            ${donationOrder.by_user_id},
            ${donationOrder.stripe_product_id},
            ${donationOrder.stripe_product_name},
            ${donationOrder.stripe_session_id},
            ${donationOrder.stripe_price_id},
            ${donationOrder.stripe_unit_amount},
            ${donationOrder.created_at},
            ${donationOrder.image_url},
            'digital'
          ) RETURNING *`;

				if (newDonationCreated) {
					console.log("New Donation Order Created: ", newDonationCreated);
				}
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
