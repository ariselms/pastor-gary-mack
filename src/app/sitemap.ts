// app/sitemap.ts
import { MetadataRoute } from "next";
import { serverBaseUrl } from "@/static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// 1. Define Static Routes
	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: `${serverBaseUrl}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1
		},
		{
			url: `${serverBaseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/books`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/give`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/cookies`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/store`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.8
		}
	];

	// 2. Fetch Dynamic Product Routes
	const PrintifyApiKey = process.env.PRINTIFY_API_KEY;
	const PrintifyShopId = process.env.PRINTIFY_SHOP_ID;
	const PrintifyBaseUrl = process.env.PRINTIFY_BASE_URL;

	let productRoutes: MetadataRoute.Sitemap = [];

	try {
		if (PrintifyApiKey && PrintifyShopId && PrintifyBaseUrl) {
			const response = await fetch(
				`${PrintifyBaseUrl}/shops/${PrintifyShopId}/products.json`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${PrintifyApiKey}`
					},
					next: { revalidate: 86400 } // Cache for 1 hour
				}
			);

			if (response.ok) {
				const result = await response.json();

				// Printify usually returns an object with a 'data' array for products
				const products = result.data || [];

				productRoutes = products.map((product: any) => ({
					url: `${serverBaseUrl}/store/${product.id}`,
					// Use updated_at from Printify if available, otherwise current date
					lastModified: product.updated_at
						? new Date(product.updated_at)
						: new Date(),
					changeFrequency: "daily" as const,
					priority: 0.6
				}));
			}
		}
	} catch (error) {
		console.error("Sitemap generation error:", error);
		// Return just static routes if the API fails
	}

	return [...staticRoutes, ...productRoutes];
}
