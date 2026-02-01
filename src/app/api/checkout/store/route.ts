// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);

export async function POST(request: Request) {
	const { variantId, price } = await request.json();

	// the stripe from Printful will come as 25.00, so I need to remember to remove the .replace method
	const stripe_price = Math.round(Number(price.replace("$", "") * 100));

	try {
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: {
							name: "T-Shirt - Nation of Faith", // From Printful data
							images: ["https://printful-image-url.com..."]
						},
						unit_amount: stripe_price // $30.00 (You define this, not Printful)
					},
					quantity: 1
				}
			],
			payment_method_types: ["card"],
			// ADD THIS BLOCK 👇
			shipping_address_collection: {
				allowed_countries: ["US", "CA"] // Add other country codes as needed (e.g., 'GB', 'AU')
			},
			// ----------------
			metadata: {
				printfulVariantId: variantId
			},
			mode: "payment",
			success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
			cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`
		});

		console.log("Session URL: ", session.url);

		return NextResponse.json({ url: session.url });
	} catch (err: any) {
		console.log("Error creating checkout session: ", err.message);

		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
