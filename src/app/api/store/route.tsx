import { NextResponse } from "next/server";
import { getAllStoreProducts, ResponseObject } from "@/helpers/server";

export async function GET(request: Request) {

  const ResponseObject:ResponseObject = await getAllStoreProducts();

  const { success, message, data, status } = ResponseObject;

  return NextResponse.json({
    success: success,
    message: message,
    data: data,
  }, { status: status })

}
