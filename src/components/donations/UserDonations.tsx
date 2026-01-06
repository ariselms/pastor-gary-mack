"use client";

import { MaxTextWidth } from "@/components/containers";
import { stripeCustomerPortalLink } from "@/static";

export function UserDonationsTab({
	userEmail,
	language,
	languageOptions
}: {
	userEmail: string;
	language: string;
	languageOptions: any;
}) {
	return (
		<section className="py-8">
			<MaxTextWidth>
        <h3>Correo Electrónico: {userEmail}</h3>
				{language === languageOptions.english
					? "To view your donation history or manage subscriptions, please access your customer portal below. Be sure to sign in using the same email address associated with your donations. Once you access your customer portal, you can cancel the subscription in the top right button. If you need assistance, please contact us."
					: "Para ver tu historial de donaciones o administrar tus suscripciones, visita tu portal de cliente. Asegúrate de ingresar con el mismo correo electrónico que usaste para donar. Una vez acceses tu portal de cliente, puedes cancelar la suscripción en el botón superior derecho. Si necesitas ayuda, no dudes en contactarnos."}
			</MaxTextWidth>
			<a
				href={stripeCustomerPortalLink}
				target="_blank"
				rel="noreferrer"
				className="relative rounded-lg text-center text-lg font-medium focus:outline-none focus:ring-4 px-5 py-3 bg-yellow-300 text-slate-900 hover:bg-yellow-400 focus:ring-yellow-300 w-fit cursor-pointer inline-block mt-8 transition-all shadow-md">
				{language === languageOptions.english
					? "Manage Donations & History"
					: "Administrar Donaciones e Historial"}
			</a>
		</section>
	);
}
