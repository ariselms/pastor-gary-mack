import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { languageOptions } from "@/static";
import { cookies } from "next/headers";

export async function POST(request: Request) {

  const { email, code, language } = await request.json();

  const genericErrorMessage = language === languageOptions.english ? "An error occurred in our end. Try again later." : "Ha ocurrido un error en nuestro lado. Intenta de nuevo mas tarde.";

  try {
    // lookup the user with email
    const { rows: userExist } = await sql`SELECT * FROM users WHERE contact_email = ${email}`;
    // check if the user exists
    if (userExist.length > 0) {

      let user = userExist[0];

      // check if the code is expired
      if(user.email_code_expiration < new Date()) {

        const codeExpiredMessage = language === languageOptions.english ? "Code has expired" : "El código ha expirado";

        return NextResponse.json({
          success: false,
          message: codeExpiredMessage,
          data: null
        });
      }

      const decodedCode = atob(user.email_code_number);

      if (decodedCode !== code) {

        const invalidCodeMessage = language === languageOptions.english ? "Invalid code" : "Código inválido";

        return NextResponse.json({
          success: false,
          message: invalidCodeMessage,
          data: null
        });
      }

      if (decodedCode === code) {

        const authenticationSuccessMessage = language === languageOptions.english ? "User authenticated successfully." : "Usuario autenticado exitosamente.";

        const serverResponse = NextResponse.json({
					success: true,
					message: authenticationSuccessMessage,
					data: user
				});

        serverResponse.cookies.set("session_token", user.session_token, {
          expires: user.session_expiration,
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // Recommended: Only send over HTTPS
          path: "/",
        });

        serverResponse.cookies.set("language", language);

        return serverResponse;

			} else {

        return NextResponse.json({
					success: false,
					message: genericErrorMessage,
					data: null
				});
      }
    }

    throw new Error(genericErrorMessage);

  } catch (error) {
    console.error(error);
  }
}

export async function GET() {

  const cookieStore = cookies();
  const authCookie = (await cookieStore).get("session_token");

  try {
    const { rows: userExist } =
			await sql`SELECT * FROM users WHERE session_token = ${authCookie?.value}`;

    if (userExist.length > 0) {
			const user = userExist[0];

      if (user.session_expiration < new Date()) {
				return NextResponse.json({
					success: false,
					message: "Session token has expired",
					data: null
				});
			}

      if (user.session_token !== authCookie?.value) {
        return NextResponse.json({
          success: false,
          message: "Invalid session token",
          data: null
        });
      }

			return NextResponse.json(
				{
					success: true,
					message: "User fetched successfully",
					data: user
				},
				{ status: 200 }
			);
		}

    return NextResponse.json({
      success: false,
      message: "User not found",
      data: null
    }, { status: 200 });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Error fetching user",
      data: null
    }, { status: 500 });
  }
}

export async function DELETE() {
	try {

		const cookieStore = cookies();

		(await cookieStore).delete({
      name: "session_token",
      path: "/",
      httpOnly: true,
    });

		return NextResponse.json(
			{
				success: true,
				message: "User logged out successfully",
				data: null
			},
			{ status: 200 }
		);
	} catch (error) {

		console.error(error);

		return NextResponse.json(
			{
				success: false,
				message: "Error logging out user",
				data: null
			},
			{ status: 500 }
		);
	}
}