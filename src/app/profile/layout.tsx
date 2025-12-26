import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";

export default async function ProfileLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookie = (await cookies()).get("session_token");

	if (!cookie) {
		redirect("/login");
	}

	const { value } = cookie;

	let user;

	const { rows: userDb } = await sql`SELECT * FROM users
      WHERE session_token = ${value}
      AND session_expiration > NOW()`;

	user = userDb[0];

	if (!user) {
		redirect("/login");
	}

	return <>{children}</>;
}