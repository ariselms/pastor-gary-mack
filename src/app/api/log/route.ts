import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { generateVerificationCodeWithExpirationTime } from "@/helpers/server";
import { v4 as uuidv4 } from "uuid";
import { languageOptions } from "@/static";
import { sendEmailNoReply } from "@/helpers/server";
import { emailCodeConfirmationTemplate } from "@/email-templates";

export async function POST(request: Request) {
	// get the email
	const { email, language } = await request.json();

	// generate the code
	const { code, codeExpirationTime, sessionTokenExpirationTime } =
		await generateVerificationCodeWithExpirationTime();

	const existingUser = await sql`SELECT * FROM users WHERE contact_email = ${email}`;

	const emaillSubject =
		language === languageOptions.english
			? "Verification Code"
			: "Código de verificación";

  const htmlBody = emailCodeConfirmationTemplate(
    language,
    languageOptions,
    code
  )

	// if the user doesn't exist, create it
	if (existingUser.rows.length === 0) {
		try {
			const { rows: newUser } = await sql`INSERT INTO users
        (contact_email, email_code_number, email_code_expiration, session_token, session_expiration)
        VALUES
        ( ${email},
          ${btoa(code.toString())},
          ${codeExpirationTime.toLocaleString()},
          ${uuidv4()},
          ${sessionTokenExpirationTime.toLocaleString()}) RETURNING *`;

			if (newUser.length > 0) {
				await sendEmailNoReply(
					[email, "rnavedojr@gmail.com"],
					emaillSubject,
					htmlBody
				);

				return NextResponse.json(
					{
						success: true,
						message:
							language === languageOptions.english
								? "A code has been sent to your email."
								: "Se ha enviado un código a tu correo.",
						data: null
					},
					{ status: 200 }
				);
			}

      return NextResponse.json(
        {
          success: false,
          message: "An error occured, please try again...",
          data: null
        },
        { status: 500 }
      );

		} catch (dbError) {
			return NextResponse.json(
				{
					success: false,
					message: "An error occured, please try again: " + dbError,
					data: null
				},
				{ status: 500 }
			);
		}
	} else {
		try {
			const updatedUser = await sql`UPDATE users
        SET
          email_code_number = ${btoa(code.toString())},
          email_code_expiration = ${codeExpirationTime.toISOString()},
          session_token = ${uuidv4()},
          session_expiration = ${sessionTokenExpirationTime.toISOString()}
        WHERE contact_email = ${email}
        RETURNING *`;

			if (updatedUser) {
				await sendEmailNoReply(
					[email, "rnavedojr@gmail.com"],
					emaillSubject,
					htmlBody
				);

				return NextResponse.json(
					{
						success: true,
						message:
							language === languageOptions.english
								? "A code has been sent to your email."
								: "Se ha enviado un código a tu correo.",
						data: null
					},
					{ status: 200 }
				);
			}
		} catch (dbError) {
			return NextResponse.json(
				{
					// Ensure you are returning NextResponse here
					success: false,
					message: "Error updating user: " + dbError,
					data: null
				},
				{ status: 500 }
			);
		}
	}
}
