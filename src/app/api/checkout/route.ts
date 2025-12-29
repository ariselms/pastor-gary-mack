// TODO: Add language to the metadata to identify what book needs to be open to read
// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { serverBaseUrl } from "@/static";
import { cookies } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);

export async function POST(req: Request) {
	try {
		// 1. Receive the single book object directly
		const { book, user } = await req.json();

		const cookieStore = cookies();
		const languageCookie = (await cookieStore).get("language");
		const currentLanguage: string | undefined = languageCookie?.value;

		// console.log("languageCookie: ", currentLanguage);

		if (!book) {
			return NextResponse.json(
				{ error: "Book data or price missing" },
				{ status: 400 }
			);
		}

		// 2. Create the Stripe Session
		const session = await stripe.checkout.sessions.create({
			locale: currentLanguage === "en" ? "en" : "es",
			tax_id_collection: {
				enabled: true
			},
			automatic_tax: {
				enabled: true
			},
			customer_creation: "always",
			client_reference_id: user.id,
			customer_email: user.contact_email,
			line_items: [
				{
					price: book.default_price.id,
					quantity: 1
				}
			],
			payment_method_types: ["card"],
			metadata: {
				bookId: book.id, // Useful for webhooks/fulfillment later
				bookName: book.name,
				bookImage: book.images[0]
			},
			mode: "payment",
			success_url: `${serverBaseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${serverBaseUrl}/books`
		});

		// console.log("Checkout Session: " ,session)

		return NextResponse.json({ url: session.url });
	} catch (err: any) {
		console.error("Error creating checkout session: ", err.message);

		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
