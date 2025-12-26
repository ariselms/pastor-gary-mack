// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// 👇 1. Allow Stripe Webhooks to pass through immediately
	if (request.nextUrl.pathname.startsWith("/api/webhooks")) {
		return NextResponse.next();
	}

	// ... rest of your authentication logic (e.g. checking cookies)
}

export const config = {
	matcher: [
		// Standard matcher that protects everything...
		"/((?!_next/static|_next/image|favicon.ico).*)",

		// 👇 ADD THIS EXCLUSION:
		// This regex says: "Match API routes, BUT NOT if they start with /api/webhooks"
		"/api/((?!webhooks).*)"
	]
};