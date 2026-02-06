import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const dynamic = "force-dynamic";

// get user orders
export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  console.log(userId)

  try {

    const {rows: userStoreOrders} = await sql`
      SELECT * FROM store_orders
      WHERE by_user_id = ${userId}
    `

    console.log(userStoreOrders);

    return NextResponse.json({
      success: true,
      message: "User orders fetched successfully",
      data: userStoreOrders
    })

  } catch (error) {
    console.error(error);
  }
}