import { NextResponse } from "next/server";
import crypto from "crypto";
import { sql } from "@vercel/postgres";
import { printifyOrderStatus } from "@/static";

export async function POST(req: Request) {
	const body = await req.text();
	const signature = req.headers.get("x-pf-signature");
	const secret = process.env.PRINTIFY_WEBHOOK_SECRET!;

	// 1. Verify Signature
	const hash = crypto.createHmac("sha256", secret).update(body).digest("hex");

	if (`sha256=${hash}` !== signature) {
		return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
	}

	const payload = JSON.parse(body);
	const printifyOrderId = payload.resource.id;

	try {
		// 2. Handle the specific Event Topic
		switch (payload.topic) {

			case "order:created":

				const { rows: updatedStatusOrder } = await sql`
          UPDATE store_orders
          SET status = ${printifyOrderStatus.processing}
          WHERE printify_id = ${printifyOrderId}
        `;
				// Optional: Update status to 'Processing' in Neon
				break;

			case "order:shipment:created":
				console.log(`🚚 Order ${printifyOrderId} has shipped!`);

				// Extract tracking info
				const trackingNumber = payload.resource.shipments?.[0]?.tracking_number;
				const trackingUrl = payload.resource.shipments?.[0]?.tracking_url;

        const { rows: updatedStatusAndTrackingOrder } = await sql`
          UPDATE store_orders
          SET status = ${printifyOrderStatus.shipped}
          SET tracking_number = ${trackingNumber}
          SET tracking_url = ${trackingUrl}
          WHERE printify_id = ${printifyOrderId}
        `;

				break;

			case "order:canceled":
				console.log(`❌ Order ${printifyOrderId} was canceled.`);
				const { rows: updatedCanceledStatusOrder } = await sql`
          UPDATE store_orders
          SET status = ${printifyOrderStatus.canceled}
          WHERE printify_id = ${printifyOrderId}
        `;
				break;

			default:
				console.log(`Unhandled topic: ${payload.topic}`);
		}

		return NextResponse.json({ received: true }, { status: 200 });

	} catch (error) {

		console.error("Webhook Processing Error:", error);

		return NextResponse.json(

			{ error: "Internal processing error" },

			{ status: 500 }

		);
	}
}
