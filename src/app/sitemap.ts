// app/sitemap.ts
import { MetadataRoute } from "next";
import { serverBaseUrl } from "@/static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

	const staticRoutes = [
		{
			url: `${serverBaseUrl}`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 1
		},
		{
			url: `${serverBaseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/books`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/give`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/cookies`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8
		},
		{
			url: `${serverBaseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8
		}
	];

  console.log(staticRoutes)

	return [...staticRoutes];
}
