import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "qpaklexsxp3qfktd.public.blob.vercel-storage.com"
			},
			{
				protocol: "https",
				hostname: "images-api.printify.com"
			},
			{
				protocol: "https",
				hostname: "files.stripe.com"
			},
			{
				protocol: "https",
				hostname: "pastorgarymack.com"
			}
		]
	}
};

export default withFlowbiteReact(nextConfig);


