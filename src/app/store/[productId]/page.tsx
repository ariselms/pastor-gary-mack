import Image from "next/image";
import { getStoreSingleProduct } from "@/helpers/server";
import StoreItemDetailsPage from "@/components/pages-content/StoreItemDetailsPage";

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
