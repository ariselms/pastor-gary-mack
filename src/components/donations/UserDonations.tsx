"use client"

import { MaxTextWidth } from "@/components/containers";
import { stripeCustomerPortalLink } from "@/static";

export function UserDonationsTab({userEmail, language, languageOptions}:{userEmail:string, language:string, languageOptions:any}){
  return (
		<section>
			<MaxTextWidth>
				{language === languageOptions.english
					? "To see your donation history, visit the following link. You have to use the exact same email used to submit your donation. If you have any issues, please visit our contact page and we will be happy to help you."
					: "Para ver tu historial de donaciones, visite el siguiente enlace. Recuerda que debe de utilizar el mismo correo electrónico utilizado para la donación. Si tienes algún problema, por favor visita nuestra página de contacto y con gusto te ayudaremos."}
			</MaxTextWidth>
			<a
				href={stripeCustomerPortalLink}
				className="relative rounded-lg text-center text-lg font-medium focus:outline-none focus:ring-4 px-5 py-3 bg-yellow-700 text-white hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 w-fit cursor-pointer inline-block mt-8 transition-all">
				{language === languageOptions.english
					? "See Donation History"
					: "Ver Mi Historial de donaciones"}
			</a>
		</section>
	);
}