"use client";
import { Container7xl } from "@/components/containers";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { JumbotronShared } from "@/components/jumbotron/";
import { GiveOrDonateCard } from "@/components/cards";
import { donationOptions } from "@/static";

export function GivePageContent() {

	const { language } = useLanguageContext();

	return (
		<>
			<JumbotronShared
				topSmTitle={
					language === languageOptions.english
						? "2 Corinthians 9:7"
						: "2 Corintios 9:7"
				}
				mainTitle={
					language === languageOptions.english
						? "Giving and Donations"
						: "Ofrendas y Donaciones"
				}
				mainText={
					language === languageOptions.english
						? "Thank you for visiting our giving and donations page. We are grateful of any amount in support of our ministry. Your contribution makes a difference."
						: "Gracias por visitar nuestra página de ofrendas y donaciones. Estamos muy agradecidos con cualquier cantidad en apoyo a nuestro ministerio. Tu aportación hace la diferencia."
				}
			/>
			<Container7xl>
				<section className="py-24">
					{donationOptions.map((option, index) => (
						<GiveOrDonateCard key={index} item={option} />
					))}
				</section>
			</Container7xl>
		</>
	);
}
