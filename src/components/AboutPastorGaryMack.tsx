"use client"
import Link from "next/link";
import { Container7xl } from "@/components/containers";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function AboutPastorGaryMack() {

  const { language } = useLanguageContext();

	return (
		<section className="bg-black border-y border-slate-900">
			<Container7xl>
				<div className="py-16 px-4 lg:px-6">
					<div className="max-w-screen-lg text-slate-200 sm:text-lg ">
						<h2 className="mb-4 text-4xl tracking-tight font-bold">
							{language === languageOptions.english
								? "Who is Pastor Gary Mack?"
								: "¿Quién es el Pastor Gary Mack?"}
						</h2>
						<p className="mb-4 font-light">
							{language === languageOptions.english
								? "Pastor Gary Mack is a man whom the Father rescued from the streets of the Dominican Republic, calling him to serve full-time in the ministry of the Gospel of Jesus Christ."
								: "El Pastor Gary Mack es un hombre a quien el Padre rescató de las calles de la República Dominicana para llamarlo a servir a tiempo completo en el ministerio del Evangelio de Jesucristo."}
						</p>
						<p className="mb-4 font-medium">
							{language === languageOptions.english
								? "With over a decade of service in the Dominican Republic preaching the Gospel and helping the needy, he now pastors 'Nación de Fe' Church alongside his wife, Denisse Mack, and their family in the state of Maryland, USA."
								: "Con más de una década de servicio en la República Dominicana predicando el Evangelio y ayudando al necesitado, hoy se encuentra pastoreando la Iglesia Nación de Fe junto a su esposa, Denisse Mack, y su familia en el estado de Maryland, Estados Unidos."}
						</p>
						<p className="mb-4 font-medium">
							{language === languageOptions.english
								? "If you would like to learn more about Pastor Gary Mack, his background, church, and ministry, please click the link below."
								: "Si desea aprender más sobre el Pastor Gary Mack, su trayectoria, su iglesia y su ministerio, presione el siguiente enlace."}
						</p>
						<Link
							href="/about"
							className="inline-flex items-center font-medium text-white hover:text-slate-300 border-b-2 border-yellow-300 mt-4">
							{language === languageOptions.english
								? "Learn More"
								: "Aprende Más"}
							<svg
								className="ml-1 w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"></path>
							</svg>
						</Link>
					</div>
				</div>
			</Container7xl>
		</section>
	);
}
