(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/geist_a71539c9.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_a71539c9-module__T19VSG__className",
  "variable": "geist_a71539c9-module__T19VSG__variable",
});
}),
"[next]/internal/font/google/geist_a71539c9.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_a71539c9.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/geist_mono_8d43a2aa.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_mono_8d43a2aa-module__8Li5zG__className",
  "variable": "geist_mono_8d43a2aa-module__8Li5zG__variable",
});
}),
"[next]/internal/font/google/geist_mono_8d43a2aa.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_8d43a2aa.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/context/languageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageContext",
    ()=>LanguageContext,
    "LanguageContextProvider",
    ()=>LanguageContextProvider,
    "useLanguageContext",
    ()=>useLanguageContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const LanguageContextProvider = (param)=>{
    let { children } = param;
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("es");
    const setLanguageAndLocalStorage = async (lang)=>{
        var _window;
        setLanguage(lang);
        localStorage.setItem("language", lang);
        await fetch("/api/language", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                language: lang
            })
        });
        (_window = window) === null || _window === void 0 ? void 0 : _window.location.reload();
        return lang;
    };
    const verifyLanguageFromLocalStorage = ()=>{
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
            return storedLanguage;
        } else {
            setLanguageAndLocalStorage("es");
        }
        return "es";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            setLanguageAndLocalStorage,
            verifyLanguageFromLocalStorage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/languageContext.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageContextProvider, "CRPkSA+YRVFBCEkSkv53gcji3Lc=");
