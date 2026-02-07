import { NextResponse } from "next/server";
import Stripe from "stripe";
import { serverBaseUrl, saleCategories } from "@/static";
import { cookies } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);

export async function POST(request: Request) {
	try {
		// 1. Receive the cart items and user object
		const { cartItems, user } = await request.json();

		// 2. Get the current language for the Stripe UI
		const cookieStore = await cookies();
		const languageCookie = cookieStore.get("language");
		const currentLanguage: string | undefined = languageCookie?.value;

		// 3. Basic validation
		if (!cartItems || cartItems.length === 0 || !user) {
			return NextResponse.json(
				{ error: "Cart is empty or user info is missing." },
				{ status: 400 }
			);
		}

		// 4. Map Cart Items to Stripe Line Items
		const line_items = cartItems.map((item: any) => {

			return {
				price_data: {
          currency: "usd",
					// Printify prices are in cents (e.g., 1796), Stripe also expects cents
					unit_amount: item.variant.price,
					product_data: {
						name: item.productName,
						description: `Variant: ${item.variant.title}`,
						images: [item.variant.images[0]],
						metadata: {
              productName: item.productName,
              variantName: item.variant.title,
							productId: item.productId,
							variantId: item.variant.id,
						}
					}
				},
				quantity: item.quantity
			};
		});

		// 5. Find or create Stripe Customer
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

		// 6. Create the Stripe Session
		const stripeSession = await stripe.checkout.sessions.create({
			locale: currentLanguage === "en" ? "en" : "es",
			customer: customerId,
			client_reference_id: user.id,
			invoice_creation: { enabled: true },
			payment_method_types: ["card"],
			success_url: `${serverBaseUrl}/store/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${serverBaseUrl}/store`,
			mode: "payment",
			line_items: line_items,
      shipping_address_collection: { allowed_countries: ["US"] },
			// Session-level metadata for your Webhook
			metadata: {
        itemId: "store",
				orderType: "store_purchase",
				userId: user.id,
				itemCategory: saleCategories.store
			}
		});

		return NextResponse.json(
			{
				success: true,
				message: "Session created successfully",
				data: stripeSession.url
			},
			{ status: 200 }
		);

	} catch (err: any) {

		console.error("Error creating Stripe checkout session: ", err.message);

		return NextResponse.json(
			{
        success: false,
        message: err.message,
        data: null },
			{ status: 500 }
		);
	}
}
