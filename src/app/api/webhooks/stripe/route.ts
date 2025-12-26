import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sql } from "@vercel/postgres";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET!;

export async function POST(req: Request) {
	const body = await req.text();
  const signature = (await headers()).get("stripe-signature") as string;


	if (!signature) {
		return new NextResponse("Missing stripe signature", { status: 400 });
	}

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
	} catch (err: any) {
		console.error("Webhook signature verification failed:", err.message);
		return new NextResponse("Invalid signature", { status: 400 });
	}

	console.log("✅ Stripe event received:", event.type);

	if (event.type === "checkout.session.completed") {
		const sessionLight = event.data.object as Stripe.Checkout.Session;

		try {
			const session = await stripe.checkout.sessions.retrieve(sessionLight.id, {
				expand: ["line_items"]
			});

			const productInfo = session.line_items?.data[0];

			await sql`
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
					${session.client_reference_id},
					${session.metadata?.bookId ?? ""},
					${session.metadata?.bookName ?? ""},
					${session.id},
					${productInfo?.price?.id},
					${productInfo?.price?.unit_amount},
					${new Date(session.created * 1000).toISOString()}
				)
			`;
		} catch (dbError) {
			console.error("DB error:", dbError);
			return new NextResponse("Webhook handler failed", { status: 500 });
		}
	}

	return NextResponse.json({ received: true });
}
