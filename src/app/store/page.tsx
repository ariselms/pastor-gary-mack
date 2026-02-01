import { Suspense } from "react";
import StoreHomePageContent from "@/components/pages-content/StorePageContent";
import { getAllStoreProducts, ResponseObject } from "@/helpers/server";

export default async function StoreHomePage() {
	const ResponseObject: ResponseObject = await getAllStoreProducts();

	return (
		<main className="bg-black" role="main">
			<Suspense fallback={<div>Loading...</div>}>
				<StoreHomePageContent ProductsData={ResponseObject.data} />
			</Suspense>
		</main>
	);
}
