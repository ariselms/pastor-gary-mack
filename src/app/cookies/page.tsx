import { CookiesPageContent } from "@/components/pages-content/cookies";
import { languageOptions } from "@/static";
import { cookies } from "next/headers";

export default function CookiesPage() {
	return (
		<main className="bg-black" role="main">
			<CookiesPageContent />
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
      ? "Pastor Gary Mack - Ministerio Los Rescatados Rescatando - Política de Cookies"
      : "Pastor Gary Mack - Los Rescatados Rescatando Ministry - Cookies Policy",
    description: isEnglish
      ? "Discover the Christian books created by Pastor Gary Mack."
      : "Conoce los libros cristianos creados por el pastor Gary Mack.",
    keywords: [
      "pastor gary mack",
      isEnglish
        ? "los rescatados rescatando ministry"
        : "ministerio los rescatados rescatando",
      isEnglish ? "mongoose mentality book" : "libro mentalidad de mangosta",
      isEnglish ? "the prayer god wants" : "libro la oración que Dios quiere"
    ],
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: isEnglish
        ? "Pastor Gary Mack - Ministry Los Rescatados Rescatando"
        : "Pastor Gary Mack - Ministerio Los Rescatados Rescatando",
      description: isEnglish
        ? "Pastor Gary Mack welcomes you to the page. We appreciate your support."
        : "Pastor Gary Mack - Ministerio Los Rescatados Rescatando te da la bienvenida a mi página. Agradecemos tu apoyo a nuestro ministerio.",
      url: "https://frutodelespiritu.com/lecturas",
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
