import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ productId: string }> }
) {
	try {
		const { searchParams } = new URL(req.url);
		const userId = searchParams.get("userId");
		const {productId} = await params;

		if (!userId || !productId) return;

		const { rows: userOrders } = await sql`
      SELECT * FROM digital_books_orders
        WHERE by_user_id = ${userId}
        AND stripe_product_id = ${productId}
    `;

		if (userOrders.length > 0) {
			return NextResponse.json({
				success: true,
				message: "User orders fetched successfully.",
				data: userOrders
			});
		} else {
			return NextResponse.json({
				success: false,
				message: "User orders not found.",
				data: null
			});
		}
	} catch (error) {}
}