_c = LanguageContextProvider;
const useLanguageContext = ()=>{
    _s1();
    const languageContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(LanguageContext);
    if (!languageContext) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return languageContext;
};
_s1(useLanguageContext, "u9AvBXXtB+3fBY3kFdreK4eFNCI=");
var _c;
__turbopack_context__.k.register(_c, "LanguageContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/static/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "availableBooks",
    ()=>availableBooks,
    "donationAmounts",
    ()=>donationAmounts,
    "donationFrequencyOptions",
    ()=>donationFrequencyOptions,
    "languageOptions",
    ()=>languageOptions,
    "mentalidadDeMangostaValues",
    ()=>mentalidadDeMangostaValues,
    "saleCagegories",
    ()=>saleCagegories,
    "serverBaseUrl",
    ()=>serverBaseUrl,
    "stripeCustomerPortalLink",
    ()=>stripeCustomerPortalLink,
    "stripeLinkOneTimeDonationEnglish",
    ()=>stripeLinkOneTimeDonationEnglish,
    "stripeLinkOneTimeDonationSpanish",
    ()=>stripeLinkOneTimeDonationSpanish,
    "userRoles",
    ()=>userRoles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const languageOptions = Object.freeze({
    english: "en",
    spanish: "es"
});
const userRoles = Object.freeze({
    admin: "admin",
    user: "user"
});
let baseUrl;
if (("TURBOPACK compile-time value", "development") === "development") {
    baseUrl = "http://localhost:3000";
}
if (("TURBOPACK compile-time value", "development") === "preview") {
    baseUrl = "https://pastorgarymack-dev.vercel.app";
}
if (("TURBOPACK compile-time value", "development") === "production") {
    baseUrl = "https://pastorgarymack.com";
}
// -- Stripe Related -- //
// Stripe Links //
let stripeLinkOneTimeDonationSpanish = "";
let stripeLinkOneTimeDonationEnglish = "";
let stripeCustomerPortalLink = "";
if (("TURBOPACK compile-time value", "development") === "development" || ("TURBOPACK compile-time value", "development") === "preview") {
    stripeLinkOneTimeDonationSpanish = "https://donate.stripe.com/test_bJeeVeeYsb6M45mcHaawo00?locale=es-419";
    stripeLinkOneTimeDonationEnglish = "https://donate.stripe.com/test_7sYdRa3fK3Ek59qcHaawo01?locale=en";
    stripeCustomerPortalLink = "https://billing.stripe.com/p/login/test_bJeeVeeYsb6M45mcHaawo00";
}
if (("TURBOPACK compile-time value", "development") === "production") {
    stripeLinkOneTimeDonationSpanish = "https://donate.stripe.com/4gM5kD8v2g2e7wz2HR5Vu00?locale=es-419";
    stripeLinkOneTimeDonationEnglish = "https://donate.stripe.com/bJeaEX6mUcQ27wz5U35Vu01?locale=en";
    stripeCustomerPortalLink = "https://billing.stripe.com/p/login/4gM5kD8v2g2e7wz2HR5Vu00";
}
const donationAmounts = [
    10,
    25,
    50,
    75,
    100
];
const donationFrequencyOptions = {
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
const saleCagegories = {
    book: "book",
    donation: "donation"
};
const mentalidadDeMangostaValues = (isEnglish)=>[
        {
            title: isEnglish ? "Audacity and Spiritual Aggressiveness" : "Audacia y Agresividad Espiritual",
            subtitle: isEnglish ? "The Offensive Stance" : "La Postura Ofensiva",
            coreValue: isEnglish ? "Bold Faith" : "Fe Audaz",
            belief: isEnglish ? "Prayer is not just asking; it is a weapon of warfare used to dismantle the works of the enemy. God is pleased when His children pray with the authority He gave them." : "La oración no es solo pedir; es un arma de guerra usada para desmantelar las obras del enemigo. A Dios le agrada cuando Sus hijos oran con la autoridad que Él les dio.",
            verse: isEnglish ? "Let us then approach God’s throne of grace with confidence... (Hebrews 4:16)" : "Acerquémonos, pues, confiadamente al trono de la gracia... (Hebreos 4:16)"
        },
        {
            title: isEnglish ? "Tenacity and Resilience" : "Tenacidad y Resiliencia",
            subtitle: isEnglish ? "Immunity to Poison" : "Inmunidad al Veneno",
            coreValue: isEnglish ? "Relentless Persistence" : "Persistencia Implacable",
            belief: isEnglish ? "The prayer that pleases God is the one that refuses to give up. It is the 'widow and the judge' type of intercession: pounding on the door of Heaven until the answer manifests." : "La oración que agrada a Dios es la que se niega a rendirse. Es el tipo de intercesión de 'la viuda y el juez': golpear la puerta del Cielo hasta que la respuesta se manifieste.",
            verse: isEnglish ? "...that they should always pray and not give up. (Luke 18:1)" : "...la necesidad de orar siempre, y no desmayar. (Lucas 18:1)"
        },
        {
            title: isEnglish ? "Strategic Alertness" : "Alerta Estratégica",
            subtitle: isEnglish ? "The Watchman" : "El Atalaya",
            coreValue: isEnglish ? "Watchful Intercession" : "Intercesión Vigilante",
            belief: isEnglish ? "Prayer must be strategic and specific, not vague. A believer must 'watch and pray' to neutralize spiritual threats against their family, ministry, and purpose." : "La oración debe ser estratégica y específica, no vaga. Un creyente debe 'velar y orar' para neutralizar las amenazas espirituales contra su familia, ministerio y propósito.",
            verse: isEnglish ? "Devote yourselves to prayer, being watchful and thankful. (Colossians 4:2)" : "Perseverad en la oración, velando en ella... (Colosenses 4:2)"
        },
        {
            title: isEnglish ? "Total Reliance on the Spirit" : "Dependencia Total del Espíritu",
            subtitle: isEnglish ? "Spiritual Instinct" : "Instinto Espiritual",
            coreValue: isEnglish ? "Spirit-Led Dependence" : "Dependencia Guiada por el Espíritu",
            belief: isEnglish ? "We do not always know how to pray, but the Spirit intercedes for us. A pleasing prayer surrenders the human agenda to the Divine will." : "No siempre sabemos cómo orar, pero el Espíritu intercede por nosotros. Una oración agradable rinde la agenda humana a la voluntad Divina.",
            verse: isEnglish ? "...the Spirit himself intercedes for us... (Romans 8:26)" : "...el Espíritu mismo intercede por nosotros... (Romanos 8:26)"
        },
        {
            title: isEnglish ? "Expectation of Victory" : "Expectativa de Victoria",
            subtitle: isEnglish ? "Conqueror's Mindset" : "Mentalidad de Conquistador",
            coreValue: isEnglish ? "Expectant Faith" : "Fe Expectante",
            belief: isEnglish ? "Prayer without the expectation of an answer is an insult to God’s character. We pray from a position of victory, not for victory, because Christ has already overcome." : "Orar sin esperar una respuesta es un insulto al carácter de Dios. Oramos desde una posición de victoria, no para obtener la victoria, porque Cristo ya venció.",
            verse: isEnglish ? "But when you ask, you must believe and not doubt... (James 1:6)" : "Pero pida con fe, no dudando nada... (Santiago 1:6)"
        }
    ];
const availableBooks = Object.freeze({
    GaryMack: {
        English: {
            MongooseMentality: "Mongoose Mentality"
        },
        Spanish: {
            MentalidadDeMangosta: "Mentalidad de Mangosta"
        }
    }
});
const serverBaseUrl = baseUrl;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/svg/Icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BannerIconTheme",
    ()=>BannerIconTheme,
    "CarWrapIcon",
    ()=>CarWrapIcon,
    "Cog",
    ()=>Cog,
    "DesignIcon",
    ()=>DesignIcon,
    "GlassArtIcon",
    ()=>GlassArtIcon,
    "MenuIcon",
    ()=>MenuIcon,
    "PRFlag",
    ()=>PRFlag,
    "PrintIcon",
    ()=>PrintIcon,
    "USFlag",
    ()=>USFlag,
    "WallArtIcon",
    ()=>WallArtIcon,
    "WebsiteIcon",
    ()=>WebsiteIcon,
    "XClose",
    ()=>XClose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Cog = (param)=>{
    let { onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        onClick: onClick,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        className: "size-8 fill-marinedark cursor-pointer hover:rotate-12 transition-all duration-300 ease-in-out",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 15,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 20,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Cog;
const XClose = (param)=>{
    let { onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        onClick: onClick,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        className: "size-8 text-slate-700 cursor-pointer hover:text-slate-500 hover:rotate-12 transition-all duration-300 ease-in-out ml-auto mt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/Icons.tsx",
            lineNumber: 39,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = XClose;
const PRFlag = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "800px",
        height: "800px",
        viewBox: "0 0 36 36",
        "aria-hidden": "true",
        role: "img",
        className: "size-8 ml-1",
        preserveAspectRatio: "xMidYMid meet",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#EA0B19",
                d: "M32 5H4a3.978 3.978 0 0 0-2.629.99L6.923 10H36V9a4 4 0 0 0-4-4z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 58,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#EEE",
                d: "M13.846 15H36v-5H6.923z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 61,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#EA0B19",
                d: "M18 18l-4.154 3H36v-6H13.846z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 62,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#EEE",
                d: "M6.923 26H36v-5H13.846z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 63,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#EA0B19",
                d: "M1.371 30.01c.703.615 1.621.99 2.629.99h28a4 4 0 0 0 4-4v-1H6.923l-5.552 4.01z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 64,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#0F55EC",
                d: "M13.846 21L18 18l-4.154-3l-6.923-5l-5.552-4.01A3.988 3.988 0 0 0 0 9v18c0 1.201.532 2.276 1.371 3.01L6.923 26l6.923-5z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 67,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#FFF",
                d: "M8.187 18.838l2.313-1.675H7.641l-.888-2.726l-.89 2.726H3l2.315 1.677l-.89 2.723l2.325-1.684l2.325 1.684z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 70,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = PRFlag;
const USFlag = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "size-8 ml-1",
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                style: {
                    fill: "#f5f5f5"
                },
                d: "M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38  c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621  C512,105.443,494.833,88.276,473.655,88.276z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 85,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#FF4B55"
                        },
                        d: "M2.109,114.08H509.89c-5.196-15.017-19.452-25.804-36.235-25.804H38.345   C21.561,88.276,7.306,99.063,2.109,114.08z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 92,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        y: "191.49",
                        style: {
                            fill: "#FF4B55"
                        },
                        width: "512",
                        height: "25.803"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 97,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        y: "139.88",
                        style: {
                            fill: "#FF4B55"
                        },
                        width: "512",
                        height: "25.803"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 103,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#FF4B55"
                        },
                        d: "M0,260.074c0,4.875,3.953,8.828,8.828,8.828H512v-25.804H0V260.074z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 109,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        y: "346.32",
                        style: {
                            fill: "#FF4B55"
                        },
                        width: "512",
                        height: "25.804"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 113,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#FF4B55"
                        },
                        d: "M509.891,397.92H2.109c5.197,15.017,19.453,25.804,36.236,25.804h435.31   C490.439,423.724,504.694,412.937,509.891,397.92z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 119,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        y: "294.71",
                        style: {
                            fill: "#FF4B55"
                        },
                        width: "512",
                        height: "25.803"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 124,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 91,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                style: {
                    fill: "#41479B"
                },
                d: "M8.828,268.902h220.69c4.875,0,8.828-3.953,8.828-8.828V97.103c0-4.876-3.953-8.828-8.828-8.828  H38.345C17.167,88.276,0,105.443,0,126.621v133.453C0,264.95,3.953,268.902,8.828,268.902z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 131,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M24.789,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928L24,122.841l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C23.463,107.778,24.535,107.778,24.789,108.537z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 137,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M24.789,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928L24,153.496l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,138.433,24.535,138.433,24.789,139.191z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 143,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M24.789,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928L24,184.151l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,169.087,24.535,169.087,24.789,169.846z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 149,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M24.789,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928L24,214.805l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,199.741,24.535,199.741,24.789,200.5z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 155,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M24.789,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928L24,245.459l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,230.396,24.535,230.396,24.789,231.154z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 161,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M48.582,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,122.808,48.329,122.808,48.582,123.566z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 167,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M48.582,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,153.462,48.329,153.462,48.582,154.221z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 173,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M48.582,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,184.116,48.329,184.116,48.582,184.875z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 179,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M48.582,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,214.771,48.329,214.771,48.582,215.529z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 185,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M72.375,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C71.049,107.778,72.122,107.778,72.375,108.537z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 191,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M72.375,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,138.433,72.122,138.433,72.375,139.191z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 197,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M72.375,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,169.087,72.122,169.087,72.375,169.846z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 203,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M72.375,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,199.741,72.122,199.741,72.375,200.5z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 209,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M72.375,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,230.396,72.122,230.396,72.375,231.154z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 215,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M96.169,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,122.808,95.916,122.808,96.169,123.566z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 221,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M96.169,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,153.462,95.916,153.462,96.169,154.221z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 227,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M96.169,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,184.116,95.916,184.116,96.169,184.875z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 233,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M96.169,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,214.771,95.916,214.771,96.169,215.529z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 239,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M119.962,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.591l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C118.636,107.778,119.709,107.778,119.962,108.537z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 245,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M119.962,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,138.433,119.709,138.433,119.962,139.191z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 251,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M119.962,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.593l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,169.087,119.709,169.087,119.962,169.846z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 257,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M119.962,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,199.741,119.709,199.741,119.962,200.5z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 263,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M119.962,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,230.396,119.709,230.396,119.962,231.154z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 269,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M143.755,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,122.808,143.502,122.808,143.755,123.566z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 275,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M143.755,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,153.462,143.502,153.462,143.755,154.221z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 281,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M143.755,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,184.116,143.502,184.116,143.755,184.875z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 287,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M143.755,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,214.771,143.502,214.771,143.755,215.529z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 293,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M167.549,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C166.222,107.778,167.296,107.778,167.549,108.537z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 299,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M167.549,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,138.433,167.296,138.433,167.549,139.191z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 305,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M167.549,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,169.087,167.296,169.087,167.549,169.846z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 311,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M167.549,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,199.741,167.296,199.741,167.549,200.5z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 317,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M167.549,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,230.396,167.296,230.396,167.549,231.154z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 323,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M191.342,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,122.808,191.089,122.808,191.342,123.566z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 329,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M191.342,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,153.462,191.089,153.462,191.342,154.221z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 335,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M191.342,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,184.116,191.089,184.116,191.342,184.875z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 341,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M191.342,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,214.771,191.089,214.771,191.342,215.529z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 347,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M215.136,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C213.81,107.778,214.882,107.778,215.136,108.537z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 353,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M215.136,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,138.433,214.882,138.433,215.136,139.191z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 359,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M215.136,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,169.087,214.882,169.087,215.136,169.846z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 365,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M215.136,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,199.741,214.882,199.741,215.136,200.5z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 371,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        style: {
                            fill: "#f5f5f5"
                        },
                        d: "M215.136,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,230.396,214.882,230.396,215.136,231.154z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 377,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 136,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = USFlag;
const MenuIcon = (param)=>{
    let { onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        onClick: onClick,
        className: "w-10 h-10 md:hidden cursor-pointer fill-white",
        clipRule: "evenodd",
        fillRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: "2",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z",
            fillRule: "nonzero"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/Icons.tsx",
            lineNumber: 399,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 390,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = MenuIcon;
const BannerIconTheme = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "dark:fill-slate-300 mb-8",
        width: "50px",
        height: "50px",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        xmlSpace: "preserve",
        style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "matrix(1,0,0,1,0.000403892,-0.000575519)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "Banners",
                transform: "matrix(0.0976557,0,0,0.0976562,-0.00036445,0.000519315)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M310.796,188.532C309.489,188.532 308.176,188.3 306.918,187.825L256.038,168.652L206.167,187.8C202.688,189.134 198.772,188.619 195.758,186.43C192.744,184.241 191.044,180.675 191.238,176.954L194.037,123.644L160.438,82.161C158.093,79.266 157.374,75.381 158.524,71.839C159.675,68.296 162.542,65.576 166.14,64.612L217.647,50.815L246.72,5.099C248.724,1.949 252.189,0.029 255.922,0.002C259.674,-0.059 263.149,1.843 265.197,4.964L295.284,50.792L346.88,64.613C350.479,65.577 353.345,68.297 354.496,71.84C355.646,75.382 354.927,79.267 352.582,82.162L318.983,123.645L321.782,176.955C321.976,180.663 320.287,184.219 317.29,186.411C315.378,187.809 313.098,188.532 310.796,188.532ZM256.002,145.884C257.316,145.884 258.631,146.119 259.881,146.591L298.93,161.306L296.792,120.582C296.65,117.867 297.518,115.195 299.23,113.082L324.824,81.481L285.545,70.96C282.937,70.261 280.677,68.628 279.195,66.372L256.15,31.269L233.914,66.236C232.435,68.561 230.139,70.246 227.478,70.959L188.198,81.48L213.792,113.081C215.503,115.194 216.371,117.866 216.23,120.581L214.098,161.19L252.061,146.614C253.329,146.127 254.665,145.884 256.002,145.884ZM224.631,60.334L224.641,60.334L224.631,60.334Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/svg/Icons.tsx",
                            lineNumber: 428,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 427,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M443.96,256.613C440.717,256.613 437.603,255.177 435.494,252.635L410.48,222.478L371.379,219.968C367.503,219.719 364.046,217.445 362.283,213.984C360.519,210.524 360.712,206.39 362.789,203.108L383.742,170L374.047,132.038C373.086,128.275 374.181,124.284 376.927,121.538C379.674,118.792 383.67,117.698 387.427,118.659L425.39,128.354L458.499,107.402C461.779,105.326 465.915,105.133 469.375,106.897C472.835,108.661 475.109,112.117 475.358,115.993L477.868,155.093L508.025,180.106C511.014,182.585 512.474,186.458 511.867,190.294C511.26,194.13 508.675,197.361 505.065,198.795L468.654,213.266L454.184,249.677C452.749,253.286 449.518,255.871 445.682,256.479C445.108,256.569 444.532,256.613 443.96,256.613ZM391.297,199.201L416.624,200.827C419.645,201.021 422.453,202.452 424.386,204.782L440.588,224.316L449.96,200.732C451.078,197.919 453.307,195.69 456.12,194.572L479.705,185.199L460.171,168.997C457.841,167.064 456.41,164.256 456.216,161.235L454.591,135.909L433.145,149.48C430.586,151.1 427.474,151.591 424.541,150.842L399.951,144.562L406.231,169.151C406.98,172.085 406.487,175.197 404.868,177.755L391.297,199.201Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/svg/Icons.tsx",
                            lineNumber: 434,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 433,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M69.061,256.613C68.49,256.613 67.914,256.569 67.339,256.478C63.503,255.87 60.272,253.285 58.837,249.676L44.388,213.316L7.026,198.828C3.363,197.408 0.735,194.141 0.132,190.26C-0.471,186.378 1.043,182.468 4.104,180.005L35.161,154.998L37.664,115.993C37.913,112.117 40.187,108.66 43.647,106.897C47.109,105.133 51.242,105.326 54.523,107.402L87.632,128.354L125.595,118.659C129.356,117.697 133.348,118.792 136.095,121.538C138.841,124.285 139.936,128.275 138.975,132.038L129.28,170L150.231,203.108C152.308,206.39 152.501,210.524 150.737,213.984C148.974,217.444 145.517,219.719 141.641,219.968L102.54,222.478L77.526,252.635C75.418,255.177 72.304,256.613 69.061,256.613ZM32.73,185.199L56.815,194.538C59.668,195.644 61.931,197.888 63.061,200.731L72.433,224.315L88.635,204.781C90.568,202.45 93.375,201.02 96.397,200.826L121.724,199.2L108.153,177.755C106.534,175.196 106.041,172.084 106.79,169.151L113.07,144.562L88.48,150.842C85.547,151.592 82.435,151.098 79.876,149.48L58.43,135.909L56.805,161.235C56.608,164.312 55.127,167.165 52.726,169.098L32.73,185.199Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/svg/Icons.tsx",
                            lineNumber: 440,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 439,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M508.782,428.531L449.872,369.611C450.202,368.291 450.452,367.331 450.582,366.821L465.712,320.411C467.442,315.101 464.932,309.351 459.862,307.011L453.332,303.991C392.212,275.791 324.152,260.881 256.512,260.881C188.862,260.881 120.802,275.791 59.682,303.991L53.152,307.011C48.142,309.321 45.622,315.001 47.262,320.271C47.312,320.431 52.332,336.491 56.582,349.261L62.452,366.851C62.582,367.361 62.812,368.291 63.142,369.551L3.282,428.461C0.382,431.321 -0.708,435.551 0.462,439.451C1.622,443.351 4.852,446.291 8.842,447.091L55.572,456.441L64.912,503.161C65.712,507.141 68.632,510.351 72.512,511.531C73.562,511.851 74.632,512.001 75.702,512.001C78.572,512.001 81.382,510.871 83.472,508.781L115.822,476.431C126.662,465.591 132.132,451.601 131.212,437.031C130.582,427.051 126.942,417.281 120.832,408.711C208.612,380.551 304.592,380.571 392.342,408.761C376.592,430.821 377.652,457.901 396.182,476.431L428.532,508.781C430.622,510.871 433.432,512.001 436.302,512.001C437.372,512.001 438.442,511.851 439.492,511.531C443.372,510.351 446.292,507.141 447.092,503.161L456.432,456.441L503.162,447.091C507.132,446.291 510.352,443.371 511.532,439.491C512.702,435.612 511.652,431.392 508.782,428.531ZM100.272,460.872L82.452,478.692L75.702,444.932C74.832,440.582 71.422,437.172 67.072,436.302L33.512,429.592L69.642,394.022C71.532,400.832 73.462,407.492 74.992,412.102C76.522,416.702 80.812,419.622 85.422,419.622C86.502,419.622 87.582,419.472 88.662,419.142C91.632,418.222 94.862,417.202 98.332,416.092C104.842,422.542 108.752,430.462 109.252,438.422C109.782,446.712 106.672,454.471 100.272,460.872ZM71.172,322.932C189.072,269.302 323.852,269.292 441.762,322.892L420.312,394.792C415.482,393.232 410.182,391.492 404.472,389.582C309.052,357.622 203.952,357.622 108.532,389.582C102.832,391.502 97.542,393.242 92.712,394.792C88.154,378.373 71.172,322.932 71.172,322.932ZM444.932,436.301C440.582,437.171 437.172,440.581 436.302,444.931L429.552,478.691L411.732,460.871C397.592,446.731 403.002,428.361 414.762,416.121C418.192,417.211 421.402,418.221 424.362,419.131C430.072,420.891 436.142,417.771 438.032,412.101C439.552,407.531 441.462,400.941 443.332,394.191L478.692,429.551L444.932,436.301Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/svg/Icons.tsx",
                            lineNumber: 446,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 445,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 424,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/svg/Icons.tsx",
            lineNumber: 423,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 409,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = BannerIconTheme;
const DesignIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "dark:fill-slate-300 mb-8",
        width: "50px",
        height: "50px",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        xmlSpace: "preserve",
        style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "matrix(1,0,0,1,-0.0493009,-120.53)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "matrix(0.0976562,0,0,0.0976562,25.0493,145.53)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "matrix(1,0,0,1,-256,-256)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "_clip1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "0",
                                y: "0",
                                width: "512",
                                height: "512"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 477,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/svg/Icons.tsx",
                            lineNumber: 476,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            clipPath: "url(#_clip1)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: "matrix(1.00121,0,0,1.00121,0,0)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M224.095,366.873C201.213,366.873 182.597,385.488 182.597,408.37C184.877,463.423 263.322,463.407 265.593,408.37C265.593,385.488 246.976,366.873 224.095,366.873ZM224.095,427.868C213.344,427.868 204.597,419.121 204.597,408.37C205.668,382.504 242.526,382.512 243.593,408.37C243.593,419.121 234.846,427.868 224.095,427.868Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/svg/Icons.tsx",
                                                lineNumber: 482,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M112.269,183.884C89.387,183.884 70.771,202.5 70.771,225.382C73.051,280.434 151.495,280.419 153.766,225.382C153.767,202.501 135.151,183.884 112.269,183.884ZM112.269,244.88C101.518,244.88 92.771,236.133 92.771,225.382C93.842,199.516 130.699,199.522 131.766,225.382C131.767,236.133 123.02,244.88 112.269,244.88Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/svg/Icons.tsx",
                                                lineNumber: 483,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M289.167,223.339C269.706,203.878 235.563,203.878 216.103,223.339C211.235,228.207 203.95,238.744 196.92,273.888C193.274,292.117 191.458,308.296 191.383,308.976C191.014,312.297 192.175,315.606 194.537,317.969C196.896,320.336 200.238,321.494 203.53,321.123C225.137,319.042 279.109,309.315 289.166,296.402C308.628,276.943 308.628,242.8 289.167,223.339ZM273.61,280.847C267.542,286.916 240.872,293.543 215.086,297.42C218.963,271.634 225.59,244.964 231.659,238.896C236.746,233.809 244.784,230.809 252.984,230.809C280.75,230.532 290.067,263.246 273.61,280.847Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/svg/Icons.tsx",
                                                lineNumber: 484,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 481,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M122.435,305.877C99.553,305.877 80.937,324.493 80.937,347.375C83.217,402.427 161.661,402.412 163.932,347.375C163.933,324.493 145.317,305.877 122.435,305.877ZM122.435,366.873C111.684,366.873 102.937,358.126 102.937,347.375C104.008,321.509 140.865,321.515 141.932,347.375C141.933,358.126 133.186,366.873 122.435,366.873Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/svg/Icons.tsx",
                                                lineNumber: 487,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M152.933,72.059C130.051,72.059 111.436,90.675 111.436,113.557C113.715,168.609 192.16,168.592 194.431,113.557C194.431,90.675 175.814,72.059 152.933,72.059ZM152.933,133.054C142.182,133.054 133.436,124.308 133.436,113.557C134.507,87.69 171.364,87.698 172.431,113.557C172.431,124.308 163.684,133.054 152.933,133.054Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/svg/Icons.tsx",
                                                lineNumber: 488,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M504.82,7.686C471.296,-22.137 381.956,58.246 347.655,91.798C320.127,119.02 295.488,148.38 278.808,173.479C258.173,160.799 245.26,138.178 245.26,113.557L245.26,52.561C245.26,24.074 222.083,0.897 193.596,0.897C141.172,0.897 92.094,27.838 55.405,76.758C-18.465,171.151 -18.473,340.611 55.407,435.002C128.38,535.633 258.815,535.658 331.789,435C367.77,387.028 387.585,323.415 387.585,255.88C387.585,238.935 381.655,222.797 371.033,209.988C410.256,180.304 542.076,48.72 504.82,7.686ZM347.861,200.252C347.78,200.314 347.698,200.375 347.618,200.44C328.493,215.152 310.735,226.386 296.391,232.648C300.21,239.033 302.542,246.21 303.387,253.568C317.906,247.444 335.132,237.055 353.625,223.446C361.299,232.43 365.584,243.868 365.584,255.88C355.946,565.008 31.247,565.02 21.608,255.878C21.608,127.412 98.762,22.896 193.596,22.896C209.952,22.896 223.26,36.204 223.26,52.56L223.26,113.556C223.26,145.879 240.208,175.574 267.29,192.218C263.972,198.165 261.175,203.82 258.941,209.117C266.298,209.963 273.473,212.294 279.858,216.113C282.734,209.526 286.656,202.222 291.483,194.395C291.78,193.989 292.047,193.556 292.29,193.103C302.216,177.215 315.772,159.26 331.785,140.848C352.17,144.541 367.965,160.336 371.658,180.721C363.593,187.735 355.616,194.278 347.861,200.252ZM406.83,147.582C401.294,153.238 395.638,158.759 389.852,164.207C382.63,145 367.505,129.875 348.298,122.653C356.869,113.548 365.081,105.343 374.307,96.68C395.261,100.999 411.505,117.243 415.825,138.198C412.655,141.573 409.703,144.649 406.83,147.582ZM472.677,66.417C462.567,82.815 448.896,100.973 432.85,119.465C425.407,101.786 410.721,87.1 393.042,79.657C415.238,59.195 472.108,18.37 489.251,23.256C490.296,25.259 490.396,37.676 472.677,66.417Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/svg/Icons.tsx",
                                                lineNumber: 489,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 486,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 480,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/svg/Icons.tsx",
                            lineNumber: 479,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/svg/Icons.tsx",
                    lineNumber: 475,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 474,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/svg/Icons.tsx",
            lineNumber: 473,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 459,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = DesignIcon;
const PrintIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "dark:fill-slate-300 mb-8",
        width: "50px",
        height: "50px",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        xmlSpace: "preserve",
        style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "matrix(1,0,0,1,-34.6707,-285.648)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "matrix(0.0976562,0,0,0.0976562,59.6707,310.648)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "matrix(1,0,0,1,-256,-256)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M418.632,512L205.25,512C199.175,512 194.25,507.075 194.25,501L194.25,440.497L184.25,427.512L194.25,418.497L194.25,359.747C194.25,327.352 167.896,300.997 135.501,300.997L135.501,278.997C180.026,278.997 216.25,315.221 216.25,359.747L216.25,490L407.631,490L407.631,359.747C407.631,327.352 381.276,300.997 348.881,300.997L348.881,278.997C393.406,278.997 429.631,315.221 429.631,359.747L429.631,418.497L439.631,429.793L429.631,440.497L429.631,501C429.632,507.075 424.707,512 418.632,512Z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/svg/Icons.tsx",
                                    lineNumber: 521,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 520,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M80.75,392.747C98.946,392.747 113.75,377.943 113.75,359.747C113.75,341.551 98.946,326.747 80.75,326.747C62.554,326.747 47.75,341.551 47.75,359.747C47.75,377.943 62.553,392.747 80.75,392.747ZM80.75,348.747C86.815,348.747 91.75,353.682 91.75,359.747C91.75,365.812 86.815,370.747 80.75,370.747C74.685,370.747 69.75,365.812 69.75,359.747C69.75,353.682 74.684,348.747 80.75,348.747Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 524,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M80.75,47.75C62.554,47.75 47.75,62.554 47.75,80.75C47.75,98.946 62.554,113.75 80.75,113.75C98.946,113.75 113.75,98.946 113.75,80.75C113.75,62.554 98.946,47.75 80.75,47.75ZM80.75,91.75C74.685,91.75 69.75,86.815 69.75,80.75C69.75,74.685 74.685,69.75 80.75,69.75C86.815,69.75 91.75,74.685 91.75,80.75C91.75,86.815 86.815,91.75 80.75,91.75Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 525,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M80.75,187.249C62.554,187.249 47.75,202.053 47.75,220.249C47.75,238.445 62.554,253.249 80.75,253.249C98.946,253.249 113.75,238.445 113.75,220.249C113.75,202.053 98.946,187.249 80.75,187.249ZM80.75,231.249C74.685,231.249 69.75,226.314 69.75,220.249C69.75,214.184 74.685,209.249 80.75,209.249C86.815,209.249 91.75,214.184 91.75,220.249C91.75,226.314 86.815,231.249 80.75,231.249Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 526,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M512,220.249C512,190.524 495.844,164.517 471.863,150.499C495.844,136.482 512,110.475 512,80.75C512,36.224 475.776,0 431.251,0L80.75,0C36.224,0 0,36.224 0,80.75C0,110.475 16.157,136.482 40.138,150.5C16.157,164.516 0,190.523 0,220.249C0,249.975 16.156,275.981 40.138,289.998C16.156,304.015 0,330.022 0,359.747C0,404.272 36.224,440.497 80.75,440.497L194.25,440.497L194.25,418.497L136.061,418.497C151.704,403.761 161.498,382.883 161.498,359.747C161.498,336.611 151.703,315.733 136.061,300.997L431.25,300.997C463.645,300.997 489.999,327.352 489.999,359.747C489.999,392.142 463.645,418.497 431.25,418.497L429.631,418.497L429.631,440.497L431.25,440.497C475.775,440.497 511.999,404.273 511.999,359.747C511.999,330.022 495.843,304.015 471.862,289.997C495.844,275.98 512,249.974 512,220.249ZM431.251,22C463.646,22 490,48.355 490,80.75C490,113.145 463.646,139.5 431.251,139.5L136.062,139.5C151.705,124.764 161.499,103.886 161.499,80.75C161.499,57.614 151.704,36.736 136.062,22L431.251,22ZM22,80.75C22,48.355 48.355,22 80.75,22C113.145,22 139.5,48.355 139.5,80.75C139.5,113.145 113.145,139.5 80.75,139.5C48.355,139.5 22,113.144 22,80.75ZM22,220.249C22,187.854 48.355,161.499 80.75,161.499C113.145,161.499 139.5,187.854 139.5,220.249C139.5,252.644 113.145,278.998 80.75,278.998C48.355,278.998 22,252.643 22,220.249ZM139.499,359.747C139.499,392.142 113.144,418.497 80.749,418.497C48.354,418.497 22,392.142 22,359.747C22,327.352 48.355,300.997 80.75,300.997C113.145,300.997 139.499,327.353 139.499,359.747ZM431.251,278.998L136.062,278.998C151.704,264.262 161.499,243.384 161.499,220.249C161.499,197.114 151.704,176.235 136.062,161.499L431.251,161.499C463.646,161.499 490,187.854 490,220.249C490,252.644 463.646,278.998 431.251,278.998Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 527,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 523,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 519,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/Icons.tsx",
                    lineNumber: 518,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 517,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/svg/Icons.tsx",
            lineNumber: 516,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 502,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = PrintIcon;
const WebsiteIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "dark:fill-slate-300 mb-8",
        width: "50px",
        height: "50px",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        xmlSpace: "preserve",
        style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "matrix(1,0,0,1,-199.595,-178.504)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "matrix(0.0976562,0,0,0.0976562,224.595,203.504)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "matrix(1,0,0,1,-256,-256)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M166.478,157.541C160.522,156.351 154.728,160.223 153.542,166.182L143.345,217.419L127.175,164.929C125.386,159.123 119.232,155.865 113.424,157.655C109.482,158.87 106.721,162.099 105.911,165.864L89.951,217.427L79.785,166.032C78.606,160.072 72.818,156.194 66.86,157.376C60.9,158.555 57.025,164.342 58.203,170.302L75.349,256.981C75.453,257.506 75.595,258.024 75.775,258.529C77.614,263.706 82.524,267.168 88.012,267.168L88.102,267.168C93.625,267.13 98.53,263.591 100.308,258.36C100.34,258.265 100.371,258.17 100.401,258.074L116.664,205.531L132.854,258.085C132.9,258.234 132.949,258.382 133.001,258.529C134.84,263.706 139.75,267.168 145.238,267.168L145.326,267.168C150.849,267.131 155.754,263.592 157.533,258.363C157.688,257.907 157.813,257.441 157.908,256.968L175.121,170.477C176.305,164.518 172.437,158.727 166.478,157.541Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 558,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M305.816,157.541C299.86,156.352 294.066,160.225 292.88,166.182L282.683,217.419L266.512,164.929C264.722,159.123 258.571,155.865 252.761,157.655C248.819,158.87 246.058,162.099 245.248,165.864L229.288,217.427L219.122,166.032C217.943,160.072 212.156,156.194 206.197,157.376C200.237,158.555 196.362,164.342 197.54,170.302L214.686,256.981C214.79,257.506 214.932,258.024 215.112,258.529C216.951,263.706 221.861,267.168 227.349,267.168L227.439,267.168C232.962,267.13 237.867,263.591 239.645,258.36C239.677,258.265 239.708,258.17 239.738,258.074L256,205.529L272.19,258.084C272.236,258.232 272.285,258.38 272.336,258.525C274.174,263.704 279.084,267.167 284.573,267.167L284.66,267.167C290.183,267.13 295.09,263.592 296.868,258.362C297.023,257.906 297.148,257.44 297.242,256.967L314.456,170.476C315.644,164.518 311.774,158.727 305.816,157.541Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 559,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M445.153,157.541C439.188,156.352 433.403,160.225 432.217,166.182L422.02,217.419L405.85,164.929C404.061,159.122 397.901,155.87 392.099,157.655C388.155,158.87 385.393,162.102 384.584,165.869L368.625,217.428L358.459,166.033C357.28,160.073 351.49,156.197 345.533,157.377C339.574,158.556 335.698,164.343 336.877,170.303L354.023,256.982C354.127,257.506 354.269,258.023 354.448,258.527C356.286,263.706 361.196,267.169 366.685,267.169L366.772,267.169C372.295,267.132 377.202,263.594 378.98,258.364C379.013,258.267 379.044,258.172 379.074,258.075L395.337,205.532L411.527,258.086C411.573,258.236 411.623,258.385 411.675,258.532C413.515,263.708 418.424,267.169 423.911,267.169L424.001,267.169C429.523,267.131 434.428,263.593 436.206,258.364C436.361,257.908 436.486,257.441 436.58,256.969L453.793,170.478C454.98,164.518 451.111,158.727 445.153,157.541Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 560,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 557,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M501,0L11,0C4.925,0 0,4.925 0,11L0,357C0,363.075 4.925,368 11,368L150.008,368C146.754,378.429 145,389.514 145,401C145,462.206 194.794,512 256,512C317.206,512 367,462.206 367,401C367,389.514 365.246,378.429 361.992,368L501,368C507.075,368 512,363.075 512,357L512,11C512,4.925 507.075,0 501,0ZM490,22L490,88L22,88L22,22L490,22ZM344.32,390L300.136,390C299.302,366.259 295.781,344.138 290.006,326.811C288.853,323.351 287.648,320.217 286.408,317.353C317.242,328.596 340.164,356.43 344.32,390ZM256,490C255.033,490 248.86,486.216 242.865,468.232C237.794,453.018 234.678,433.354 233.879,412L278.12,412C277.32,433.354 274.205,453.019 269.134,468.232C263.14,486.216 256.967,490 256,490ZM269.135,333.768C274.206,348.982 277.321,368.646 278.121,390L233.88,390C234.68,368.646 237.795,348.981 242.866,333.768C248.86,315.784 255.033,312 256,312C256.967,312 263.14,315.784 269.135,333.768ZM211.864,390L167.68,390C171.834,356.448 194.733,328.625 225.543,317.37C217.263,336.456 212.816,363.209 211.864,390ZM167.68,412L211.864,412C212.698,435.741 216.219,457.862 221.995,475.189C223.148,478.649 224.353,481.783 225.593,484.647C194.758,473.404 171.836,445.57 167.68,412ZM286.457,484.63C294.736,465.544 299.183,438.791 300.135,412L344.32,412C340.166,445.552 317.267,473.375 286.457,484.63ZM352.389,346C333.24,312.572 297.208,290 256,290C214.793,290 178.76,312.572 159.611,346L22,346L22,110L490,110L490,346L352.389,346Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 563,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M67,66C74.591,66.221 80.273,57.718 77.16,50.79C73.635,41.872 60.383,41.826 56.84,50.79C53.731,57.723 59.406,66.219 67,66Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 564,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M119,66C126.592,66.221 132.266,57.721 129.16,50.79C125.63,41.824 112.363,41.876 108.84,50.79C105.728,57.72 111.411,66.218 119,66Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 565,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M171,66C178.595,66.22 184.268,57.722 181.16,50.79C177.603,41.838 164.395,41.838 160.84,50.79C157.726,57.718 163.41,66.22 171,66Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 566,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M256,66L445,66C451.075,66 456,61.075 456,55C456,48.925 451.075,44 445,44L256,44C249.925,44 245,48.925 245,55C245,61.075 249.925,66 256,66Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 567,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 562,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 556,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/Icons.tsx",
                    lineNumber: 555,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 554,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/svg/Icons.tsx",
            lineNumber: 553,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 539,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = WebsiteIcon;
const WallArtIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "dark:fill-slate-300 mb-8",
        width: "50px",
        height: "50px",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        xmlSpace: "preserve",
        style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "matrix(1,0,0,1,-369.139,-68.5247)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "matrix(0.0976521,0,0,0.0976521,394.139,93.5247)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "matrix(1,0,0,1,-256.011,-256.011)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M501.011,306.272L389.511,306.272L389.511,236.397L501.011,236.397C507.086,236.397 512.011,231.472 512.011,225.397C512.011,219.322 507.086,214.397 501.011,214.397L389.511,214.397L389.511,175.662L448.35,102.113C451.446,98.243 451.572,92.78 448.657,88.772L387.407,4.553C383.253,-1.421 373.771,-1.438 369.615,4.553L308.365,88.771C305.45,92.779 305.576,98.242 308.672,102.112L367.511,175.661L367.511,214.396L144.512,214.396L144.512,175.66L203.351,102.111C206.447,98.241 206.573,92.778 203.658,88.77L142.408,4.551C138.254,-1.423 128.772,-1.44 124.616,4.551L63.366,88.769C60.45,92.777 60.576,98.24 63.673,102.11L122.513,175.66L122.513,214.395L11.013,214.395C4.938,214.395 0.013,219.32 0.013,225.395C0.013,231.47 4.938,236.395 11.013,236.395L122.513,236.395L122.513,306.27L11.013,306.27C4.938,306.27 0.013,311.195 0.013,317.27C0.013,323.345 4.938,328.27 11.013,328.27L122.513,328.27L122.513,501.02C122.513,507.095 127.438,512.02 133.513,512.02C139.588,512.02 144.513,507.095 144.513,501.02L144.513,328.27L367.512,328.27L367.512,378.52C367.512,384.595 372.437,389.52 378.512,389.52C384.587,389.52 389.512,384.595 389.512,378.52L389.512,328.27L501.012,328.27C515.594,327.697 515.605,306.852 501.011,306.272ZM378.511,29.724L425.929,94.923L378.511,154.195L331.093,94.923L378.511,29.724ZM133.511,29.724L180.928,94.923L133.511,154.195L86.093,94.923L133.511,29.724ZM367.51,306.272L144.511,306.272L144.511,236.397L367.51,236.397L367.51,306.272Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 597,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M501.01,0.023C378.832,0.148 133.147,-0.067 11.011,0.023C4.936,0.023 0.012,4.948 0.012,11.023L0.012,501.021C0.012,507.096 4.937,512.021 11.012,512.021L256.011,512.021C262.086,512.021 267.011,507.096 267.011,501.021L267.011,450.768L455.252,450.768C486.549,450.768 512.01,425.307 512.01,394.01L512.01,11.023C512.01,4.948 507.085,0.023 501.01,0.023ZM410.429,428.767C410.428,428.77 255.993,428.765 255.982,428.767L240.514,428.767C219.746,428.922 203.236,410.078 206.042,389.522L398.676,389.522C397.459,403.808 402.077,418.156 410.429,428.767ZM245.011,490.021L22.012,490.021L22.012,22.023L245.011,22.023L245.011,367.523L197.451,367.523C192.726,367.484 188.29,370.761 186.936,375.288C173.329,413.896 204.375,453.574 245.011,450.768L245.011,490.021ZM455.252,428.767C431.654,429.2 414.212,404.265 422.534,382.26C425.22,375.378 419.573,367.335 412.188,367.522L267.011,367.522L267.011,22.022L490.01,22.022L490.01,394.009C490.01,413.175 474.418,428.767 455.252,428.767Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 598,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 596,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/Icons.tsx",
                    lineNumber: 595,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 594,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/svg/Icons.tsx",
            lineNumber: 593,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 579,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c9 = WallArtIcon;
const CarWrapIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "dark:fill-slate-300 mb-8",
        width: "50px",
        height: "50px",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        xmlSpace: "preserve",
        style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "matrix(1,0,0,1,-277.828,-299.592)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "matrix(0.0976562,0,0,0.0976562,302.828,324.592)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "matrix(1,0,0,1,-256,-256)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M389.63,369.915C364.377,369.915 343.832,349.517 343.832,324.445C346.343,264.124 432.925,264.141 435.427,324.445C435.427,349.517 414.883,369.915 389.63,369.915ZM389.63,300.974C376.508,300.974 365.832,311.503 365.832,324.445C367.135,355.579 412.129,355.571 413.427,324.445C413.427,311.503 402.752,300.974 389.63,300.974Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/svg/Icons.tsx",
                                                lineNumber: 630,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/svg/Icons.tsx",
                                            lineNumber: 629,
                                            columnNumber: 10
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 628,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M96.472,369.915C71.219,369.915 50.675,349.517 50.675,324.445C53.186,264.123 139.768,264.142 142.27,324.445C142.27,349.517 121.725,369.915 96.472,369.915ZM96.472,300.974C83.35,300.974 72.675,311.503 72.675,324.445C73.978,355.58 118.972,355.57 120.27,324.445C120.27,311.503 109.594,300.974 96.472,300.974Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/svg/Icons.tsx",
                                                lineNumber: 635,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/svg/Icons.tsx",
                                            lineNumber: 634,
                                            columnNumber: 10
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/svg/Icons.tsx",
                                        lineNumber: 633,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 627,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M344.675,315.788L141.427,315.788C142.871,322.935 142.426,330.929 140.254,337.788L345.848,337.788C343.676,330.929 343.231,322.934 344.675,315.788Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 639,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M34.507,217.193L43.586,217.193C72.507,182.503 115.922,162.955 161.869,164.128L161.869,217.193L183.869,217.193L183.869,164.128L244.987,164.128C292.818,164.128 327.875,196.56 345.339,217.193L367.224,217.193C367.83,217.193 368.435,217.243 369.034,217.343L373.794,218.137C347.293,177.98 295.149,140.621 244.987,142.13C244.988,142.129 157.594,142.129 157.594,142.129C99.716,141.736 43.218,172.977 12.78,222.207L6.371,231.762C12.629,222.955 22.905,217.193 34.507,217.193Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 640,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M497.944,287.254L473.813,287.254C467.738,287.254 462.813,282.329 462.813,276.254C462.813,270.179 467.738,265.254 473.813,265.254L497.944,265.254C512.529,265.83 512.537,286.674 497.944,287.254Z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/svg/Icons.tsx",
                                    lineNumber: 642,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 641,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M465.987,233.511L369.034,217.343C368.008,216.832 35.884,217.396 34.505,217.193C15.479,217.193 0,232.673 0,251.7L0,326.787C0,332.862 4.925,337.787 11,337.787L52.69,337.787C50.519,330.928 50.073,322.934 51.517,315.787L22,315.787L22,251.7C22,244.804 27.61,239.193 34.507,239.193L366.315,239.193C366.634,239.242 462.542,255.249 462.836,255.285C470.329,256.311 476.923,259.977 481.741,265.254L497.945,265.254C512.537,265.833 512.532,286.677 497.945,287.254L490.001,287.254L490.001,315.788L434.585,315.788C436.029,322.935 435.584,330.929 433.412,337.788L501,337.788C507.075,337.788 512,332.863 512,326.788L512,286.42C512,259.904 492.23,237.188 465.987,233.511Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 644,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 626,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/Icons.tsx",
                    lineNumber: 625,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 624,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/svg/Icons.tsx",
            lineNumber: 623,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 609,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c10 = CarWrapIcon;
const GlassArtIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "dark:fill-slate-300 mb-8",
        width: "50px",
        height: "50px",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        xmlSpace: "preserve",
        style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: "matrix(1,0,0,1,-369.139,-211.753)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "matrix(0.0976562,0,0,0.0976562,394.139,236.753)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "matrix(1,0,0,1,-256,-256)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        id: "Maximize_1_",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M438.988,82.996L73.012,82.996C66.937,82.996 62.012,78.071 62.012,71.996C62.012,65.921 66.937,60.996 73.012,60.996L438.988,60.996C445.063,60.996 449.988,65.921 449.988,71.996C449.988,78.071 445.063,82.996 438.988,82.996Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 673,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M438.988,451.004L73.012,451.004C66.937,451.004 62.012,446.079 62.012,440.004C62.012,433.929 66.937,429.004 73.012,429.004L438.988,429.004C445.063,429.004 449.988,433.929 449.988,440.004C449.988,446.079 445.063,451.004 438.988,451.004Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 674,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M234.308,232.074C235.735,230.203 236.491,227.849 236.502,225.502L236.502,164.506C236.502,158.431 231.577,153.506 225.502,153.506C219.427,153.506 214.502,158.431 214.502,164.506L214.502,198.945L172.285,156.728C167.989,152.432 161.024,152.432 156.728,156.728C152.433,161.024 152.433,167.989 156.728,172.285L198.945,214.502L164.506,214.502C158.431,214.502 153.506,219.427 153.506,225.502C153.506,231.577 158.431,236.502 164.506,236.502L225.502,236.502C228.91,236.504 232.301,234.843 234.308,232.074Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 675,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M347.494,214.502L313.055,214.502L355.272,172.285C359.567,167.989 359.567,161.024 355.272,156.728C350.976,152.432 344.011,152.432 339.715,156.728L297.498,198.945L297.498,164.506C297.498,158.431 292.573,153.506 286.498,153.506C280.423,153.506 275.498,158.431 275.498,164.506L275.498,225.502C275.391,231.406 280.594,236.61 286.498,236.502L347.494,236.502C353.569,236.502 358.494,231.577 358.494,225.502C358.494,219.427 353.569,214.502 347.494,214.502Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 676,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M236.5,286.453C236.589,280.564 231.383,275.387 225.497,275.498L164.506,275.498C158.431,275.498 153.506,280.423 153.506,286.498C153.506,292.573 158.431,297.498 164.506,297.498L198.945,297.498L156.728,339.715C152.433,344.011 152.433,350.976 156.728,355.272C158.876,357.42 161.691,358.494 164.506,358.494C167.321,358.494 170.136,357.42 172.284,355.272L214.501,313.055L214.501,347.494C214.501,353.569 219.426,358.494 225.501,358.494C231.576,358.494 236.501,353.569 236.501,347.494L236.501,286.498C236.502,286.483 236.5,286.468 236.5,286.453Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 677,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M313.055,297.498L347.494,297.498C353.569,297.498 358.494,292.573 358.494,286.498C358.494,280.423 353.569,275.498 347.494,275.498L286.503,275.498C280.597,275.387 275.39,280.593 275.498,286.498L275.498,347.494C275.498,353.569 280.423,358.494 286.498,358.494C292.573,358.494 297.498,353.569 297.498,347.494L297.498,313.055L339.715,355.272C341.863,357.42 344.678,358.494 347.493,358.494C350.308,358.494 353.123,357.42 355.271,355.272C359.566,350.976 359.566,344.011 355.271,339.715L313.055,297.498Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 678,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M408.49,512L103.51,512C80.628,512 62.012,493.384 62.012,470.502L62.012,41.498C62.012,18.616 80.628,0 103.51,0L408.49,0C431.372,0 449.988,18.616 449.988,41.498L449.988,470.502C449.988,493.384 431.372,512 408.49,512ZM103.51,22C92.759,22 84.012,30.747 84.012,41.498L84.012,470.502C84.012,481.253 92.759,490 103.51,490L408.49,490C419.241,490 427.988,481.253 427.988,470.502L427.988,41.498C427.988,30.747 419.241,22 408.49,22L103.51,22Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/Icons.tsx",
                                lineNumber: 679,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/svg/Icons.tsx",
                        lineNumber: 672,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/Icons.tsx",
                    lineNumber: 671,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/svg/Icons.tsx",
                lineNumber: 670,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/svg/Icons.tsx",
            lineNumber: 669,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/svg/Icons.tsx",
        lineNumber: 655,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c11 = GlassArtIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Cog");
__turbopack_context__.k.register(_c1, "XClose");
__turbopack_context__.k.register(_c2, "PRFlag");
__turbopack_context__.k.register(_c3, "USFlag");
__turbopack_context__.k.register(_c4, "MenuIcon");
__turbopack_context__.k.register(_c5, "BannerIconTheme");
__turbopack_context__.k.register(_c6, "DesignIcon");
__turbopack_context__.k.register(_c7, "PrintIcon");
__turbopack_context__.k.register(_c8, "WebsiteIcon");
__turbopack_context__.k.register(_c9, "WallArtIcon");
__turbopack_context__.k.register(_c10, "CarWrapIcon");
__turbopack_context__.k.register(_c11, "GlassArtIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/forms/LanguageHandler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Label$2f$Label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/components/Label/Label.js [app-client] (ecmascript)");
;
;
function LanguageHandler(param) {
    let { handleLanguageChange, languageContext, languageOptions } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "me-1 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$components$2f$Label$2f$Label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "language",
                className: "mb-1 sr-only",
                children: languageContext.language === languageOptions.english ? "Select Language" : "Seleccione Idioma"
            }, void 0, false, {
                fileName: "[project]/src/components/forms/LanguageHandler.tsx",
                lineNumber: 11,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: "language",
                    onChange: (e)=>handleLanguageChange(e.target.value),
                    value: languageContext.language,
                    className: "w-fit-content rounded-lg cursor-pointer border border-slate-100 text-slate-100 p-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            className: "text-slate-100",
                            value: "en",
                            children: "English"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forms/LanguageHandler.tsx",
                            lineNumber: 22,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            className: "text-slate-100",
                            value: "es",
                            children: "Español"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forms/LanguageHandler.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forms/LanguageHandler.tsx",
                    lineNumber: 17,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forms/LanguageHandler.tsx",
                lineNumber: 16,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forms/LanguageHandler.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
}
_c = LanguageHandler;
var _c;
__turbopack_context__.k.register(_c, "LanguageHandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/authContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthContext",
    ()=>AuthContext,
    "AuthContextProvider",
    ()=>AuthContextProvider,
    "useAuthContext",
    ()=>useAuthContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/static/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const AuthContextProvider = (param)=>{
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const signOutUser = async ()=>{
        const request = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverBaseUrl"], "/api/auth/"), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await request.json();
        if (response.success) {
            setUser(null);
            router.push("/login");
        }
    };
    // user persistance
    const persistUser = async ()=>{
        if (user) {
            return;
        }
        const request = await fetch("/api/auth/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await request.json();
        if (response.success) {
            setUser(response.data);
        } else {
            setUser(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            signOutUser,
            persistUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/authContext.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthContextProvider, "zefM1Knqb/9oUSAMqz/jv6nTK4c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthContextProvider;
const useAuthContext = ()=>{
    _s1();
    const authContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(AuthContext);
    if (!authContext) {
        throw new Error("useAuthContext must be used within a useAuthContext Provider");
    }
    return authContext;
};
_s1(useAuthContext, "g0q6N3HTsGa67OokMUhTOzE2a0M=");
var _c;
__turbopack_context__.k.register(_c, "AuthContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/logo/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GaryMackLogo",
    ()=>GaryMackLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function GaryMackLogo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                width: 50,
                height: 50,
                className: "w-16 h-16 rounded-base object-cover",
                src: "/images/gary-mack-logo.png",
                alt: "2xl avatar"
            }, void 0, false, {
                fileName: "[project]/src/components/logo/index.tsx",
                lineNumber: 6,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-extrabold text-2xl cursor-pointer text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all",
                children: "Gary Mack"
            }, void 0, false, {
                fileName: "[project]/src/components/logo/index.tsx",
                lineNumber: 13,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/logo/index.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, this);
}
_c = GaryMackLogo;
var _c;
__turbopack_context__.k.register(_c, "GaryMackLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/MainNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/languageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/static/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$LanguageHandler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/LanguageHandler.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/authContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function MainNavigation() {
    _s();
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isFirstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const languageContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"])();
    const { user, persistUser, signOutUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainNavigation.useEffect": ()=>{
            persistUser();
        }
    }["MainNavigation.useEffect"], [
        pathname
    ]);
    // --- RESIZE & INITIAL CHECK ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainNavigation.useEffect": ()=>{
            var _window;
            const currentLanguage = languageContext === null || languageContext === void 0 ? void 0 : languageContext.verifyLanguageFromLocalStorage();
            languageContext === null || languageContext === void 0 ? void 0 : languageContext.setLanguage(currentLanguage);
            const handleResize = {
                "MainNavigation.useEffect.handleResize": ()=>{
                    var _window;
                    const windowWidth = (_window = window) === null || _window === void 0 ? void 0 : _window.innerWidth;
                    const isDesktop = windowWidth >= 768;
                    setIsMobile(!isDesktop);
                    if (isDesktop) {
                        setShowMenu(true);
                        // Clean up GSAP inline styles so CSS classes take over on desktop
                        if (menuRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(menuRef.current, {
                                clearProps: "all"
                            });
                            const items = menuRef.current.querySelectorAll("li");
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(items, {
                                clearProps: "all"
                            });
                        }
                    } else {
                        if (!showMenu) setShowMenu(false);
                    }
                }
            }["MainNavigation.useEffect.handleResize"];
            handleResize();
            (_window = window) === null || _window === void 0 ? void 0 : _window.addEventListener("resize", handleResize);
            return ({
                "MainNavigation.useEffect": ()=>{
                    var _window;
                    return (_window = window) === null || _window === void 0 ? void 0 : _window.removeEventListener("resize", handleResize);
                }
            })["MainNavigation.useEffect"];
        }
    }["MainNavigation.useEffect"], [
        languageContext
    ]);
    // --- GSAP ANIMATION LOGIC ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "MainNavigation.useGSAP": ()=>{
            if (!isMobile || !menuRef.current) return;
            const items = menuRef.current.querySelectorAll("li");
            // 1. First Render Safety: Ensure GSAP knows the starting state matches CSS
            if (isFirstRender.current) {
                if (!showMenu) {
                    // We sync GSAP with our CSS 'invisible' state
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(menuRef.current, {
                        height: 0,
                        opacity: 0,
                        visibility: "hidden"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(items, {
                        opacity: 0,
                        y: -20
                    });
                }
                isFirstRender.current = false;
                return;
            }
            if (showMenu) {
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                // Step A: Ensure Items are hidden & shifted UP before container opens
                tl.set(items, {
                    opacity: 0,
                    y: -20,
                    immediateRender: true
                });
                // Step B: Open Background
                // GSAP inline styles (height: auto) will override the CSS class (h-0)
                tl.to(menuRef.current, {
                    height: "auto",
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                    borderTopWidth: "1px",
                    opacity: 1,
                    visibility: "visible",
                    duration: 0.2,
                    ease: "none"
                });
                // Step C: Animate Links
                tl.to(items, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "none",
                    stagger: {
                        amount: 0.2,
                        from: "end"
                    }
                }, "-=0.40");
            } else {
                // --- CLOSE SEQUENCE ---
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(menuRef.current, {
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    borderTopWidth: 0,
                    opacity: 0,
                    duration: 0.1,
                    ease: "none",
                    onComplete: {
                        "MainNavigation.useGSAP": ()=>{
                            // Reset to match the hidden CSS state
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(menuRef.current, {
                                visibility: "hidden"
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(items, {
                                opacity: 0,
                                y: -20
                            });
                        }
                    }["MainNavigation.useGSAP"]
                });
            }
        }
    }["MainNavigation.useGSAP"], [
        showMenu,
        isMobile
    ]);
    const handleLanguageChange = (lang)=>{
        const selectedLanguage = languageContext === null || languageContext === void 0 ? void 0 : languageContext.setLanguageAndLocalStorage(lang);
        languageContext === null || languageContext === void 0 ? void 0 : languageContext.setLanguage(selectedLanguage);
    };
    const handleMenu = ()=>{
        setShowMenu(!showMenu);
    };
    const isActiveLink = (path)=>{
        return pathname === path;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full relative h-22 flex items-center justify-center border-b-10 border-slate-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "px-4 py-4 rounded-none bg-black flex items-center justify-between relative w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: ()=>isMobile && setShowMenu(false),
                    className: "flex items-center",
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaryMackLogo"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/MainNavigation.tsx",
                        lineNumber: 151,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/MainNavigation.tsx",
                    lineNumber: 147,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center order-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$LanguageHandler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                handleLanguageChange: handleLanguageChange,
                                languageContext: languageContext,
                                languageOptions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"]
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                lineNumber: 156,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MainNavigation.tsx",
                            lineNumber: 155,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuIcon"], {
                            onClick: handleMenu
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MainNavigation.tsx",
                            lineNumber: 162,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/MainNavigation.tsx",
                    lineNumber: 154,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    id: "menu",
                    ref: menuRef,
                    className: "\n            flex flex-col md:flex-row md:items-center\n            absolute md:static right-0 top-23 z-20 order-2\n            backdrop-blur-sm bg-black/80 md:dark:bg-transparent md:bg-transparent\n            w-full md:w-auto gap-y-4 gap-x-4\n            border-b border-slate-800 overflow-hidden\n            h-0 opacity-0 invisible\n            md:h-auto md:p-0 md:opacity-100 md:border-t-0 md:border-b-0 md:visible\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: ()=>isMobile && setShowMenu(false),
                                className: "".concat(isActiveLink("/") && "border-b-2 border-yellow-300", " text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1 md:m-0"),
                                href: "/",
                                children: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish ? "Inicio" : "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                lineNumber: 178,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MainNavigation.tsx",
                            lineNumber: 177,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: ()=>isMobile && setShowMenu(false),
                                className: "".concat(isActiveLink("/about") && "border-b-2 border-yellow-300", " text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1"),
                                href: "/about",
                                children: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish ? "Sobre Mi" : "About Me"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                lineNumber: 186,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MainNavigation.tsx",
                            lineNumber: 185,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: ()=>isMobile && setShowMenu(false),
                                className: "".concat(isActiveLink("/books") && "border-b-2 border-yellow-300", " text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1"),
                                href: "/books",
                                children: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish ? "Libros" : "Books"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                lineNumber: 194,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MainNavigation.tsx",
                            lineNumber: 193,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: ()=>isMobile && setShowMenu(false),
                                className: "".concat(isActiveLink("/give") && "border-b-2 border-yellow-300", " text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1"),
                                href: "/give",
                                children: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish ? "Donar" : "Donate"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                lineNumber: 202,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MainNavigation.tsx",
                            lineNumber: 201,
                            columnNumber: 6
                        }, this),
                        user ? /* FIX: Removed 'opacity-0' from this UL container so it doesn't hide the children */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col md:inline-flex md:flex-row md:items-center md:gap-x-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "opacity-0 md:opacity-100 md:pl-4 md:pr-2 md:py-1 border-r border-slate-400 md:p-0 text-center hover:bg-transparent transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: ()=>isMobile && setShowMenu(false),
                                        className: "".concat(isActiveLink("/profile") && "border-b-2 border-yellow-300", " text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1"),
                                        href: "/profile",
                                        children: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish ? "Perfil" : "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                        lineNumber: 214,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                    lineNumber: 213,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "opacity-0 md:opacity-100 md:p-0 md:pl-2 md:pr-4 md:py-1 text-center hover:bg-transparent transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: ()=>{
                                            isMobile && setShowMenu(false);
                                            signOutUser();
                                        },
                                        className: "".concat(isActiveLink("/login") && "border-b-2 border-yellow-300", " text-slate-400 hover:border-b-2 hover:border-yellow-300 transition-all mt-4 mb-6 md:mt-0 md:mb-0 inline-block leading-none pb-1"),
                                        href: "/login",
                                        children: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish ? "Salir" : "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                        lineNumber: 223,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                    lineNumber: 222,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/MainNavigation.tsx",
                            lineNumber: 211,
                            columnNumber: 7
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: ()=>isMobile && setShowMenu(false),
                                className: "".concat(isActiveLink("/login") && "border-b-2 border-yellow-300", " text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1"),
                                href: "/login",
                                children: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish ? "Iniciar Sesión" : "Login"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/MainNavigation.tsx",
                                lineNumber: 236,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MainNavigation.tsx",
                            lineNumber: 235,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/MainNavigation.tsx",
                    lineNumber: 165,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/MainNavigation.tsx",
            lineNumber: 146,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/MainNavigation.tsx",
        lineNumber: 145,
        columnNumber: 3
    }, this);
}
_s(MainNavigation, "NDUhNhFDzIFSBnYY+QlqhQ3ETnY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = MainNavigation;
var _c;
__turbopack_context__.k.register(_c, "MainNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavigationData",
    ()=>useNavigationData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/languageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/static/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const useNavigationData = ()=>{
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"])();
    const navigation = {
        support: [
            {
                name: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].english ? "Contact" : "Contacto",
                href: "/contact"
            }
        ],
        company: [
            {
                name: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].english ? "About" : "Acerca de",
                href: "/about"
            }
        ],
        legal: [
            {
                name: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].english ? "Terms of service" : "Términos de servicio",
                href: "/terms"
            },
            {
                name: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].english ? "Privacy policy" : "Política de privacidad",
                href: "/privacy"
            },
            {
                name: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].english ? "Cookies" : "Cookies",
                href: "/cookies"
            }
        ],
        social: [
            {
                name: "Facebook",
                href: "https://www.facebook.com/ministerio.losrescatadosrescatando",
                icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        ...props,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/hooks/navigation.tsx",
                            lineNumber: 68,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/hooks/navigation.tsx",
                        lineNumber: 67,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
            },
            {
                name: "Instagram",
                href: "https://www.instagram.com/pastorgarymack/",
                icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        ...props,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/hooks/navigation.tsx",
                            lineNumber: 81,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/hooks/navigation.tsx",
                        lineNumber: 80,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
            },
            // {
            // 	name: "X",
            // 	href: "#",
            // 	icon: (props: any) => (
            // 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            // 			<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            // 		</svg>
            // 	)
            // },
            // {
            // 	name: "GitHub",
            // 	href: "#",
            // 	icon: (props: any) => (
            // 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            // 			<path
            // 				fillRule="evenodd"
            // 				d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            // 				clipRule="evenodd"
            // 			/>
            // 		</svg>
            // 	)
            // },
            {
                name: "YouTube",
                href: "https://www.youtube.com/@MinisterioRR2012",
                icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        ...props,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/hooks/navigation.tsx",
                            lineNumber: 116,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/hooks/navigation.tsx",
                        lineNumber: 115,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    };
    return navigation;
};
_s(useNavigationData, "5BFVEMY9L/v2AZuWvZfwBpA1xgE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/languageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/static/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Footer() {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"])();
    const navigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gradient-to-bl from-black via-slate-900 to-blue-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-12 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "xl:grid xl:grid-cols-3 xl:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start justify-start gap-2 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    width: 100,
                                    height: 100,
                                    alt: "Pastor Gary Mack Logo",
                                    src: "/images/gary-mack-logo.png",
                                    className: "h-40 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white",
                                    children: "Pastor Gary Mack"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 16,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm/6 font-semibold text-white",
                                            children: "Legal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            role: "list",
                                            className: "mt-6 space-y-4",
                                            children: navigation.legal.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "text-sm/6 text-white hover:underline",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 11
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm/6 font-semibold text-white",
                                            children: language === (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"] === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish) ? "Sobre Mi" : "About"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            role: "list",
                                            className: "mt-6 space-y-4",
                                            children: navigation.company.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "text-sm/6 text-white hover:underline",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 11
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 45,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm/6 font-semibold text-white dark:text-white",
                                            children: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish ? "Soporte" : "Support"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 58,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            role: "list",
                                            className: "mt-6 space-y-4",
                                            children: navigation.support.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "text-sm/6 text-white hover:underline",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 11
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 61,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 26,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-x-6 md:order-2",
                            children: navigation.social.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    className: "text-slate-100 hover:text-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            "aria-hidden": "true",
                                            className: "size-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 83,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 78,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 76,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-8 text-sm/6 text-slate-100 md:order-1 md:mt-0",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Pastor Gary Mack,",
                                language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].spanish ? " Todos los derechos reservados." : " All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 87,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 75,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 14,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
}
_s(Footer, "fO5oqEQuTVzIUVQprWcPC/7ACGE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigationData"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$theme$2f$mode$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/flowbite-react/dist/theme/mode-script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_a71539c9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_8d43a2aa.js [app-client] (ecmascript)");
// import type { Metadata } from "next";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/languageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MainNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MainNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/authContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)"); // Import usePathname
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function RootLayout(param) {
    let { children } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])(); // Get the current pathname
    const isAdminPage = pathname.startsWith("/profile/admin"); // Check if the current page is an admin page
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            className: "scroll-smooth dark:bg-black",
            suppressHydrationWarning: true,
            lang: "es",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$flowbite$2d$react$2f$dist$2f$theme$2f$mode$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeModeScript"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 40,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 41,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/apple-touch-icon.png"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 42,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon-32x32.png"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 47,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon-16x16.png"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 53,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            rel: "icon",
                            type: "image/png",
                            href: "/images/gary-mack-logo.png"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 59,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 60,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 39,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                    className: "".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_a71539c9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable, " ").concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_8d43a2aa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable, " antialiased"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 64,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContextProvider"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageContextProvider"], {
                                children: isAdminPage ? // If it's an admin page, just render the children (your React Admin page)
                                // without the main navigation and footer
                                children : // Otherwise, render the main navigation, children, and footer
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MainNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/layout.tsx",
                                            lineNumber: 74,
                                            columnNumber: 10
                                        }, this),
                                        children,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/layout.tsx",
                                            lineNumber: 77,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 66,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 65,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                            src: "/js/flowbite.js"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 82,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 62,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 35,
            columnNumber: 4
        }, this)
    }, void 0, false);
}
_s(RootLayout, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__76810193._.js.map