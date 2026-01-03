"use client"

import ContactBlock from "@/components/ContactBlock";
import { Container7xl } from "@/components/containers";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export function ContactPageContent() {

  const { language } = useLanguageContext();

	return (
		<div className="bg-black py-16">
			<Container7xl>
				<h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
					{language === languageOptions.english ? "Contact us" : "Contáctanos"}
				</h1>
				<ContactBlock />
			</Container7xl>
		</div>
	);
}
