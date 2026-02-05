import StoreHomePageContent from "@/components/pages-content/StorePageContent";
import { getAllStoreProducts, ResponseObject } from "@/helpers/server";

export default async function StoreHomePage() {

	const ResponseObject: ResponseObject = await getAllStoreProducts();

	return (
		<main className="bg-black" role="main">
				<StoreHomePageContent ProductsData={ResponseObject.data} />
		</main>
	);
}
