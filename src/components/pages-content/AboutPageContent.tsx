"use client";

import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { JumbotronShared } from "@/components/jumbotron/";
import { Container3xl, MaxTextWidth } from "@/components/containers";
import SupportOurMinistry from "@/components/SupportOurMinistry";

export function AboutPageContent() {
	const { language } = useLanguageContext();
	const isEnglish = language === languageOptions.english;

	// aboutContent object to keep the return statement clean and readable
	const aboutContent = {
		topSmTitle: "Pastor Gary Mack",
		mainTitle: isEnglish ? "Biography" : "Biografía",
		mainText: isEnglish
			? "Discover the background of Pastor Gary Mack—a brief introduction to his life, trajectory, and ministry."
			: "Descubra el trasfondo del Pastor Gary Mack: una breve introducción a su vida, trayectoria y ministerio.",
		bioTitle: isEnglish
			? "The Biography of Pastor Gary Mack"
			: "La Biografía del Pastor Gary Mack",
		bioP1: isEnglish
			? "Pastor Gary Mack's life began in a crucible of rejection and extreme survival. Abandoned by his father and subjected to severe cruelty by his mother, he found himself destitute at a young age following the death of his grandmother. His childhood and adolescence were marred by familial abuse and the harsh realities of the streets, eventually leading him into the perilous world of the illicit drug trade. Yet, amidst the darkness and crime, a divine purpose preserved his life, protecting him even when surrounded by imminent peril."
			: "La vida del Pastor Gary Mack comenzó en un crisol de rechazo y supervivencia extrema. Abandonado por su padre y sometido a una crueldad severa por su madre, quedó desamparado a temprana edad tras el fallecimiento de su abuela. Su infancia y adolescencia estuvieron marcadas por el abuso familiar y la dureza de las calles, llevándolo finalmente al peligroso mundo del tráfico ilícito de drogas. Sin embargo, en medio de la oscuridad y el crimen, un propósito divino preservó su vida, protegiéndolo aun cuando estaba rodeado de peligros inminentes.",
		bioP2: isEnglish
			? 'His radical transformation occurred during a massive police raid from which escape seemed humanly impossible. After calling out to God and pledging his service, he was miraculously guided to safety—an event that marked the end of his criminal life and the beginning of his ministry. Together with his wife, he paid a high price for his faith, enduring homelessness and sleeping exposed to the elements in a churchyard. It was in this "furnace of affliction" that he forged what he calls the "Mongoose Mentality": an unwavering determination to confront the enemy and transform the poison of the past into strength.'
			: 'Su transformación radical ocurrió durante una redada policial masiva de la cual escapar parecía humanamente imposible. Tras clamar a Dios y prometerle su servicio, fue guiado milagrosamente hacia la seguridad—un evento que marcó el fin de su vida delictiva y el comienzo de su ministerio. Junto a su esposa, pagó un alto precio por su fe, soportando la indigencia y durmiendo a la intemperie en el patio de una iglesia. Fue en ese "horno de aflicción" donde forjó lo que él llama la "Mentalidad de Mangosta": una determinación inquebrantable para enfrentar al enemigo y transformar el veneno del pasado en fortaleza.',
		bioP3: isEnglish
			? 'Gary Mack stands as a living testament to the restorative power of the Gospel. As the founder and pastor of the ministry "Los Rescatados Rescatando" (The Rescued Rescuing) in the Los Ríos sector of the Dominican Republic, he dedicated over a decade of his life to reaching the marginalized, taking the Word of God into prisons, hospitals, and drug distribution points. His ministry has witnessed the conversion of thousands of inmates and criminals who surrendered their weapons in exchange for a new life. Through his books and preaching, he teaches that victory is conquered through prayer and faith, demonstrating that God can turn any history of pain into a glorious purpose.'
			: 'Gary Mack permanece como un testimonio vivo del poder restaurador del Evangelio. Como fundador y pastor del ministerio "Los Rescatados Rescatando" en el sector Los Ríos de la República Dominicana, dedicó más de una década de su vida a alcanzar a los marginados, llevando la Palabra de Dios a cárceles, hospitales y puntos de droga. Su ministerio ha sido testigo de la conversión de miles de reclusos y delincuentes que entregaron sus armas a cambio de una nueva vida. A través de sus libros y prédicas, enseña que la victoria se conquista con oración y fe, demostrando que Dios puede convertir cualquier historia de dolor en un propósito glorioso.',
		bioP4: isEnglish
			? "Today, Gary Mack continues his assignment in the Kingdom of Almighty God alongside his wife and children in the State of Maryland. He currently serves as the Senior Pastor of 'Nación de Fe' and its community of believers."
			: "Hoy, Gary Mack continúa su asignación en el Reino del Dios Todopoderoso junto a su esposa e hijos en el estado de Maryland. Actualmente sirve como Pastor Principal de la iglesia 'Nación de Fe' y su comunidad de creyentes."
	};

	return (
		<>
			<JumbotronShared
				topSmTitle={aboutContent.topSmTitle}
				mainTitle={aboutContent.mainTitle}
				mainText={aboutContent.mainText}
			/>
			<Container3xl>
				<article className="py-24 text-slate-200">
					<MaxTextWidth>
						<h1>{aboutContent.bioTitle}</h1>
						<p className="mb-3">{aboutContent.bioP1}</p>
						<p className="mb-3">{aboutContent.bioP2}</p>
						<p className="mb-3">{aboutContent.bioP3}</p>
						<p className="mb-3">{aboutContent.bioP4}</p>
					</MaxTextWidth>
				</article>
			</Container3xl>
			<SupportOurMinistry />
		</>
	);
}
