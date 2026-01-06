import { GivePageContent } from "@/components/pages-content/GivePageContent";
import { languageOptions } from "@/static";
import { cookies } from "next/headers";

export default function GiveAndDonatePage() {
	return (
		<main className="bg-black" role="main">
			<GivePageContent />
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
			? "Donate | Pastor Gary Mack - Ministerio Los Rescatados Rescatando"
			: "Donar | Pastor Gary Mack - Los Rescatados Rescatando Ministry",
		description: isEnglish
			? "Support our ministry with any amount. We appreciate your support. May the Father God bless you!"
			: "Apoya nuestro ministerio con cualquier cantidad. Apreciamos tu apoyo. Dios Padre te bendiga!",
		keywords: [
			"donate to pastor gary mack",
			isEnglish
				? "donate to los rescatados rescatando ministry, mongoose mentality, the prayer that God wants"
				: "donate to ministerio los rescatados rescatando, mentalidad de mangosta, la oración que Dios quiere"
		],
		robots: {
			index: true,
			follow: true
		},
		openGraph: {
			title: isEnglish
				? "Donate | Pastor Gary Mack - Ministerio Los Rescatados Rescatando"
				: "Donar | Pastor Gary Mack - Los Rescatados Rescatando Ministry",
			description: isEnglish
				? "Support our ministry with any amount. We appreciate your support. May the Father God bless you!"
				: "Apoya nuestro ministerio con cualquier cantidad. Apreciamos tu apoyo. Dios Padre te bendiga!",
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
