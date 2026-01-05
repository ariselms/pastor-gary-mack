"use client";
import { Container7xl } from "@/components/containers";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { JumbotronShared } from "@/components/jumbotron/";
import { DonationProductData } from "@/types/donationTypes";
import { useState } from "react";

export function GivePageContent() {

	const { language } = useLanguageContext();

  const [donationProductData, setDonationProductData] = useState<DonationProductData>({
    id: null,
    language: "",
    name: "",
    description: "",
    amount: null,
	  frequency: "",
	  images: []
  });

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
          <button></button>
				</section>
			</Container7xl>
		</>
	);
}
