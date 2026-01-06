import { BookPageContent } from "@/components/books";
import { languageOptions } from "@/static";
import { cookies } from "next/headers";

export default async function BooksPage() {
	return (
		<main className="bg-black" role="main">
			<BookPageContent />
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
			? "Books | Pastor Gary Mack - Ministerio Los Rescatados Rescatando"
			: "Libros | Pastor Gary Mack - Los Rescatados Rescatando Ministry",
		description: isEnglish
			? "Discover Pastor Gary Mack's Christian books, grow in faith and support our ministry."
			: "Descubre los libros del Pastor Gary Mack, crece en la fe y apoya nuestro ministerio.",
		keywords: [
			"pastor gary mack",
			isEnglish
				? "los rescatados rescatando ministry, mongoose mentality, the prayer that God wants"
				: "ministerio los rescatados rescatando, mentalidad de mangosta, la oración que Dios quiere"
		],
		robots: {
			index: true,
			follow: true
		},
		openGraph: {
			title: isEnglish
				? "Discover Pastor Gary Mack's Christian books, grow in faith and support our ministry."
				: "Descubre los libros del Pastor Gary Mack, crece en la fe y apoya nuestro ministerio.",
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
