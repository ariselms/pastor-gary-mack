import { NextResponse } from "next/server";
import { getAllStoreProducts, ResponseObject } from "@/helpers/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {

  try {

    const ResponseObject:ResponseObject = await getAllStoreProducts();

    const { success, message, data, status } = ResponseObject;

    return NextResponse.json({
      success: success,
      message: message,
      data: data,
    }, { status: status })

  } catch (error) {

    console.error("Error fetching store products:", error);

  }
}
