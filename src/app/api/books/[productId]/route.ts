import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize the SDK outside the handler to prevent multiple instances
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_GARY_MACK!, {
	apiVersion: "2025-12-15.clover" // Use your preferred API version
});

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ productId: string }> } // Note: params is a Promise in recent Next.js versions
) {
	try {
		const { productId } = await params;

		if (!productId) {
			return NextResponse.json(
				{ message: "Product ID is required", data: null },
				{ status: 400 }
			);
		}

		// Retrieve product using SDK with price expanded
		const product = await stripe.products.retrieve(productId, {
			expand: ["default_price"]
		});

		return NextResponse.json(
			{
        success: true,
				message: "Libro solicitado correctamente.",
				data: product
			},
			{ status: 200 }
		);
	} catch (error: any) {

		console.error("Stripe Error:", error);

		// The SDK throws errors, so we catch them here
		return NextResponse.json(
			{
				success: false,
				message: error.message || "Error al obtener el libro.",
				data: null
			},
			{ status: error.statusCode || 500 }
		);

	}
}
