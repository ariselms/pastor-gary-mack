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
			en: "Sow a seed into this ministry to help us continue spreading the Gospel. As the scripture says, 'God loves a cheerful giver' (2 Corinthians 9:7). Your support makes a tangible difference in reaching lives for Christ. You will receive an email with your donation information for your personal records.",
			es: "Siembre una semilla en este ministerio para ayudarnos a continuar esparciendo el Evangelio. Como dicen las escrituras, 'Dios ama al dador alegre' (2 Corintios 9:7). Su apoyo hace una diferencia tangible para alcanzar vidas para Cristo. Usted recibirá un correo electrónico con su información de donación para su registro personal."
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
];

// libro mentalidad de mangosta values
export const values = (isEnglish: boolean) => [
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
		coreValue: isEnglish ? "Relentless Persistence" : "Persistencia Implacable",
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
		subtitle: isEnglish ? "Conqueror's Mindset" : "Mentalidad de Conquistador",
		coreValue: isEnglish ? "Expectant Faith" : "Fe Expectante",
		belief: isEnglish
			? "Prayer without the expectation of an answer is an insult to God’s character. We pray from a position of victory, not for victory, because Christ has already overcome."
			: "Orar sin esperar una respuesta es un insulto al carácter de Dios. Oramos desde una posición de victoria, no para obtener la victoria, porque Cristo ya venció.",
		verse: isEnglish
			? "But when you ask, you must believe and not doubt... (James 1:6)"
			: "Pero pida con fe, no dudando nada... (Santiago 1:6)"
	}
];

export const availableBooks = Object.freeze({
  GaryMack: {
    English: {
      Book: "Mongoose Mentality"
    },
    Spanish: {
      Book: "Mentalidad de Mangosta"
    }
  }
})

export const serverBaseUrl = baseUrl;

export { stripeLinkOneTimeDonationSpanish };
export { stripeLinkOneTimeDonationEnglish };
export { stripeCustomerPortalLink };
