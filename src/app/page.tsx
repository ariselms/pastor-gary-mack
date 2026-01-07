// TODO: Import language from server side to make the metadata dynamic
import { HomePageContent } from "@/components/pages-content/HomePageContent";
import { languageOptions } from "@/static";
import { cookies } from "next/headers";

export default function HomePage() {
	return (
		<main className="bg-black" role="main">
			<HomePageContent />
		</main>
	);
}

export async function generateMetadata(): Promise<any> {
  // 1. Get the language cookie
  const language = (await cookies()).get("language")?.value;

  // 2. Define logic
  const isEnglish = language === languageOptions.english

  // 3. Return the metadata object dynamically
  return {
		title: isEnglish
			? "Home | Pastor Gary Mack - Ministerio Los Rescatados Rescatando"
			: "Inicio | Pastor Gary Mack - Los Rescatados Rescatando Ministry",
		description: isEnglish
			? "Discover the Christian books created by Pastor Gary Mack, grow in faith and support our ministry."
			: "Conoce los libros cristianos creados por el pastor Gary Mack, crece en la fe y apoya nuestro ministerio.",
		keywords: [
			"pastor gary mack",
			isEnglish
				? "los rescatados rescatando ministry, mongoose mentality, the prayer that God wants"
				: "ministerio los rescatados rescatando, mentalidad de mangosta, la oración que el Padre quiere"
		],
		robots: {
			index: true,
			follow: true
		},
		openGraph: {
			title: isEnglish
				? "Home | Pastor Gary Mack - Ministerio Los Rescatados Rescatando"
				: "Inicio | Pastor Gary Mack - Los Rescatados Rescatando Ministry",
			description: isEnglish
				? "Discover the Christian books created by Pastor Gary Mack, grow in faith and support our ministry."
				: "Conoce los libros cristianos creados por el pastor Gary Mack, crece en la fe y apoya nuestro ministerio.",
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
