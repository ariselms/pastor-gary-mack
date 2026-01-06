export const languageOptions = Object.freeze({
	english: "en",
	spanish: "es"
});

export const userRoles = Object.freeze({
	admin: "admin",
	user: "user"
});

let baseUrl: string | undefined;

if (process.env.NEXT_PUBLIC_VERCEL_ENV === "development") {
	baseUrl = "http://localhost:3000";
}

if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
	baseUrl = "https://pastorgarymack-dev.vercel.app";
}

if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
	baseUrl = "https://pastorgarymack.com";
}

// -- Stripe Related -- //
// Stripe Links //
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

// Stripe Donation Amounts
export const donationAmounts = [10, 25, 50, 75, 100];

// Stripe Donation Frequency
export const donationFrequencyOptions = {
	subscription: {
    text: {
      english: "Monthly Donation",
      spanish: "Donación Mensual"
    },
    value: "subscription"
  },
	payment: {
    text: {
      english: "One-time Donation",
      spanish: "Donar Una Vez"
    },
    value: "payment"
  }
};

// Stripe Checkout Modes
export const saleCagegories = {
	book: "book",
	donation: "donation"
};

// -- Books related -- //
// Book mentalidad de mangosta values
export const mentalidadDeMangostaValues = (isEnglish: boolean) => [
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
			MongooseMentality: "Mongoose Mentality"
		},
		Spanish: {
			MentalidadDeMangosta: "Mentalidad de Mangosta"
		}
	}
});

export const serverBaseUrl: string | undefined = baseUrl;

export { stripeLinkOneTimeDonationSpanish };
export { stripeLinkOneTimeDonationEnglish };
export { stripeCustomerPortalLink };
