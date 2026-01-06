// TODO: Handle Creating and Looking up customers to avoid duplicated data
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { languageOptions, serverBaseUrl } from "@/static";
import { cookies } from "next/headers";
import { donationFrequencyOptions } from "@/static";
import { DonationProductData } from "@/types/donationTypes";
import { saleCagegories } from "@/static";

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

		// get the name in english or spanish either a donation or monthly suscription
		// get the name in english or spanish either a donation or monthly suscription
		// Helper boolean to make the logic cleaner below
		const isSpanish = currentLanguage === languageOptions.spanish;
		const isSubscription = frequency === donationFrequencyOptions.subscription.value;

		let productDataName = "";
		let productDataDescription = "";

		if (isSubscription) {
			// Handle Monthly
			productDataName = isSpanish ? "Donar Mensual" : "Monthly Donation";
			productDataDescription = isSpanish
				? "Donación mensual a pastor Gary Mack"
				: "Monthly Donation committed to pastor Gary Mack";
		} else {
			// Handle One-Time (Default)
			productDataName = isSpanish ? "Donación Única" : "One-Time Donation";
			productDataDescription = isSpanish
				? "Donación única a pastor Gary Mack"
				: "One-Time Donation committed to pastor Gary Mack";
		}

		const productData: DonationProductData = {
			name: productDataName,
			description: productDataDescription,
			images: [imageUrl] // Optional
		};

		// 7. Construct the Price Data object
		const priceData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData = {
			currency: "usd",
			unit_amount: amountInCents,
			product_data: productData,
			tax_behavior: "inclusive"
		};

		// 8. Add recurring logic if necessary
		if (frequency === donationFrequencyOptions.subscription.value) {
			priceData.recurring = {
				interval: "month" // or 'year', 'week'
			};
		}

    // --- 1. FIND OR CREATE CUSTOMER ---
    let customerId: string;

    const existingCustomers = await stripe.customers.list({
      email: user.contact_email,
      limit: 1,
    });

    console.log("Existing Customers: ", existingCustomers);

    if (existingCustomers.data.length > 0) {

      customerId = existingCustomers.data[0].id;

    } else {

      const newCustomer = await stripe.customers.create({
        email: user.contact_email,
        name: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
        metadata: { userId: user.id },
      });

      customerId = newCustomer.id;

    }

    // --- 2. CHECK FOR EXISTING SUBSCRIPTION (NEW) ---
    // Only run this check if they are trying to start a NEW subscription
    if (frequency === donationFrequencyOptions.subscription.value) {

      const activeSubscriptions = await stripe.subscriptions.list({
        customer: customerId,
        status: "active", // Only look for active ones
        limit: 1,
      });


      if (activeSubscriptions.data.length > 0) {
        const alreadySubscribed = isSpanish
					? "Ya tienes una subscripción activa. Debes cancelarla si quieres crear una nueva con una cantidad diferente. Visita tu perfil en la pestaña de donaciones, oprime el botón Portal del Cliente para cancelar. Si tienes problemas, contáctanos y con gusto te ayudaremos."
					: "You already have an active subscription. You must cancel it if you want to create a new one with a different amount. Visit your profile in the donations tab, press the button Customer Portal to cancel. If you have problems, contact us and we'll be happy to help.";

        // If they already have one, stop here.
        return NextResponse.json(
          {
            success: false,
            data: null,
            message: alreadySubscribed
          },
          { status: 400 }
        );
      }

    }

		// 9. Create the Stripe Session
		const stripeSession = await stripe.checkout.sessions.create({
			locale: currentLanguage === "en" ? "en" : "es",
			mode:
				frequency === donationFrequencyOptions.subscription.value
					? "subscription"
					: "payment",
			client_reference_id: user.id,
			customer: customerId,
      invoice_creation: {
        enabled: true,
      },
			line_items: [
				{
					price_data: priceData,
					quantity: 1
				}
			],
			payment_method_types: ["card"],
			metadata: {
				itemId: "donation",
				itemName: productData.name,
				itemImage: imageUrl,
				itemCategory: saleCagegories.donation
			},
			success_url: `${serverBaseUrl}/give/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${serverBaseUrl}/give`
		});

		// console.log("Stripe Session: ", stripeSession);

		return NextResponse.json({ url: stripeSession.url });
	} catch (err: any) {
		console.error("Error creating Stripe checkout session: ", err.message);

		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
