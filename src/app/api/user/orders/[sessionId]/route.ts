import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!);

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ sessionId: string }> }
) {
	const { sessionId } = await params;

	if (!sessionId) {
		return NextResponse.json(
			{ error: "Session ID is required" },
			{ status: 400 }
		);
	}

	try {
		const session = await stripe.checkout.sessions.retrieve(sessionId, {
			expand: ["line_items.data.price.product", "payment_intent"]
		});

		// Extract useful data to send back to client
		const orderDetails = {
			id: session.id,
			status: session.status,
			customer_email: session.customer_details?.email,
			amount_total: session.amount_total ? session.amount_total / 100 : 0,
			// Map through every item bought
			products: session.line_items?.data.map((item: any) => {
				const productObj = item.price?.product;

				// Extract the image specific to THIS line item
				const itemImage =
					typeof productObj === "object" &&
					productObj !== null &&
					"images" in productObj
						? productObj.images[0]
						: null;

				return {
					id: productObj.id,
					name: item.description, // Stripe puts the product name/variant here
					description: item.description,
					image: itemImage,
					quantity: item.quantity,
					amount: item.amount_total / 100
				};
			}),
			userId: session.client_reference_id
		};

		return NextResponse.json({
			success: true,
			message: "Order successfully fetched.",
			data: orderDetails
		});
	} catch (err: any) {
		return NextResponse.json(
			{ success: false, message: err.message },
			{ status: 500 }
		);
	}
}