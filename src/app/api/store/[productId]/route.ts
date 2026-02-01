import { NextResponse } from "next/server";
import { getStoreSingleProduct } from "@/helpers/server";
import { ResponseObject } from "@/helpers/server";

export async function GET(

	{ params }: { params: Promise<{ productId: string }> }

) {

	const { productId } = await params;

	const ResponseObject: ResponseObject = await getStoreSingleProduct(productId);

	const { success, message, data, status } = ResponseObject;

	return NextResponse.json(
		{
			success: success,
			message: message,
			data: data
		},
		{ status: status }
	);
}
