// TODO: Handle Creating and Looking up customers to avoid duplicated data

import { NextResponse } from "next/server";
import Stripe from "stripe";
import { serverBaseUrl } from "@/static";
import { cookies } from "next/headers";
import { saleCagegories } from "@/static";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);

export async function POST(req: Request) {
	try {
		// 1. Receive the single book and user objects directly
		const { book, user } = await req.json();

		// 2. Get the current language to set Stripe checkout language
		const cookieStore = cookies();
		const languageCookie = (await cookieStore).get("language");
		const currentLanguage: string | undefined = languageCookie?.value;

		// 3. This route is for books, so if there is no book data present, return
		if (!book || !user) {
			return NextResponse.json(
				{ error: "Something is missing, please try again or read the docs..." },
				{ status: 400 }
			);
		}

		// -- FIND OR CREATE CUSTOMER -- //
		let customerId: string;

		const existingCustomers = await stripe.customers.list({
			email: user.contact_email,
			limit: 1
		});

		if (existingCustomers.data.length > 0) {

			customerId = existingCustomers.data[0].id;

		} else {

			const newCustomer = await stripe.customers.create({
				email: user.contact_email,
				name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
				metadata: { userId: user.id }
			});

			customerId = newCustomer.id;

		}

		// 4. Create the Stripe Session
		const stripeSession = await stripe.checkout.sessions.create({
			locale: currentLanguage === "en" ? "en" : "es",
			customer: customerId, // Use the ID we found above
			client_reference_id: user.id,
      invoice_creation: {
        enabled: true
      },
			line_items: [
				{
					price: book.default_price.id,
					quantity: 1
				}
			],
			payment_method_types: ["card"],
			metadata: {
				itemId: book.id, // Useful for webhooks/fulfillment later
				itemName: book.name,
				itemImage: book.images[0],
				itemCategory: saleCagegories.book
			},
			mode: "payment",
			success_url: `${serverBaseUrl}/books/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${serverBaseUrl}/books`
		});

		return NextResponse.json({ url: stripeSession.url });
	} catch (err: any) {
		console.error("Error creating Stripe checkout session: ", err.message);

		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
