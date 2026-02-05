// app/api/webhooks/stripe/route.ts
// TODO: add the webhook for when the user cancel a subscription...
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sql } from "@vercel/postgres";
import { saleCategories } from "@/static";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET!;
const printifyBaseUrl = process.env.PRINTIFY_BASE_URL!;
const printifyApiToken = process.env.PRINTIFY_API_KEY!;
const shopId = process.env.PRINTIFY_SHOP_ID!;

export async function POST(request: Request) {
	const body = await request.text();
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
		const sessionData: any = event.data.object as Stripe.Checkout.Session;

		try {
			// 2. 👇 FETCH FULL DETAILS: We must ask Stripe for the line items explicitly
			const session = await stripe.checkout.sessions.retrieve(sessionData.id, {
				expand: ["line_items.data.price.product"]
			});

			// Now we can safely access line_items
			// for books and donations since it is only 1 item
			const productInfo: any = session?.line_items?.data[0];
			// console.log("Product Info: ", productInfo?.price?.product);

			// for store products which can be more than one and they will be send to printify api
			// console.log("Line Items: ", session?.line_items?.data[0]);
			const printifyStoreProductsApi = session?.line_items?.data.map(
				(item, index) => {
					const productId =
						typeof item?.price?.product === "object" &&
						"metadata" in item.price.product
							? item.price.product.metadata?.productId
							: undefined;
					const variantId =
						typeof item?.price?.product === "object" &&
						"metadata" in item.price.product
							? item.price.product.metadata?.variantId
							: undefined;
					return {
						product_id: productId,
						variant_id: variantId,
						quantity: item.quantity,
						external_id: `line-item-${variantId}-${index}`
					};
				}
			);

			// This array will be stored in your 'line_items' column in Neon
			const dbLineItems = session?.line_items?.data.map((item) => {
				// Check if the product was expanded correctly
				const productObject =
					typeof item?.price?.product === "object" &&
					"metadata" in item.price.product
						? item.price.product
						: null;

				const productMetadata = productObject?.metadata || {};

				// Stripe images are stored in an array
				const productImage = productObject?.images?.[0] || "";

				return {
					product_id: productMetadata?.productId,
					variant_id: productMetadata?.variantId,
					product_image: productImage, // Added this line
					quantity: item.quantity,
					// amount_total is in cents from Stripe
					product_total: item.amount_total
				};
			});

      console.log("DB Line Items: ", dbLineItems);

			// Calculate order total from the session
			const orderTotal = session.amount_total;

			// Process book orders
			if (session.metadata?.itemCategory === saleCategories?.book) {
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

			// Process donations
			if (session.metadata?.itemCategory === saleCategories?.donation) {
				// 1. Prepare data for DB
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
						session.metadata?.itemName === "Donar Mensual" ||
						session.metadata?.itemName === "Donate Monthly"
							? true
							: false
				};

				// 2. Check if the order is a donation
				if (!donationOrder.by_user_id) {
					return NextResponse.json(
						{
							success: true,
							message: "This is not a digital donation order.",
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

			// Process store purchases next...
			if (session.metadata?.itemCategory === saleCategories?.store) {
				// 1. Extract Shipping Details from Stripe Session
				const shipping = sessionData.customer_details?.address;
				const name = sessionData.customer_details?.name;
				const email = sessionData.customer_details?.email;

				// 1. Prepare data for DB
				const printifyStoreOrder = {
					external_id: session.id,
					label: "gm_store",
					line_items: printifyStoreProductsApi,
					shipping_method: 1,
					is_printify_express: false,
					is_economy_shipping: false,
					send_shipping_notification: true,
					address_to: {
						first_name: name.split(" ")[0].trim(),
						last_name: name.split(" ")[1].trim() || "",
						email: email,
						phone: "",
						country: shipping?.country,
						region: shipping?.state,
						address1: shipping?.line1!,
						address2: "",
						city: shipping?.city!,
						zip: shipping?.postal_code
					}
				};

				console.log("Printify Store Order: ", printifyStoreOrder);

				// 2. Check if the order is a donation
				if (!printifyStoreOrder.external_id) {
					return NextResponse.json(
						{
							success: true,
							message: "This is not a digital store order.",
							data: null
						},
						{ status: 200 }
					);
				}

				// 3. Insert into Neon DB (Fixed table name to match your previous schema)
				try {
					const sendOrderRequest = await fetch(
						`${printifyBaseUrl}/shops/${shopId}/orders.json`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${printifyApiToken}`
							},
							body: JSON.stringify(printifyStoreOrder)
						}
					);

					if (!sendOrderRequest.ok) {
						return NextResponse.json(
							{
								success: false,
								message: "Failed to send order",
								data: null
							},
							{ status: 500 }
						);
					}

					const sendOrderResponse = await sendOrderRequest.json();
					const orderId = sendOrderResponse.id;

					if (orderId) {
						const { rows: newStoreOrderCreated } = await sql`
              INSERT INTO store_orders (
                order_id,
                printify_id,
                order_total,
                line_items,
              )
              VALUES (
                ${session.id},
                ${orderId},
                ${orderTotal},
                ${JSON.stringify(dbLineItems)}
              ) RETURNING *`;

						if (newStoreOrderCreated) {
							console.log("New Store Order Created: ", newStoreOrderCreated);
						}
					}
				} catch (error) {
					console.error("Failed to send order:", error);

					return NextResponse.json(
						{
							success: false,
							message: "Failed to send order",
							data: null
						},
						{ status: 500 }
					);
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
