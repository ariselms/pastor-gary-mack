// TODO: Import language from server side to make the metadata dynamic
import { AboutPageContent } from "@/components/pages-content/AboutPageContent";
import { languageOptions } from "@/static";
import { cookies } from "next/headers";

export default function AboutUsPage() {
	return (
		<main className="bg-black" role="main">
			<AboutPageContent />
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
			? "Bio | Pastor Gary Mack - Ministerio Los Rescatados Rescatando"
			: "Biografía | Pastor Gary Mack - Los Rescatados Rescatando Ministry",
		description: isEnglish
			? "Learn about the Pastor Gary Mack's life, a short bio about his beginnings, God's call and current work in the ministry."
			: "Aprende sobre la vida del Pastor Gary Mack, una biografía breve sobre sus inicios, el llamado de el Padre y su trabajo actual en el ministerio.",
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
				? "Bio | Pastor Gary Mack - Ministerio Los Rescatados Rescatando"
				: "Biografía | Pastor Gary Mack - Los Rescatados Rescatando Ministry",
			description: isEnglish
				? "Learn about the Pastor Gary Mack's life, a short bio about his beginnings, God's call and current work in the ministry."
				: "Aprende sobre la vida del Pastor Gary Mack, una biografía breve sobre sus inicios, el llamado de el Padre y su trabajo actual en el ministerio.",
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
