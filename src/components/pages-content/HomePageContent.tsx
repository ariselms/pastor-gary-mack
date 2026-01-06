"use client"
import { JumbotronWithCenteredLetters } from "@/components/jumbotron/";
import Link from "next/link";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import AboutPastorGaryMack from "@/components/AboutPastorGaryMack";
import SupportOurMinistry from "@/components/SupportOurMinistry";

export function HomePageContent() {

  const { language } = useLanguageContext();

	const renderJumbotronButtons = () => {
		return (
			<div className="flex items-center justify-center gap-4 flex-wrap">
				<Link
					href="/books"
					className="font-['Montserrat',sans-serif] font-bold text-white px-10 md:px-12 lg:px-16 py-4 md:py-6 lg:py-10 border-2 border-white/20 uppercase tracking-widest relative z-10 hover:bg-white hover:text-black transition-colors duration-300 text-[clamp(0.875rem,2vw,1.5rem)] text-center cursor-pointer bg-slate-100/10 bg-clip-padding backdrop-filter backdrop-blur-sm">
					{language === languageOptions.english
						? "Mongoose Mentality"
						: "Mentalidad de Mangosta"}
				</Link>
				<Link
					href="/give"
					className="font-['Montserrat',sans-serif] font-bold text-white px-10 md:px-12 lg:px-16 py-4 md:py-6 lg:py-10 border-2 border-white/20 uppercase tracking-widest relative z-10 hover:bg-white hover:text-black transition-colors duration-300 text-[clamp(0.875rem,2vw,1.5rem)] text-center cursor-pointer bg-slate-100/10 bg-clip-padding backdrop-filter backdrop-blur-sm">
					{language === languageOptions.english
						? "Support Our Ministry"
						: "Apoya Nuestro Ministerio"}
				</Link>
			</div>
		);
	};

	return (
		<>
			<JumbotronWithCenteredLetters
				fadedBackgroundText="Gary Mack"
				personTitleText="Pastor"
				personTitleSubText="Gary Mack"
				htmlContainer={renderJumbotronButtons()}
			/>
      <AboutPastorGaryMack/>
      <SupportOurMinistry/>
		</>
	);
}