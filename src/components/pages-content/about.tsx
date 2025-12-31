"use client";

import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { JumbotronShared } from "@/components/jumbotron/";
import { Container7xl } from "@/components/containers";

export function AboutPageContent() {

	const { language } = useLanguageContext();

	return (
		<>
			<JumbotronShared
				topSmTitle={
					language === languageOptions.english ? "About Me" : "Sobre Mi"
				}
				mainTitle={
					language === languageOptions.english ? "My Values" : "Mis Valores"
				}
				mainText={
					language === languageOptions.english
						? "Learn about what moves my faith, my conviction and values in the Bible that move my minister."
						: "Aprende sobre aquello que me mueve en la fe, mis convicciones y valores bíblicos que meven mi ministerio."
				}
			/>
			<Container7xl>
				<article className="py-24 text-slate-200">
        Disponible pronto.
				</article>
			</Container7xl>
		</>
	);
}
