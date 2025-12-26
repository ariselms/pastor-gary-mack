import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { languageOptions } from "@/static";

// POST REQUEST FOR SUBSCRIBERS TABLE
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {email, language} = body;

    const { rows: subscriberExist } =
			await sql`SELECT * FROM subscribers WHERE email = ${email}`;

    if (subscriberExist.length > 0) {
      return NextResponse.json({
        success: false,
        message:
        language === languageOptions.english
        ? "Subscriber already exists."
        : "Ya existe un suscriptor con ese correo",
        data: null
      }, { status: 400 });
    }

    const { rows: newSubscriber } =
			await sql`INSERT INTO subscribers (email) VALUES (${email}) RETURNING *`;

    return NextResponse.json({
      success: true,
      message:
      language === languageOptions.english
        ? "Subscriber added successfully."
        : "Suscriptor agregado correctamente",
      data: newSubscriber[0]
    }, { status: 200 });

  } catch (error) {

    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Error adding subscriber",
      data: null
    }, { status: 500 });

  }
}