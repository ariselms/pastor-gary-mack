// TODO: Handle Creating and Looking up customers to avoid duplicated data
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { serverBaseUrl } from "@/static";
import { cookies } from "next/headers";
import { donationFrequencyOptions } from "@/static";
import { DonationProductData } from "@/types/donationTypes";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);

export async function POST(req: Request) {
	try {
		// 1. Receive the single book and user objects directly
		const { donationData, user } = await req.json();

		// 2. Destructure data coming from the frontend, except the user
		const { amount, frequency, imageUrl } = donationData;

		// 3. Get the current language to set Stripe checkout language
		const cookieStore = cookies();
		const languageCookie = (await cookieStore).get("language");
		const currentLanguage: string | undefined = languageCookie?.value;

		// 4. This route is just for donations, so if there is no donationData present, return
		if (!donationData || !user) {
			return NextResponse.json(
				{ error: "Something is missing, please try again or read the docs..." },
				{ status: 400 }
			);
		}

		// 5. Validate the amount (Stripe expects cents)
		// We assume 'amount' is passed in dollars (e.g., 50 for $50.00)
		const amountInCents: number = Math.round(parseFloat(amount) * 100);

		if (amountInCents < 50) {
			return NextResponse.json(
				{ error: "Minimum donation amount is $0.50" },
				{ status: 400 }
			);
		}

		// 6. Define common parameters
		// This allows us to create the product on the fly without setting it up in the dashboard first
		const productData: DonationProductData = {
			name: "Donation",
			description:
				frequency === donationFrequencyOptions.subscription
					? "Monthly Donation to Our Cause"
					: "One-time Donation to Our Cause",
			  images: [imageUrl], // Optional
		};

		// 7. Construct the Price Data object
		const priceData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData = {
			currency: "usd",
			unit_amount: amountInCents,
			product_data: productData
		};

		// 8. Add recurring logic if necessary
		if (frequency === donationFrequencyOptions.subscription) {
			priceData.recurring = {
				interval: "month" // or 'year', 'week'
			};
		}

		// 9. Create the Stripe Session
		const stripeSession = await stripe.checkout.sessions.create({
			locale: currentLanguage === "en" ? "en" : "es",
			tax_id_collection: {
				enabled: true
			},
			automatic_tax: {
				enabled: true
			},
			mode:
				frequency === donationFrequencyOptions.subscription
					? "subscription"
					: "payment",
			client_reference_id: user.id,
			customer_email: user.contact_email,
			line_items: [
				{
					price_data: priceData,
					quantity: 1
				}
			],
			payment_method_types: ["card"],
			metadata: {
				donationType: frequency,
			},
			success_url: `${serverBaseUrl}/give/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${serverBaseUrl}/books`
		});

		return NextResponse.json({ url: stripeSession.url });

	} catch (err: any) {

		console.error("Error creating Stripe checkout session: ", err.message);

		return NextResponse.json({ error: err.message }, { status: 500 });

	}
}
