import StoreItemDetailsPage from "@/components/pages-content/StoreItemDetailsPage";
import { getStoreSingleProduct } from "@/helpers/server";
import { Metadata } from "next";

type Props = {
	params: Promise<{ productId: string }>;
};

export default async function ProductDetailsPage({
	params
}: {
	params: Promise<{ productId: string }>;
}) {
	const { productId } = await params;

	const ResponseObject = await getStoreSingleProduct(productId);

	// In a real app, you'd fetch this based on the ID params
	const ProductData = ResponseObject.data;

	if (!ProductData) return <div>Product not found</div>;

	return (
		<main className="bg-black" role="main">
			<StoreItemDetailsPage ProductData={ProductData} />
		</main>
	);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { productId } = await params;
	const ResponseObject = await getStoreSingleProduct(productId);
	const ProductData = ResponseObject?.data;

	if (!ProductData) {
		return {
			title: "Product Not Found"
		};
	}

	// Strip HTML tags and limit length for the SEO description
	const cleanDescription = ProductData.description
		.replace(/<[^>]*>/g, "")
		.substring(0, 160)
		.trim();

	return {
		title: ProductData.title,
		description: cleanDescription,
		keywords: ProductData.tags,
		openGraph: {
			title: ProductData.title,
			description: cleanDescription,
			images: [
				{
					url:
						ProductData.images.find((img: any) => img.is_default)?.src ||
						ProductData.images[0]?.src,
					width: 800,
					height: 800,
					alt: ProductData.title
				}
			],
			type: "article"
		},
		twitter: {
			card: "summary_large_image",
			title: ProductData.title,
			description: cleanDescription,
			images: [ProductData.images[0]?.src]
		}
	};
}