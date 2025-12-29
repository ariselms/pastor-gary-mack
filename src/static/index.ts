export const languageOptions = Object.freeze({
	english: "en",
	spanish: "es"
});

export const generalLanguage = Object.freeze({
	esWebsiteName: "Pastor Gary Mack",
	enWebsiteName: "Pastor Gary Mack",
	esAccessibilityMenu: "Open main menu",
	enAccessibilityMenu: "Abrir menu principal",
	esAccessibilityCloseMenu: "Close menu",
	enAccessibilityCloseMenu: "Cerrar menú",
	esMenuSpecialties: "Especialidades",
	enMenuSpecialties: "Specialties",
	esMenuCompany: "Empresa",
	enMenuCompany: "Company",
	esMenuSupport: "Soporte",
	enMenuSupport: "Support",
	esMenuLogin: "Sesión",
	enMenuLogin: "Login",
	enProfile: "Profile",
	esProfile: "Perfil",
	enLogout: "Logout",
	esLogout: "Cerrar sesión"
});

export const userRoles = Object.freeze({
	admin: "admin",
	user: "user"
});

let baseUrl;

if (process.env.NEXT_PUBLIC_VERCEL_ENV === "development") {
	baseUrl = "http://localhost:3000";
}

if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
	baseUrl = "https://pastorgarymack-dev.vercel.app";
}

if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
	baseUrl = "https://pastorgarymack.com";
}

let stripeLinkOneTimeDonationSpanish: string = "";
let stripeLinkOneTimeDonationEnglish: string = "";
let stripeCustomerPortalLink: string = "";

if (
	process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ||
	process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
) {
	stripeLinkOneTimeDonationSpanish =
		"https://donate.stripe.com/test_bJeeVeeYsb6M45mcHaawo00?locale=es-419";
	stripeLinkOneTimeDonationEnglish =
		"https://donate.stripe.com/test_7sYdRa3fK3Ek59qcHaawo01?locale=en";
	stripeCustomerPortalLink =
		"https://billing.stripe.com/p/login/test_bJeeVeeYsb6M45mcHaawo00";
}

if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
	stripeLinkOneTimeDonationSpanish =
		"https://donate.stripe.com/4gM5kD8v2g2e7wz2HR5Vu00?locale=es-419";
	stripeLinkOneTimeDonationEnglish =
		"https://donate.stripe.com/bJeaEX6mUcQ27wz5U35Vu01?locale=en";
	stripeCustomerPortalLink =
		"https://billing.stripe.com/p/login/4gM5kD8v2g2e7wz2HR5Vu00";
}

export const donationOptions = [
	{
		id: 1,
		title: {
			en: "One-Time Donation",
			es: "Donar Una Vez"
		},
		description: {
			en: "Sow a seed into this ministry to help us continue spreading the Gospel. As the scripture says, 'God loves a cheerful giver' (2 Corinthians 9:7). Your support makes a tangible difference in reaching lives for Christ. You can view your complete donation history at any time in your dashboard under the Donations tab.",
			es: "Siembre una semilla en este ministerio para ayudarnos a continuar esparciendo el Evangelio. Como dicen las escrituras, 'Dios ama al dador alegre' (2 Corintios 9:7). Su apoyo hace una diferencia tangible para alcanzar vidas para Cristo. Puede ver su historial completo de donaciones en cualquier momento en su panel bajo la pestaña de Donaciones."
		},
		imageUrl: "/images/give-heart.png",
		stripeLink: {
			en: {
				link: stripeLinkOneTimeDonationEnglish,
				text: "Donate Now"
			},
			es: {
				link: stripeLinkOneTimeDonationSpanish,
				text: "Donar Ahora"
			}
		},
		isRecurring: false
	}
	// {
	// 	id: 2,
	// 	title: {
	// 		en: "Recurrent Donation",
	// 		es: "Donación Recurrente"
	// 	},
	// 	description: {
	// 		en: "Become a pillar of this ministry with a recurring monthly contribution. Your consistent support helps us plan and expand our reach, knowing that 'It is more blessed to give than to receive' (Acts 20:35). Together, we can build a lasting legacy of faith. You have full control to view your history or cancel your subscription anytime from your dashboard under the Donations tab.",
	// 		es: "Conviértase en un pilar de este ministerio con una contribución mensual recurrente. Su apoyo constante nos ayuda a planificar y expandir nuestro alcance, sabiendo que 'Más bienaventurado es dar que recibir' (Hechos 20:35). Juntos podemos construir un legado de fe duradero. Tiene control total para ver su historial o cancelar su suscripción en cualquier momento desde su panel bajo la pestaña de Donaciones."
	// 	},
	// 	imageUrl: "/images/give-heart-both-hands.png",
	// 	stripeLink: {
	// 		en: {
	// 			link: "/",
	// 			text: "Subscribe Now"
	// 		},
	// 		es: {
	// 			link: "/",
	// 			text: "Suscribirme Ahora"
	// 		}
	// 	},
	// 	isRecurring: true
	// }
];

export const serverBaseUrl = baseUrl;

export { stripeLinkOneTimeDonationSpanish };
export { stripeLinkOneTimeDonationEnglish };
export { stripeCustomerPortalLink };
