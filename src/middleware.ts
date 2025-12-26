import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// Tu lógica normal de auth aquí
	return NextResponse.next();
}

export const config = {
	matcher: [
		// Protege todo EXCEPTO:
		// - assets
		// - stripe webhooks
		"/((?!_next/static|_next/image|favicon.ico|api/webhooks).*)"
	]
};
