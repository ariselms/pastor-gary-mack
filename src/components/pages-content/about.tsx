"use client";

import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { JumbotronShared } from "@/components/jumbotron/";
import { Container7xl } from "@/components/containers";
import { CoreValuesCard } from "@/components/cards";

export function AboutPageContent() {
	const { language } = useLanguageContext();
	const isEnglish = language === languageOptions.english;

	const values = [
		{
			title: isEnglish
				? "Audacity and Spiritual Aggressiveness"
				: "Audacia y Agresividad Espiritual",
			subtitle: isEnglish ? "The Offensive Stance" : "La Postura Ofensiva",
			coreValue: isEnglish ? "Bold Faith" : "Fe Audaz",
			belief: isEnglish
				? "Prayer is not just asking; it is a weapon of warfare used to dismantle the works of the enemy. God is pleased when His children pray with the authority He gave them."
				: "La oración no es solo pedir; es un arma de guerra usada para desmantelar las obras del enemigo. A Dios le agrada cuando Sus hijos oran con la autoridad que Él les dio.",
			verse: isEnglish
				? "Let us then approach God’s throne of grace with confidence... (Hebrews 4:16)"
				: "Acerquémonos, pues, confiadamente al trono de la gracia... (Hebreos 4:16)"
		},
		{
			title: isEnglish ? "Tenacity and Resilience" : "Tenacidad y Resiliencia",
			subtitle: isEnglish ? "Immunity to Poison" : "Inmunidad al Veneno",
			coreValue: isEnglish
				? "Relentless Persistence"
				: "Persistencia Implacable",
			belief: isEnglish
				? "The prayer that pleases God is the one that refuses to give up. It is the 'widow and the judge' type of intercession: pounding on the door of Heaven until the answer manifests."
				: "La oración que agrada a Dios es la que se niega a rendirse. Es el tipo de intercesión de 'la viuda y el juez': golpear la puerta del Cielo hasta que la respuesta se manifieste.",
			verse: isEnglish
				? "...that they should always pray and not give up. (Luke 18:1)"
				: "...la necesidad de orar siempre, y no desmayar. (Lucas 18:1)"
		},
		{
			title: isEnglish ? "Strategic Alertness" : "Alerta Estratégica",
			subtitle: isEnglish ? "The Watchman" : "El Atalaya",
			coreValue: isEnglish ? "Watchful Intercession" : "Intercesión Vigilante",
			belief: isEnglish
				? "Prayer must be strategic and specific, not vague. A believer must 'watch and pray' to neutralize spiritual threats against their family, ministry, and purpose."
				: "La oración debe ser estratégica y específica, no vaga. Un creyente debe 'velar y orar' para neutralizar las amenazas espirituales contra su familia, ministerio y propósito.",
			verse: isEnglish
				? "Devote yourselves to prayer, being watchful and thankful. (Colossians 4:2)"
				: "Perseverad en la oración, velando en ella... (Colosenses 4:2)"
		},
		{
			title: isEnglish
				? "Total Reliance on the Spirit"
				: "Dependencia Total del Espíritu",
			subtitle: isEnglish ? "Spiritual Instinct" : "Instinto Espiritual",
			coreValue: isEnglish
				? "Spirit-Led Dependence"
				: "Dependencia Guiada por el Espíritu",
			belief: isEnglish
				? "We do not always know how to pray, but the Spirit intercedes for us. A pleasing prayer surrenders the human agenda to the Divine will."
				: "No siempre sabemos cómo orar, pero el Espíritu intercede por nosotros. Una oración agradable rinde la agenda humana a la voluntad Divina.",
			verse: isEnglish
				? "...the Spirit himself intercedes for us... (Romans 8:26)"
				: "...el Espíritu mismo intercede por nosotros... (Romanos 8:26)"
		},
		{
			title: isEnglish ? "Expectation of Victory" : "Expectativa de Victoria",
			subtitle: isEnglish
				? "Conqueror's Mindset"
				: "Mentalidad de Conquistador",
			coreValue: isEnglish ? "Expectant Faith" : "Fe Expectante",
			belief: isEnglish
				? "Prayer without the expectation of an answer is an insult to God’s character. We pray from a position of victory, not for victory, because Christ has already overcome."
				: "Orar sin esperar una respuesta es un insulto al carácter de Dios. Oramos desde una posición de victoria, no para obtener la victoria, porque Cristo ya venció.",
			verse: isEnglish
				? "But when you ask, you must believe and not doubt... (James 1:6)"
				: "Pero pida con fe, no dudando nada... (Santiago 1:6)"
		}
	];

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
				<article>
					<section className="w-full py-16">
						<div className="space-y-12">
							{/* Header */}
							<div className="text-center space-y-4">
								<h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
									{language === languageOptions.english
										? "Faith Values"
										: "Valores de la Fe"}
								</h2>
								<p className="mx-auto text-lg text-slate-200">
									{language === languageOptions.english
										? "Defined by the teology of the book 'Mongoose Mentality' from Pastor Gary Mack"
										: "Definidos por la teología del libro 'Mentalidad de Mangosta' del Pastor Gary Mack"}
								</p>
							</div>

							{/* Values Grid */}
							<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
								{values.map((item, index) => (
									<CoreValuesCard key={index} item={item} />
								))}
							</div>

							{/* Summary Quote */}
							<div className="relative mt-16 p-8 border-t border-b border-slate-700 text-center">
								<blockquote className="text-xl font-medium italic text-slate-200 leading-8">
									"La oración es la maniobra ofensiva de un creyente que conoce
									su identidad en Cristo. Es intrépida en la confrontación,
									persistente en la adversidad y confiada en la victoria que ya
									ha sido ganada."
								</blockquote>
								<cite className="block mt-4 text-sm font-semibold text-slate-400 not-italic">
									— Pastor Gary Mack
								</cite>
							</div>
						</div>
					</section>
				</article>
			</Container7xl>
		</>
	);
}
