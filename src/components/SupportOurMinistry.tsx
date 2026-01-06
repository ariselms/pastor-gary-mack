import Image from "next/image";
import Link from "next/link";
import { Container7xl } from "@/components/containers";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";

export default function SupportOurMinistry() {

  const { language } = useLanguageContext();

	return (
		<section className="bg-black border-b border-slate-900">
			<Container7xl>
				<div className="gap-8 items-center py-16 px-4 xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
					<Image
						width={500}
						height={500}
						className="w-full block"
						src="/images/gary-mack-adorando.jpg"
						alt="Gary Mack Adorando"
					/>
					<div className="mt-4 md:mt-0">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-slate-100">
							{language === languageOptions.english
								? "Support Pastor Gary Mack"
								: "Apoya al Pastor Gary Mack"}
						</h2>
						<p className="mb-4 font-light text-slate-200 md:text-lg">
							{language === languageOptions.spanish
								? "Si el Padre pone en tu corazón apoyar el ministerio del Pastor Gary Mack, puedes hacerlo de dos formas:"
								: "If the Father touches your heart to support the Pastor Gary Mack, you can do it in two ways:"}
						</p>
						<ul className="max-w-md space-y-1 text-body list-inside font-light text-slate-200 md:text-lg">
							<li className="flex items-start">
								<svg
									className="w-6 h-6 text-yellow-300 text-fg-success me-1.5 shrink-0 mt-1 mb-4"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
								{language === languageOptions.english
									? "Purchasing the book 'Mongoose Mentality,' which shares his powerful testimony and establishes prayer as the foundation for an effective communion with the Father."
									: "Comprando el libro 'Mentalidad de Mangosta', donde comparte su poderoso testimonio y la oración como fundamento para una comunión efectiva con el Padre."}
							</li>
							<li className="flex items-start">
								<svg
									className="w-6 h-6 text-yellow-300 text-fg-success me-1.5 shrink-0 mt-1"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
								{language === languageOptions.english
									? "Making a one-time or recurring donation. We humbly appreciate your support."
									: "Haciendo una donación única o recurrente. Agradecemos humildemente su apoyo."}
							</li>
						</ul>

						<div className="mt-8">
							<Link
								href="/books"
								className="inline-flex items-center font-medium text-white hover:text-slate-300 border-b-2 border-yellow-300">
								{language === languageOptions.english
									? "See Book Mongoose Mentality"
									: "Ver Libro Mentalidad de Mangosta"}
								<svg
									className="ml-2 -mr-1 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"></path>
								</svg>
							</Link>
						</div>
						<div className="mt-6">
							<Link
								href="/give"
								className="inline-flex items-center font-medium text-white hover:text-slate-300 border-b-2 border-yellow-300">
								{language === languageOptions.english
									? "See Donations"
									: "Ver Donaciones"}
								<svg
									className="ml-2 -mr-1 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</Container7xl>
		</section>
	);
}
