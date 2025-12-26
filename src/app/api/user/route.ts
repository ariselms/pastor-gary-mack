export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
// import { sendEmail } from "@/helpers/server";
// import { languageOptions } from "@/static";
import { sql } from "@vercel/postgres";

// update user
export async function PUT(req: Request) {
	try {
		const body = await req.json(); // Parse the request body

		const {
			name,
			contact_email,
      contact_phone,
			address_street,
      address_city,
      address_state,
      address_zip
		} = body;

		// update user information in the database
		const { rows: userDb } = await sql`UPDATE users
        SET
          name = ${name},
          contact_email = ${contact_email},
          contact_phone = ${contact_phone},
          address_street = ${address_street},
          address_city = ${address_city},
          address_state = ${address_state},
          address_zip = ${address_zip}
        WHERE contact_email = ${contact_email} RETURNING *`;

		const user = userDb[0];

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
        data: null
      }, { status: 404 });
    }

    if (user) {
      return NextResponse.json({
        success: true,
        message: "User updated successfully",
        data: user
      }, { status: 200 });
    }

	} catch (error) {
		console.error(error);
	}

	return NextResponse.json({ message: "GET leads" });
}
