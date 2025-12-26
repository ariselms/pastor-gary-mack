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
		// Retrieve the session and expand line_items to see what was bought
		const session = await stripe.checkout.sessions.retrieve(sessionId, {
			expand: ["line_items.data.price.product", "payment_intent"]
		});

		const productObj = session.line_items?.data[0].price?.product;

		const productImage =
        typeof productObj === "object"
        && productObj !== null
        && "images" in productObj
        ? (productObj as Stripe.Product).images[0]
        : null;

		// console.log("Stripe Session for Success Order Details: ", productImage);

		// Extract useful data to send back to client
		const orderDetails = {
			id: session.id,
			status: session.status, // "complete", "open", etc.
			customer_email: session.customer_details?.email,
			amount_total: session.amount_total ? session.amount_total / 100 : 0,
			products: session.line_items?.data.map((product: any) => ({
				id: product.price.product.id,
				name: product.name, // Now available!
				description: product.description,
				// 👇 Extract the image here
				image: productImage || null,
				quantity: product.quantity,
				amount: product.amount_total / 100
			})),
			// This is the User ID you sent earlier
			userId: session.client_reference_id
		};

		return NextResponse.json(
			{
				success: true,
				message: "Order successfully fetched.",
				data: orderDetails
			},
			{ status: 200 }
		);
	} catch (err: any) {
		return NextResponse.json(
			{
				success: false,
				message: err.message,
				data: null
			},
			{ status: 500 }
		);
	}
}
