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

		// 4. This route is for donations, so if there is no donationData present, return
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

		// 6. Set languge and define product information, including donation recurrence
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

    // product info
		const productData: DonationProductData = {
			name: productDataName,
			description: productDataDescription,
			images: [imageUrl] // Optional
		};

		// product price
		const priceData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData = {
			currency: "usd",
			unit_amount: amountInCents,
			product_data: productData,
			tax_behavior: "inclusive"
		};

		// you can use the following to add recurring logic if needed
		if (frequency === donationFrequencyOptions.subscription.value) {
			priceData.recurring = {
				interval: "month" // or 'year', 'week'
			};
		}

    // 7. Find or create Stripe Customer
    let customerId: string;

    const existingCustomers = await stripe.customers.list({
      email: user.contact_email,
      limit: 1,
    });

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

    // 8. Check for existing subscription. If it exists, return a message.
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
    // this determines wether to enable invoice creation or not, because if the user is paying a subscriptipon, the invoice_creation should not exists, but if the user is paying a one time payment type, the object will be added for the creation of the invoice
    const invoiceCreationConfig =
			frequency === donationFrequencyOptions.subscription.value
				? undefined
				: { enabled: true };

		const stripeSession = await stripe.checkout.sessions.create({
			locale: currentLanguage === "en" ? "en" : "es",
			client_reference_id: user.id,
			customer: customerId,
			invoice_creation: invoiceCreationConfig,
			payment_method_types: ["card"],
			success_url: `${serverBaseUrl}/give/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${serverBaseUrl}/give`,
			mode:
				frequency === donationFrequencyOptions.subscription.value
					? "subscription"
					: "payment",
			line_items: [
				{
					price_data: priceData,
					quantity: 1
				}
			],
			metadata: {
				itemId: "donation",
				itemName: productData.name,
				itemImage: imageUrl,
				itemCategory: saleCagegories.donation
			}
		});

		// 10. if everything is ok, return the URL to start the checkout session
    // 11. to see the product creation, visit Stripe Webhook in --- /api/webhooks/stripe/route.ts
		return NextResponse.json({ url: stripeSession.url });
	} catch (err: any) {
		console.error("Error creating Stripe checkout session: ", err.message);

		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
