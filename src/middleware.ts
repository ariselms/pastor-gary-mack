// middleware.ts

export const config = {
	matcher: [
		// Standard matcher that protects everything...
		"/((?!_next/static|_next/image|favicon.ico).*)",

		// 👇 ADD THIS EXCLUSION:
		// This regex says: "Match API routes, BUT NOT if they start with /api/webhooks"
		"/api/((?!webhooks).*)"
	]
};
