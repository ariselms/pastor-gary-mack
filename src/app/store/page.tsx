import StoreHomePageContent from "@/components/pages-content/StorePageContent";
import { getAllStoreProducts, ResponseObject } from "@/helpers/server";
import { languageOptions } from "@/static";
import { cookies } from "next/headers";

export default async function StoreHomePage() {

	const ResponseObject: ResponseObject = await getAllStoreProducts();

	return (
		<main className="bg-black" role="main">
				<StoreHomePageContent ProductsData={ResponseObject.data} />
		</main>
	);
}

export async function generateMetadata(): Promise<any> {
  // 1. Get the language cookie
  const language = (await cookies()).get("language")?.value;

  // 2. Define logic
  const isEnglish = language === languageOptions.english;

  // 3. Return the metadata object dynamically
  return {
		title: isEnglish
			? "Store | Pastor Gary Mack - Los Rescatados Rescatando Ministry"
			: "Tienda | Pastor Gary Mack - Ministerio Los Rescatados Rescatando",
		description: isEnglish
			? "Discover Pastor Gary Mack's Christian books, grow in faith and support our ministry."
			: "Descubre los libros del Pastor Gary Mack, crece en la fe y apoya nuestro ministerio.",
		keywords: [
			"pastor gary mack",
			isEnglish
				? "pastor gary mack store, los rescatados rescatando ministry, mongoose mentality, the prayer that God wants"
				: "tienda del pastor gary mack, ministerio los rescatados rescatando, mentalidad de mangosta, la oración que Dios quiere"
		],
		robots: {
			index: true,
			follow: true
		},
		openGraph: {
			title: isEnglish
				? "Store | Pastor Gary Mack - Los Rescatados Rescatando Ministry"
				: "Tienda | Pastor Gary Mack - Ministerio Los Rescatados Rescatando",
			description: isEnglish
				? "Discover Pastor Gary Mack's Christian books, grow in faith and support our ministry."
				: "Descubre los libros del Pastor Gary Mack, crece en la fe y apoya nuestro ministerio.",
			url: "https://pastorgarymack.com/",
			siteName: "Pastor Gary Mack",
			type: "website",
			locale: isEnglish ? "en_US" : "es_US",
			images: [
				{
					url: "https://pastorgarymack.com/images/gary-mack-logo.png",
					alt: "Pastor Gary Mack"
				}
			]
		}
	};
}
