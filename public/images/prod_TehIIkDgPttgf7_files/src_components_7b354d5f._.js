(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/jumbotron/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JumbotronShared",
    ()=>JumbotronShared,
    "JumbotronWithCenteredLetters",
    ()=>JumbotronWithCenteredLetters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>"); // Import gsap default
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function JumbotronWithCenteredLetters(param) {
    let { fadedBackgroundText, personTitleText, personTitleSubText, htmlContainer } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "JumbotronWithCenteredLetters.useGSAP": ()=>{
            // 1. PRE-SET: Ensure the background text is centered by GSAP immediately
            // We moved the translation logic here to avoid conflict with the scale animation
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(bgTextRef.current, {
                xPercent: -50,
                yPercent: -50,
                opacity: 0 // Ensure it's hidden initially (double safety)
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: "power3.out"
                }
            });
            // 2. Animation Sequence
            // We use autoAlpha instead of opacity. autoAlpha sets visibility:hidden when opacity is 0,
            // which prevents screen readers or clicks from registering it too early.
            tl.fromTo(bgTextRef.current, {
                scale: 1.5,
                autoAlpha: 0
            }, {
                scale: 1,
                autoAlpha: 1,
                duration: 1.8,
                transformOrigin: "center center"
            }).fromTo(titleTextRef.current, {
                y: 100,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                duration: 1
            }, "-=1.2").fromTo(subTextRef.current, {
                y: 50,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                duration: 1
            }, "-=0.8").fromTo(contentRef.current, {
                y: 30,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                duration: 0.8
            }, "-=0.6");
        }
    }["JumbotronWithCenteredLetters.useGSAP"], {
        scope: containerRef
    }); // Scope ensures proper cleanup
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "h-[calc(100vh-88px)] w-full snap-start flex flex-col justify-center items-center relative bg-slate-900 p-4 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/jumbotron/index.tsx",
                lineNumber: 74,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                ref: bgTextRef,
                className: "absolute top-1/2 left-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap select-none pointer-events-none font-['Montserrat',sans-serif] invisible",
                children: fadedBackgroundText.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/components/jumbotron/index.tsx",
                lineNumber: 80,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                ref: titleTextRef,
                className: "font-['Montserrat',sans-serif] font-black text-[clamp(5rem,15vw,16rem)] leading-[0.85] uppercase text-center text-white relative z-10 invisible",
                children: [
                    personTitleText,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/jumbotron/index.tsx",
                        lineNumber: 91,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: subTextRef,
                        className: "text-yellow-300 invisible inline-block",
                        children: personTitleSubText
                    }, void 0, false, {
                        fileName: "[project]/src/components/jumbotron/index.tsx",
                        lineNumber: 93,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/jumbotron/index.tsx",
                lineNumber: 87,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                className: "mt-10 invisible",
                children: htmlContainer
            }, void 0, false, {
                fileName: "[project]/src/components/jumbotron/index.tsx",
                lineNumber: 101,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/jumbotron/index.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this);
}
_s(JumbotronWithCenteredLetters, "Fdb3LLn2Fi6X7SSpOqjmkHIJ+dI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = JumbotronWithCenteredLetters;
function JumbotronShared(param) {
    let { topSmTitle, mainTitle, mainText } = param;
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const topTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mainTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "JumbotronShared.useGSAP": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: "power2.out"
                }
            });
            // Animate all three refs in a staggered sequence
            // autoAlpha: 0 ensures they are hidden (opacity: 0 + visibility: hidden) start
            // autoAlpha: 1 turns them on
            tl.fromTo([
                topTextRef.current,
                titleRef.current,
                mainTextRef.current
            ], {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 1.2,
                stagger: 0.1 // Delay between each element starting
            });
        }
    }["JumbotronShared.useGSAP"], {
        scope: containerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "px-6 py-18 sm:py-24 lg:px-8 bg-gradient-to-tr from-black via-slate-900 to-blue-900 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-2xl text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    ref: topTextRef,
                    className: "text-base/7 font-semibold text-yellow-300 invisible",
                    children: topSmTitle
                }, void 0, false, {
                    fileName: "[project]/src/components/jumbotron/index.tsx",
                    lineNumber: 148,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    ref: titleRef,
                    className: "mt-2 text-5xl font-semibold tracking-tight text-slate-100 sm:text-7xl invisible",
                    children: mainTitle
                }, void 0, false, {
                    fileName: "[project]/src/components/jumbotron/index.tsx",
                    lineNumber: 154,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    ref: mainTextRef,
                    className: "mt-8 text-pretty text-lg font-medium text-slate-300 sm:text-xl/8 invisible",
                    children: mainText
                }, void 0, false, {
                    fileName: "[project]/src/components/jumbotron/index.tsx",
                    lineNumber: 160,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/jumbotron/index.tsx",
            lineNumber: 146,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/jumbotron/index.tsx",
        lineNumber: 143,
        columnNumber: 3
    }, this);
}
_s1(JumbotronShared, "kqKmJUodNtBlRWt7ZkRGPibp7Qo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = JumbotronShared;
var _c, _c1;
__turbopack_context__.k.register(_c, "JumbotronWithCenteredLetters");
__turbopack_context__.k.register(_c1, "JumbotronShared");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Spinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Spinner = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 border-b-4 border-slate-500 rounded-full animate-spin transform-origin-center"
            }, void 0, false, {
                fileName: "[project]/src/components/Spinner.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Spinner.tsx",
            lineNumber: 7,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Spinner.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Spinner;
const __TURBOPACK__default__export__ = Spinner;
var _c;
__turbopack_context__.k.register(_c, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/books/translations/MentalidadDeMangosta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MentalidadDeMangostaBook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
;
;
function MentalidadDeMangostaBook() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showScrollTop, setShowScrollTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Chapters data for navigation
    const chapters = [
        {
            id: "agradecimientos",
            title: "Agradecimientos"
        },
        {
            id: "introduccion",
            title: "Introducción"
        },
        {
            id: "capitulo-1",
            title: "Capítulo 1: El Inicio de Todo"
        },
        {
            id: "capitulo-2",
            title: "Capítulo 2: El Corazón de Dios"
        },
        {
            id: "capitulo-3",
            title: "Capítulo 3: Forjados en el Fuego"
        },
        {
            id: "capitulo-4",
            title: "Capítulo 4: El Secreto para la Victoria"
        },
        {
            id: "capitulo-5",
            title: "Capítulo 5: Sin Fe no hay Conquista"
        },
        {
            id: "capitulo-6",
            title: "Capítulo 6: Principios del Vencedor"
        },
        {
            id: "capitulo-7",
            title: "Capítulo 7: Judas y Pedros"
        },
        {
            id: "capitulo-8",
            title: "Capítulo 8: El Código de Oro"
        }
    ];
    // Handle scroll for active section highlighting and back-to-top button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MentalidadDeMangostaBook.useEffect": ()=>{
            const handleScroll = {
                "MentalidadDeMangostaBook.useEffect.handleScroll": ()=>{
                    setShowScrollTop(window.scrollY > 400);
                    const sections = chapters.map({
                        "MentalidadDeMangostaBook.useEffect.handleScroll.sections": (ch)=>document.getElementById(ch.id)
                    }["MentalidadDeMangostaBook.useEffect.handleScroll.sections"]);
                    const scrollPosition = window.scrollY + 200;
                    for(let i = sections.length - 1; i >= 0; i--){
                        const section = sections[i];
                        if (section && section.offsetTop <= scrollPosition) {
                            setActiveSection(chapters[i].id);
                            break;
                        }
                    }
                }
            }["MentalidadDeMangostaBook.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "MentalidadDeMangostaBook.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["MentalidadDeMangostaBook.useEffect"];
        }
    }["MentalidadDeMangostaBook.useEffect"], []);
    const scrollToSection = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMenuOpen(false);
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-slate-100 font-sans leading-relaxed selection:bg-yellow-900 selection:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-black/95 backdrop-blur-md shadow-sm border-b border-yellow-500/20 transition-all duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center h-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3 cursor-pointer group",
                                    onClick: scrollToTop,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-500 p-1.5 rounded-lg text-black transition-transform group-hover:scale-105 shadow-[0_0_10px_rgba(234,179,8,0.3)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                size: 20,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                lineNumber: 74,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 73,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-lg tracking-tight text-yellow-500 hidden sm:block drop-shadow-sm",
                                            children: "Mentalidad de Mangosta"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 76,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-lg tracking-tight text-yellow-500 sm:hidden",
                                            children: "MdM"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 79,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 70,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden md:flex space-x-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-yellow-400 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Índice de Capítulos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 16,
                                                        className: "rotate-90 group-hover:text-yellow-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                lineNumber: 87,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 w-64 mt-2 bg-neutral-900 rounded-xl shadow-2xl border border-yellow-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "py-2",
                                                    children: chapters.map((chapter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>scrollToSection(chapter.id),
                                                            className: "block w-full text-left px-4 py-2.5 text-sm transition-colors border-l-2 ".concat(activeSection === chapter.id ? "bg-yellow-500/10 text-yellow-400 border-yellow-500 font-medium" : "text-slate-400 border-transparent hover:bg-neutral-800 hover:text-yellow-200"),
                                                            children: chapter.title
                                                        }, chapter.id, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 12
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                lineNumber: 95,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                        lineNumber: 86,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 85,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    className: "md:hidden p-2 rounded-md text-slate-300 hover:text-yellow-400 hover:bg-neutral-900 transition-colors focus:outline-none",
                                    "aria-label": "Menu",
                                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                        lineNumber: 119,
                                        columnNumber: 22
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                        lineNumber: 119,
                                        columnNumber: 40
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 115,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 68,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                        lineNumber: 67,
                        columnNumber: 5
                    }, this),
                    isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden border-t border-yellow-500/20 bg-neutral-950 absolute w-full shadow-lg max-h-[80vh] overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-2 px-2 space-y-1",
                            children: chapters.map((chapter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection(chapter.id),
                                    className: "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ".concat(activeSection === chapter.id ? "bg-yellow-500/10 text-yellow-400 border-l-4 border-yellow-500" : "text-slate-400 hover:bg-neutral-900 hover:text-yellow-200"),
                                    children: chapter.title
                                }, chapter.id, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 129,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 127,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                        lineNumber: 126,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                lineNumber: 66,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-3xl mx-auto px-4 sm:px-6 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "space-y-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "agradecimientos",
                            className: "scroll-mt-24 animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 pb-2 border-b border-yellow-500/30 inline-block tracking-tight",
                                    children: "AGRADECIMIENTOS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 152,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Doy gracias a Dios Todopoderoso por permitirme escribir este libro. Agradezco a mi familia, en especial a mi esposa e hijos, por soportar y entender todas las veces que he tenido que sacrificar parte del tiempo que les dedico para realizar estos proyectos de Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 156,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Agradezco a toda la congregación, al ministerio, a los pastores y líderes que me han ayudado. A mis hermanos, que siempre han estado presentes, y a todos los que me tendieron la mano en cada uno de mis procesos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 163,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Agradezco a cada una de las personas que se levantaron en mi contra; fueron una motivación para no detenerme y poder demostrarles que Dios cumple su propósito en mi vida."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 169,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Les exhorto a que nunca se detengan, sin importar cuántos se levantan, porque hay Uno que te mandó, que nunca se va a detener."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 174,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 155,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 149,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "introduccion",
                            className: "scroll-mt-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 pb-2 border-b border-yellow-500/30 inline-block tracking-tight",
                                    children: "INTRODUCCIÓN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 184,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "A veces la vida puede ser dura y, para muchos, las heridas del pasado impiden avanzar hacia el futuro. Sin embargo, hay una salida. No siempre podemos controlar lo que nos sucede, pero sí cómo decidimos enfrentarlo. Eso es, en esencia, lo que yo llamo la",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-300 font-medium italic",
                                                    children: '"mentalidad de mangosta"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 9
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 188,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "La naturaleza de la mangosta"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 200,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "En el reino animal, la mangosta es reconocida por su valentía, agilidad y su firme determinación frente a los desafíos. Aunque es una criatura de tamaño relativamente pequeño, no se deja intimidar por los peligros que la rodean ni por los depredadores que enfrenta. La capacidad de la mangosta para superar estos riesgos no solo proviene de su habilidad física, sino también de su mentalidad tenaz. En lugar de rendirse ante el peligro inminente, utiliza su coraje y determinación para superar los desafíos y luchar por su supervivencia."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 203,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Históricamente, la mangosta era un animal atacado siempre por la serpiente. Cuentan que, cuando la serpiente veía a la mangosta, la devoraba; pero un día, al ver que la serpiente iba a devorar a su cría, la mangosta se levantó y luchó. Aunque la serpiente logró picarla, la mangosta pudo matarla. Los estudiosos descubrieron que la serpiente no logró matar a la mangosta porque esta posee un metabolismo mutante. Esto hace que el veneno que entra a su cuerpo se convierta en un anticuerpo que la protege. Muchas veces hay cosas que nos quieren matar, pero en lugar de destruirnos, nos hacen más fuertes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 214,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Un pasado transformado por Dios"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 227,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A lo largo de mi vida, enfrenté situaciones que me hicieron cuestionar mi valor, mi fortaleza e incluso mi propósito. Desde muy joven, el maltrato que sufrí parecía definir quién era y quién llegaría a ser. Sin embargo, descubrí que no estamos condenados a ser prisioneros de nuestro pasado. Aunque las cicatrices intenten definirnos, Dios tiene el poder de transformar cualquier situación. Él puede restaurar nuestra vida, cambiar nuestra historia y darnos una nueva identidad."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 230,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "La clave para esta transformación radica en una vida de oración e intimidad con Dios. Es a través de la oración que rompemos las cadenas que nos atan al pasado y avanzamos con pasos firmes hacia nuestro propósito. Sin una conexión profunda con Dios, es difícil mantener una mentalidad renovada; pero cuando le entregamos nuestras cargas, Él nos fortalece para enfrentarlas y superarlas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 240,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A lo largo de este libro, compartiré cómo, a pesar de lo que viví, logré cambiar mi mentalidad: pasé de ser una víctima de las circunstancias a alguien que camina con pasos certeros hacia el destino que Dios ha diseñado para mí. Quiero que sepas que este proceso de transformación no es sencillo, pero sí es posible."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 249,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "El poder de una decisión"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 258,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "El primer paso hacia cualquier cambio real comienza con una decisión. Cuando decidí dejar de vivir bajo las sombras de mi pasado, empecé a ver mi vida de otra manera. Así como la mangosta enfrenta a su depredador, nosotros también podemos enfrentarnos a nuestros mayores temores, inseguridades y traumas con la fuerza que Dios nos da."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 261,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Hubo momentos en los que creí que no podría mejorar, que estaría estancado en el valle de la desesperación. Pero cuando comencé a orar, a renovar mi mente y a poner mi confianza en Dios, todo empezó a cambiar. La Biblia dice:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200/90",
                                                    children: '"No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Romanos 12:2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 9
                                                }, this),
                                                "). Aunque no tenía control sobre lo que me sucedió cuando era niño, sí tenía control sobre cómo viviría a partir de ese momento y de cómo usaría esas experiencias como impulso para crecer con la ayuda de Dios."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 269,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Quiero que sepas que, sin importar lo que hayas enfrentado en tu vida, Dios puede cambiar tu historia. Si yo logré cambiar mi mentalidad, sanar y mejorar, tú también puedes hacerlo. La transformación que buscamos comienza en nuestra mente y en nuestra relación con Dios. Todo cambio externo es el reflejo de una transformación interna, y esa transformación viene cuando confiamos plenamente en Él."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 287,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 187,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 183,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "capitulo-1",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "Capítulo 1: Mentalidad de Mangosta: El Inicio de Todo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 303,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A lo largo de nuestra vida, no siempre tenemos la libertad de elegir el camino que deseamos transitar. Las circunstancias, muchas veces ajenas a nuestra voluntad, nos empujan hacia destinos que jamás hubiéramos escogido por nosotros mismos. Nos vemos forzados a aceptar, incluso, una realidad que nunca hubiéramos imaginado ni querido."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 307,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Pero, para que puedan comprender mejor a qué me refiero, permítanme compartirles una parte de mi historia personal. Mi testimonio es un reflejo de cómo, a pesar de las adversidades y las circunstancias que enfrenté, el propósito de Dios siempre estuvo presente, guiándome a través de cada desafío para transformarme y dirigirme hacia la vida que Él diseñó para mí."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 315,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Un origen marcado por el rechazo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 324,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Mi padre y mi madre tuvieron una relación amorosa, pues él, estando casado, le mintió diciéndole que era soltero. Cuando ella quedó embarazada, aprovechó la oportunidad para pedirle que se casaran, pero él se negó. Ya tenía otra familia: una esposa, dos hijas y otro bebé en camino. Herida por esta traición, cuando yo tenía apenas cinco meses de haber nacido, mi madre decidió abandonar el país, dejándome al cuidado de unas personas que ella no conocía."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 327,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Crecí con esa familia, quienes me cuidaron con mucho amor hasta los seis años. En ese momento, mi madre volvió a buscarme, no porque hubiera cambiado de opinión y quisiera tener cuidado de mí, sino con la esperanza de que mi padre volviera con ella. Sin embargo, la familia que me había criado no quería dejarme ir, ya que yo no reconocía a la mujer que me había abandonado. Para mí, ella no era mi madre; no lograba verla como tal."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 337,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Había visto en la televisión que algunas madres vendían a sus hijos para que les extrajeran los órganos, y temía que mi madre hubiera hecho lo mismo conmigo. Por eso, tenía mucho miedo de irme con ella. Al ver la negativa de la familia que me había criado a entregarme, ella los amenazó con llevarlos a la justicia para que fueran a la cárcel. A pesar del dolor que sentían y de cuánto me amaban, tuvieron que dejarme ir."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 346,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "El dolor del maltrato"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 356,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Mi madre comenzó a maltratarme de formas crueles. Me hería en la cabeza con tubos, me rompía los cartílagos de las orejas al jalarlas con fuerza y me sumergía la cabeza en tanques de agua hasta que casi me ahogaba. También me obligaba a arrodillarme sobre un "guayo", mientras me hacía sostener pedazos de bloque en cada mano y un envase de agua balanceado en la cabeza. Si en algún momento me debilitaba y hacía un movimiento que provocaba que el envase se cayera, me golpeaba la espalda con un alambre de cobre.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 359,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Después de un año de maltratos, cuando tenía 7 años, mi madre decidió expulsarme de la casa sin permitirme regresar con la familia que me había criado. Me llevaron a donde mi padre, quien dijo que no podía hacerse cargo de mí porque ya tenía una familia, con una esposa y tres hijas (una de ellas de mi edad), como si yo fuera responsable de sus errores."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 370,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Mi abuela paterna, al enterarse de la situación, decidió llevarme a su casa. Ella comenzó a educarme y enseñarme principios de vida, como estudiar, ser bueno con los demás y buscar a Dios. Sin embargo, a pesar de eso, no tuve una infancia normal. Mientras otros niños jugaban, yo tenía que salir a vender empanadas en las calles, o andar voceando con una olla de mangos, aguacates y limoncillos, dependiendo de la temporada de cosecha. También vendía carbón y recogía comida en el vecindario para los cerdos que criaba mi abuela."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 378,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Huérfano y desamparado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 390,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Cuatro años después, cuando cumplí nueve, todo empeoró. Mi abuela perdió la batalla contra el cáncer. Luego de su fallecimiento, quedé al cuidado de mis tíos, quienes eran alcohólicos. Mis noches se convirtieron en una pesadilla. Mis tíos llegaban borrachos a casa y me despertaban a golpes, con puños y patadas. Uno de ellos, además, abusó sexualmente de mí. La peor parte fue que nadie me creyó. Mi familia siempre pensó que lo estaba inventando."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 393,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Como padres, debemos tener mucho cuidado cuando nuestros hijos nos hablan sobre temas sensibles, especialmente si se trata de un abuso. Es importante investigar y observar lo que nos dicen, porque si no les creemos o no mostramos interés cuando nos cuentan algo, perderán la confianza en nosotros y podrían dejar de comunicarnos sus problemas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 403,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "En el mundo espiritual, todo tiene un propósito"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 412,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Al leer este fragmento de mi historia y todo lo que tuve que sufrir, es normal preguntarse:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-300",
                                                    children: "¿Dónde estaba Dios?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "En momentos de dolor y sufrimiento, nos cuestionamos cómo puede un ser bueno permitir que ocurran cosas tan malas. Sin embargo, en medio de la angustia y el dolor, Dios está presente. Puede que no lo percibamos de inmediato, pero Él está allí, y yo pude confirmarlo."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 415,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-l-4 border-yellow-500 pl-6 py-4 my-8 bg-yellow-500/10 italic text-slate-300 rounded-r-lg",
                                            children: [
                                                "Un día, cuando tenía alrededor de 11 años, mientras dormía, soñé que estaba frente a una estatua de Jesucristo y que me encontraba pidiéndole ayuda. Al levantar la vista, me di cuenta de que no era una estatua, sino que Él, estaba allí, sonriendo, y me dijo:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-400",
                                                    children: '"No soy una estatua, no temas, estoy contigo."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 428,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "En ese momento, escuché una voz fuerte que me llamó:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "uppercase font-bold text-yellow-500",
                                                    children: '"¡GARY, DESPIERTA!"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 9
                                                }, this),
                                                ". Al abrir los ojos, vi un puñal viniendo en dirección hacia mí. Uno de mis tíos estaba intentando matarme. Me lancé de la cama, corriendo y pidiendo ayuda, y los vecinos salieron en mi defensa. Ellos eran quienes me cuidaron después de la muerte de mi abuela, y estoy agradecido a Dios por haber puesto a estas personas en mi camino durante ese tiempo de dificultad. En medio de todo, Dios los usó para mostrar su fidelidad. Ellos me alimentaban, me vestían y su apoyo fue muy importante en esos momentos de crisis."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 439,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "La escuela de la calle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 455,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Pero mi historia no termina ahí. A partir de entonces, me vi obligado a vivir en las calles, rodeado de vendedores de droga, atracadores, prostitutas y personas con vidas delictivas. Aunque parezca sorprendente, ellos eran quienes me proporcionaban comida y un lugar donde dormir. Sin embargo, no podían ofrecerme la estabilidad ni la felicidad de la que ellos mismos carecían. Recuerdo que lloraba todos los días, sintiendo que no tenía padre ni madre, y que nadie me felicitaba en mi cumpleaños, en Año Nuevo, ni en otras épocas en las que otros recibían el cariño de sus seres queridos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 458,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Cualquiera que analice detenidamente esta parte de mi historia podría pensar que ese oscuro período, que considero más bien como una estación en el tren de mi vida, no formaba parte del plan de Dios. Y, en realidad, es lógico pensar así. Sin embargo, es importante comprender la naturaleza milagrosa de la palabra de Dios. Cada experiencia que vivimos, aunque no sea directamente provocada por Él, puede ser utilizada por Dios para mostrar su gloria a través de nosotros. A menudo, en estos momentos difíciles, Dios se manifiesta de maneras inesperadas y poderosas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 470,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Restauración y promesa"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 483,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Estoy seguro de que todo lo que pasé con mi madre tuvo un propósito en el plan de Dios. Hoy en día, mi madre le sirve a Cristo, y nuestra relación se ha transformado: ella me ama y yo la amo. Mi hermano más pequeño también es cristiano, y ahora solo falta mi otro hermano. Sin embargo, confío en que Dios está obrando en su vida. Recuerdo que un día Él me dijo que toda mi familia le serviría, y yo lo creí. He visto cómo esa promesa se está cumpliendo y cómo Dios se ha glorificado en nuestras vidas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 486,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Por tanto, no tengo la menor duda de que todo lo que sufrí, aunque no lo comprendía en ese momento, de alguna manera Dios lo usó en su plan divino a mi favor. Lo que el enemigo pensó que me destruiría, Dios lo revirtió y lo utilizó para traer bendición a mi vida."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 496,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Pero el proceso no fue fácil. Requirió humillación en Su presencia y oración. Quiero enseñarte que, si no tienes una vida de oración, haz los ajustes necesarios para empezar a orar de inmediato. La oración es la forma más efectiva, y diría que la única, de mantener una comunicación constante con Dios. No puedes recibir la revelación del propósito de Dios para tu vida sin oración."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 503,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Busca siempre escuchar a Dios y hablarle; conviértelo en tu amigo. Esto te asegurará la victoria en la vida cristiana. Deja el pasado atrás y enfócate en el glorioso futuro que Dios tiene reservado para ti."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 512,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 306,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 300,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "capitulo-2",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CAPÍTULO 2: EL CORAZÓN DE DIOS TAMBIÉN LATE POR LOS PERDIDOS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 525,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A veces pensamos que Dios solo bendice y ayuda a aquellos que le siguen y se esfuerzan por hacer Su voluntad. Como cristianos, corremos el riesgo de volvernos insensibles al sufrimiento de los demás, especialmente cuando sentimos que, al estar ya salvos, estamos bien. Sin embargo, debemos recordar que el mundo está lleno de personas que sufren y, aunque pueda parecer difícil de creer, esas personas también le importan profundamente a Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 529,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Su misericordia no tiene límites, como lo expresa la Escritura:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200/90",
                                                    children: '"Hace salir su sol sobre justos e injustos"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Mateo 5:45"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 9
                                                }, this),
                                                "). Esto significa que su amor y compasión no se limitan a los que lo siguen fielmente; Él está pendiente de todos, incluso de aquellos que todavía no lo conocen o que se han apartado. Dios, en su infinita bondad, no abandona a nadie. Al contrario,",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200/90",
                                                    children: '"deja las 99 ovejas para ir tras la que está perdida"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Lucas 15:4—7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 9
                                                }, this),
                                                ")."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 539,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Ese es el mismo amor que Él mostró hacia mí. Yo fui esa oveja perdida y, aun cuando no lo merecía, Él vino a buscarme, me alcanzó con su gracia y me devolvió al redil."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 561,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Sin escapatoria"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 567,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Recuerdo que cuando me llamaban porque agentes de la Dirección Nacional de Control de Drogas (DNCD) iban a allanar el barrio donde yo delinquía a través del microtráfico de estupefacientes, recogía todo y me iba a una iglesia a escuchar el culto, pidiéndole a Dios que la DNCD no me encontrara. Pero un día, miembros de ese organismo hicieron un allanamiento a las 4:00 de la tarde, y a esa hora no había ninguna iglesia abierta, así que tuve que ir a la casa de un socio en el negocio delictivo."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 570,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Esperé allí, y a las 7:00 de la noche me llamaron para decirme que ya la DNCD no estaba en el área, y que fuera al punto porque había muchos compradores esperando. Le pregunté a mi contacto y me dijo que no había ningún “chivato” ni vehículo sospechoso en la zona. Bajé con 45 “bolas” de cocaína (perico), 5 de marihuana y 7 "piedras" de crack para vender. También llevaba cocaína para mí y mi gente, con la intención de amanecer consumiendo.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 580,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Cuando crucé la avenida, antes de llegar al punto, se tiraron cuatro vehículos grandes de la DNCD con alrededor de 40 policías encapuchados, armados con rifles M-16, y llevaban presos en las guaguas. Al ver esto me detuve frente a la segunda unidad. Sabía que no tenía escapatoria. En ese momento, escuché una voz fuerte que me dijo:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 589,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—¡Corre!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 597,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Me pregunté hacia dónde iba a correr. Entonces recordé que, cuando estaba en apuros, yo clamaba a Dios. El tiempo parecía haberse detenido. Miré al cielo, hablé con Dios en voz alta y dije:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 600,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-neutral-800/50 p-4 rounded-lg italic text-slate-300",
                                            children: "—Señor, los cristianos me dicen que voy a servirte predicando tu palabra, que has mostrado en visiones que yo iba a predicar en estadios y que te vas a glorificar a través de mí con sanidad y liberación. Si eso es verdad, te pido que me ayudes a salir de este aprieto. Yo buscaría de ti, pero aquí afuera, no en la cárcel. Si me agarran con toda esta droga, cuando sepan quién soy y revisen los expedientes, me van a dictar de 20 a 30 años. Por favor, ayúdame."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 607,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Una señal del cielo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 618,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Al momento, el cielo relampagueó con un destello rojo."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 621,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "—",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: "Señor, no estoy pidiendo señales, estoy pidiendo ayuda"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "—dije con desesperación—.",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: "Por favor, sácame de aquí."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 622,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Yo sabía que ese relámpago había sido una señal de parte de Dios para que entendiera que Él me estaba escuchando, porque ni siquiera estaba nublado. Así que le seguí hablando y le dije:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 632,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Dios, si me sacas de esta, con mi vida te sirvo; te serviré a tiempo completo."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 637,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "En ese momento, el cielo relampagueó por segunda vez. Luego, de la nada, se acercó un niño de unos dos o tres años, me haló el pantalón y me dijo:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 641,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 font-bold text-yellow-400",
                                            children: "—Vámonos con Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 646,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Miré al niño y le dije:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 649,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "—Mi hijo, vete de aquí porque hay mucha droga y armas de fuego; en cualquier momento se arma un tiroteo."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 650,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Lo empujé suavemente para que se apartara de mí, pero el niño se aferró a mi pantalón y repitió:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 654,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 font-bold text-yellow-400",
                                            children: "—Vámonos con Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 658,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Volví a mirar al cielo y dije:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 661,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Señor, no te he pedido señales, pero ahora sí te voy a pedir una: dame una señal y me iré."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 662,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Relampagueó en el cielo por tercera vez. Entonces cargué al niño y empecé a caminar. Escuché los pasos detrás de mí, intenté voltear mi cara y el niño me sostuvo el rostro y me dijo:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 666,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 font-bold text-yellow-400",
                                            children: "—No te voltees, que te están mirando, vámonos con Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 671,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'En ese momento levanté mis manos al cielo y empecé a adorar a Dios mientras caminaba, hasta llegar a mi casa. Bajé al niño frente a mi casa y le dije: "Te voy a regalar una papita y un refresco cuando te vuelva a ver". Él solo sonrió y se fue.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 674,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Un pacto de fidelidad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 681,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Fui a una iglesia con mi esposa para aceptar a Cristo. Pasamos al frente y confesamos a Cristo. Recuerdo que me arrodillé en el altar para orar y le dije:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 684,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Señor, ya te acepté, pero nunca he visto a un cristiano robando ni vendiendo drogas. ¿Cómo me voy a sostener con esposa?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 689,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Escuché una voz que me dijo:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 693,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center font-bold text-2xl text-yellow-400 italic font-serif my-4",
                                            children: '"Sé fiel a mí, ocúpate de lo mío, que yo me ocuparé de lo tuyo".'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 694,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "En 18 años consumiendo drogas, nunca había escuchado voces, pero ese día escuché esa voz y supe que era la voz de Dios. Fuerte, clara e inconfundible."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 697,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "¿Escucha Dios al pecador?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 703,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Sé que esta parte de mi historia puede resultar controversial para muchos, porque existe la noción de que Dios no escucha la oración del pecador. Sin embargo, cabe preguntarse hasta qué punto es esto cierto, ya que todos partimos de una condición pecaminosa y el Señor, en su infinita misericordia, ha prestado oído a nuestro clamor."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 706,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Aunque no quiero hacer doctrina de ello, pues los lineamientos espirituales ya están definidos, insisto en que una oración sincera de un pecador a un Dios justo y bondadoso, pidiendo auxilio y mostrando disposición de servirle con todo el corazón, no dejará indiferente a nuestro divino Redentor."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 714,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Esto lo vemos claramente en",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Lucas 18:13-14"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 9
                                                }, this),
                                                ", donde un publicano reconoce sus faltas y desobediencia ante Dios, así como su falta de mérito para encontrar perdón. En el verso 14, el mismo Jesucristo dice que este hombre se fue a casa justificado, mientras que en los versículos anteriores, el fariseo hace alarde de ayunar dos veces por semana y cumplir toda la ley, olvidando que ante el Todopoderoso nadie puede justificarse, salvo por su gracia. Es desde ese reconocimiento de nuestras faltas que debemos marcar una línea de vida acorde con este precioso evangelio."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 721,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Entiendo que si Dios no me hubiera escuchado ni rescatado cuando la DNCD casi me arresta, no sé dónde estaría hoy. Pero algo ocurrió: puse toda mi fe y confianza en las misericordias del Señor, y fui bendecido al ser escuchado y atendido en mi clamor. Por eso, hoy le sirvo con inmenso gozo, enfrentando con fe y valentía cada obstáculo que se presenta. Si Dios lo hizo una vez, tengo la plena certeza de que lo volverá a hacer, y su gloria será aún mayor."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 736,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Haz de esta verdad una firme convicción en tu vida: mantente constante en oración, con fe, creyendo que no hay imposibles para nuestro Señor y Salvador Jesucristo. Sanar, mejorar y transformar tu vida también es posible para ti. La transformación que anhelamos comienza en nuestra mente y en nuestra relación con Dios. Todo cambio externo es un reflejo de una transformación interna, y esa transformación llega cuando confiamos plenamente en Él."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 746,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 528,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 522,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "capitulo-3",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CAPÍTULO 3: FORJADOS EN EL FUEGO"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 763,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Es muy común que, al tomar la decisión de seguir a Cristo, te enfrentes a una serie de ataques espirituales. Esto sucede porque el enemigo, al ver que has sido liberado por el poder de Jesús y que ya no tiene control sobre tu vida, busca de todas las formas posibles recuperar su influencia. Comienza a atacarte en diferentes áreas: puedes experimentar escasez, dudas, enfermedades y otras dificultades que parecen surgir de la nada. Su propósito es hacerte creer que estabas mejor antes de conocer a Cristo, utilizando mentiras y engaños para sembrar la duda y debilitar tu fe."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 767,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Yo también pasé por una etapa similar. Después de entregar mi vida a Cristo, mientras oraba un día, Dios me habló con claridad y me pidió que desechara todo lo que tenía: ropa, muebles y otras pertenencias de la casa. Todo eso provenía de negocios ilícitos y, obedeciendo Su voz, lo tiré todo. Me quedé literalmente sin nada."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 779,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "El precio de la obediencia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 788,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Mi esposa y yo empezamos a dormir en la iglesia porque no teníamos otro lugar a dónde ir. Cada día salíamos a predicar en las esquinas, en lugares donde se vendían drogas, en hospitales, orfanatos y cárceles. Algunas veces conseguimos algo para comer; otras veces, no. Después de predicar, asistíamos al culto y luego nos quedamos allí para dormir."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 791,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Un día, el pastor de la iglesia se me acercó y me dijo que teníamos que buscar otro lugar para dormir, que no podíamos seguir quedándonos en la iglesia junto a los demás hermanos. En el sector ya se hablaba de lo que Dios había hecho en nuestras vidas, en la de mi esposa y en la mía. Él sabía que, mientras estuviéramos allí, ni en la iglesia ni en los alrededores ocurriría ningún robo."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 799,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Cuando el pastor nos pidió que nos fuéramos, le expliqué la situación que estábamos viviendo. No teníamos a dónde ir. Su respuesta fue directa:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 808,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Si no tienen dónde dormir, busquen otra iglesia donde los puedan ayudar, que los dejen quedarse allí. Vayan a congregarse en ese lugar."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 813,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "En ese momento nos sentimos devastados. Lloramos de impotencia y sufrimos mucho. No teníamos ninguna opción, no podíamos dormir en la calle. La gente del barrio me conocía bien, sabían todo lo que yo había tenido antes de llegar a Cristo, cómo había sido mi vida en el mundo. Ahora que estaba en el camino de Dios, no podían verme en esa situación, durmiendo en la calle. Me preguntarían sobre el amor y la compasión en la iglesia, y eso no solo sería humillante, sino que podría afectar el testimonio del reino de Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 818,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Desesperado, tomé una decisión. Mi esposa y yo empezamos a dormir en el patio trasero de la iglesia, un lugar donde nadie pudiera vernos. Esperábamos a que todos se fueran a dormir y entonces extendíamos una sábana sobre la tierra. Frente a nosotros quedaba el basurero, y por las noches se llenaba de cucarachas y ciempiés. Dormíamos mal, con un ojo siempre abierto, vigilando los alrededores por si pasaba algo. Y si llovía, la cosa empeoraba. Teníamos que refugiarnos en una letrina que había en el patio y esperar allí hasta que la lluvia cesara."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 829,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Mientras estábamos en la letrina, yo me sentaba en el inodoro y mi esposa se acomodaba en mis piernas para protegernos del frío y la humedad. Era una situación realmente incómoda: las cucarachas caían del techo sobre nosotros mientras intentábamos mantenernos lo más seguros posible."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 841,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A pesar de las adversidades, manteníamos una rutina de oración, desde las 5 hasta las 7 de la mañana. Durante esas horas, nuestra lucha no era solo contra las dificultades físicas, sino también una batalla espiritual. Proclamábamos el reino de Dios con fervor."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 848,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Dios no se ausenta en nuestra dificultad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 856,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Seguro conoces la historia de Sadrac, Mesac y Abed-Nego, tres jóvenes cuya fe en Dios los llevó a enfrentar una prueba muy dura. Cuando se negaron a adorar la estatua de oro que el rey Nabucodonosor había erigido, fueron arrojados al horno de fuego ardiente. Pero algo asombroso ocurrió: el rey no solo vio a los tres jóvenes en el horno, sino que también notó a una cuarta figura con ellos,",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"como hijo de los dioses"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 867,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Daniel 3:25"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 871,
                                                    columnNumber: 9
                                                }, this),
                                                "). Esa figura era Jesús mismo, acompañándolos en medio de su prueba."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 859,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Este detalle es fundamental. A veces, Dios no nos librará de las dificultades, sino que entrará en ellas con nosotros. En",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Isaías 43:2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 880,
                                                    columnNumber: 9
                                                }, this),
                                                ", Dios nos promete:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán; cuando pases por el fuego, no te quemarás, ni la llama arderá en ti."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 884,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "En lugar de eliminar el sufrimiento, Dios se une a nosotros en medio de él, ofreciéndonos Su presencia y fortaleza."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 877,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Nos asegura que no estamos solos en nuestras luchas. Aunque enfrentemos desafíos y pruebas, la presencia de Dios transforma nuestras dificultades en bendiciones y crecimiento espiritual. Mi esposa y yo somos testigos vivos de eso. Así como el oro es purificado en el fuego, nosotros somos fortalecidos en las pruebas. La clave no es huir del proceso, sino abrazarlo, sabiendo que cada paso que damos, cada momento difícil que atravesamos, está formando en nosotros el carácter de un verdadero vencedor."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 892,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Hoy en día, nuestra vida ha cambiado de manera radical. Cada semana visitamos cárceles públicas en todo el país, vamos a hospitales y orfanatos, predicamos a Cristo en las calles y somos pastores de la iglesia "Los Rescatados Rescatando". Este ministerio ha provocado un gran avivamiento en la zona de Los Ríos, en la ciudad capital.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 903,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Hemos sido testigos de cómo más de mil presos han aceptado a Cristo. En nuestras campañas evangelísticas, hemos visto a delincuentes entregar cuchillos, puñales y armas de fuego al entregarse a Cristo. Ellos han visto el cambio en mi vida y confían en que Dios puede hacer lo mismo en la suya."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 911,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Transformando el dolor en propósito"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 919,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Las dificultades que enfrentan no son para llorar, sino para crecer. El proceso no es un lugar de lamento, sino de entrenamiento."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 922,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Mi esposa y yo enfrentamos momentos de profundo dolor y desánimo, pero en lugar de quedarnos estancados en la tristeza, decidimos llevar nuestro sufrimiento a la cruz de Cristo. Transformamos nuestro dolor en una oportunidad para glorificar a Dios y hablar de su grandeza. Aprendimos a reconocer su propósito en nuestras vidas como pareja escogida para su gloria."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 927,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Quedarse callado e inactivo solo alimenta la holgazanería espiritual, algo que realmente perjudica la salud emocional y espiritual. A menudo, justificamos nuestra pasividad con excusas basadas en nuestras circunstancias, pero no podemos permitir que esas excusas nos frenen. Moisés era tartamudo, pero eso no le impidió liderar al pueblo de Israel. Gedeón se sentía insignificante y temeroso, pero Dios lo usó para liberar a Israel de los madianitas. Jeremías era joven y sentía que no tenía la experiencia necesaria, pero Dios lo llamó a ser un profeta poderoso."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 935,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "La mediocridad espiritual surge cuando elegimos la comodidad en lugar de la valentía, y esto puede llevarnos al estancamiento de nuestro crecimiento y bienestar en la fe."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 947,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Cuando nos enfrentamos a situaciones difíciles, como las que viví, es natural sentir el deseo de rendirse y abandonar todo, llenándonos de rencor hacia quienes deberían ayudarnos. Es fácil claudicar en la fe y dejarse llevar por la desesperanza. Pero esa actitud es la de aquellos que son llamados, pero no escogidos. Los que realmente han sido seleccionados por Dios y tienen el coraje de ser valientes, se visten con la armadura cristiana y salen al campo de batalla con la fe en Dios como su guía."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 952,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "No voy a negar que surgieron pensamientos de desánimo. Este es un truco muy común del enemigo en tiempos modernos. En momentos de debilidad, comparaba mi vida actual, llena de dificultades económicas, con la anterior, cuando el dinero llegaba de manera cuestionable. Pero desde que Cristo me rescató, me selló para su gloria. Esa transformación me enseñó que, aunque el camino sea difícil, el propósito de Dios en nuestra vida es mucho más grande que cualquier desafío que podamos enfrentar."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 963,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Algunas personas comprenden el valor de la prudencia y el poder del silencio. Aunque el cristiano debe evitar hablar a la ligera, también hay momentos en los que es vital orar y, al mismo tiempo, hablar con valentía sobre quién es Jesús y lo que ha hecho en nuestra vida. Si en medio de mis dificultades me hubiera quedado callado y no hubiera compartido mi fe, no puedo imaginar dónde estaría hoy; probablemente no tendría el ministerio que Dios me ha confiado."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 973,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Gracias a su misericordia eterna, mi esposa y yo hemos podido mantenernos firmes, incluso en la adversidad, proclamando a Cristo y fortaleciendo nuestra oración. Solo así encontramos la dirección que necesitábamos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 983,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-900/20 p-6 rounded-lg my-8 border border-yellow-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "italic font-medium text-yellow-100 mb-4 text-center",
                                                    children: '"Pacientemente esperé a Jehová, y se inclinó a mí, y oyó mi clamor. Me sacó del pozo de la desesperación, del lodo cenagoso; Puso mis pies sobre la peña, y enderezó mis pasos. Puso luego en mi boca cántico nuevo, alabanza a nuestro Dios. Verán esto muchos, y temerán, y confiarán en Jehová."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 991,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-right font-bold text-yellow-400",
                                                    children: "—Salmos 40:1-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 998,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 990,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "No puedo permanecer en silencio ni vivir en anonimato, dedicándome solo a orar en mi intimidad sin hablarle a los demás sobre el Dios que me salvó. ¡Lo gritaré en todos lados! ¡Cristo salva! ¡Cristo vive!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1003,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 766,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 760,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "capitulo-4",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CAPÍTULO 4: EL SECRETO PARA LA VICTORIA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 1016,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Todos anhelan la victoria, el éxito, el crecimiento y las bendiciones que trae consigo. Sin embargo, pocos están dispuestos a pagar el precio que estas conquistas exigen. Muchos quieren crecer, pero al enfrentar el proceso, retroceden por miedo. Otros anhelan la bendición, pero huyen de la prueba. Lo cierto es que la victoria no es fruto de la comodidad, sino del sacrificio, de la perseverancia y, sobre todo, de la dependencia absoluta de Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1020,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Aquellos que verdaderamente alcanzan la victoria no son los que se sientan a llorar en medio del proceso, empezando a dudar de la bondad de Dios, sino los que entienden que cada prueba es una preparación, y cada proceso es una oportunidad para crecer en fe, carácter y madurez espiritual. Una frase muy famosa dice que",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Dios da sus mejores batallas a sus mejores soldados"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1036,
                                                    columnNumber: 9
                                                }, this),
                                                ", pero casi nadie menciona que el soldado que vence en la batalla es exaltado y condecorado... no por haber evitado el campo de batalla, sino por haber resistido hasta el final, con valentía y perseverancia."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1030,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "¿Cómo se puede declarar victorioso a quien nunca ha tenido ninguna batalla? Los ganadores no son aquellos que nunca enfrentaron dificultades, sino aquellos que se negaron a rendirse. Son personas que, a pesar de los tropiezos, las caídas y las adversidades, siguieron adelante."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A continuación, te compartiré dos principios fundamentales para alcanzar la victoria:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1051,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Nunca dejes de orar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1056,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Es importante reconocer que, en ocasiones, hemos adoptado ideas equivocadas sobre lo que significa orar. Muchas veces, hemos caído en rutinas o prácticas que no nos llevan a una verdadera comunión con Dios. Podemos pensar que estamos en un lugar santo solo por haber reservado un tiempo para orar, pero eso no garantiza que estemos realmente entrando en Su presencia. Es vital aprender a orar correctamente, no por costumbre, sino porque la oración es lo único que puede fortalecer verdaderamente nuestra vida espiritual."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1059,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "La oración es el medio por el cual profundizamos nuestra comunión con Dios, dándonos la certeza de que Sus promesas se cumplirán en nuestras vidas. Sin embargo, si oramos sin reconocer quién es Dios y sin la reverencia que merece, no estamos entrando en Su presencia de manera genuina."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A veces, nuestras oraciones son breves, de 10, 30 minutos o quizás una hora, pero si oramos con la constancia y profundidad con la que Jesús lo hacía, nuestra comunicación con Dios se volvería más natural y poderosa."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1077,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Jesús, sin haber cometido pecado, pasaba noches enteras en oración, como lo narra el evangelio de Lucas. Subía al monte y oraba durante horas, para luego bajar y realizar milagros, cumpliendo la voluntad de Dios en la tierra. Si Él, siendo el Hijo de Dios, consideraba la oración una prioridad, cuánto más nosotros, que somos imperfectos, debemos seguir Su ejemplo. No olvidemos que la oración requiere sacrificio y constancia, algo que a menudo evitamos porque preferimos confiar en nuestra autosuficiencia en lugar de buscar la dirección de Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1083,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Los discípulos notaron que, cada vez que Jesús oraba, lo que pedía se cumplía, lo que los llevó a desear aprender a orar con la misma intensidad y efectividad. Jesús les enseñó que la oración debía ser en comunión íntima con Dios, en un diálogo sincero en el lugar secreto, donde el Padre se revela y habla a nuestro corazón."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1094,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A través de la oración, recibimos poder y dirección para nuestras vidas. Jesús enfatizó, como se relata en Mateo, que debemos orar en secreto, sin buscar la aprobación de los demás, sino una relación genuina con Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1102,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Dios no se fija tanto en el lugar físico donde estamos orando, sino en nuestra disposición y comunión con Él. No podemos caer en la trampa de reducir la oración a una fórmula o método. Por más libros que leamos, la oración no puede limitarse a técnicas humanas. Es un patrón espiritual que debe vivirse a través de la experiencia y la relación con Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1108,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Jesús no nos entregó un método rígido para orar, sino un modelo que debía ser vivido con sinceridad y autenticidad. La oración no es mecánica, es un espacio donde Dios se revela, nos habla y nos transforma. Como dice",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Marcos 11:24"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1121,
                                                    columnNumber: 9
                                                }, this),
                                                ":",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Por eso les digo que todo lo que ustedes oren y pidan, crean que lo recibirán y lo tendrán"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 9
                                                }, this),
                                                ". Pero para que eso sea una realidad, debemos orar desde un lugar de comunión genuina con el Padre, no simplemente repitiendo palabras, sino alineando nuestro corazón con Su voluntad."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "No se trata tanto del tiempo que pasamos orando o del lugar donde lo hacemos, sino de la disposición con la que nos acercamos a Dios. Él busca una relación viva y auténtica con nosotros, y esa relación es clave para recibir lo que hemos pedido, de acuerdo a Su voluntad y propósito."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1134,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Aférrate a la voluntad de Dios"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1142,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Muchas veces nos encontramos persiguiendo nuestros propios deseos y planes, sin darnos cuenta de que Dios tiene un propósito diferente, mucho más grande y mejor para nuestras vidas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1145,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                'En la oración modelo que Jesús nos enseñó, Él no dice "haz lo que yo quiero", sino que pidió:',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Hágase tu voluntad, como en el cielo, así también en la tierra"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Mateo 6:10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 9
                                                }, this),
                                                "). Esto no es una simple frase, sino una declaración de confianza y rendición total a los planes del Padre, reconociendo que Su voluntad es buena, agradable y perfecta."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Como hijos de Dios, debemos aprender a aferrarnos a Su voluntad, entendiendo que sus caminos y pensamientos son más altos que los nuestros (",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Isaías 55:8-9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1170,
                                                    columnNumber: 9
                                                }, this),
                                                "). Aunque a veces no comprendemos el porqué de ciertas situaciones, debemos confiar en que Su plan siempre nos llevará a un destino de mayor bendición. A menudo, lo que nosotros pedimos o anhelamos es limitado por nuestra perspectiva humana, pero Dios, que ve el panorama completo, tiene para nosotros lo mejor, incluso cuando no coincide con lo que inicialmente deseamos."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1166,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Aferrarse a la voluntad de Dios significa soltar nuestros propios deseos, someter nuestros planes a Su control y confiar en que Él tiene un propósito para la circunstancia. Aunque no siempre sea fácil aceptar que algo no salga como planeamos, debemos recordar que lo que Él tiene preparado para nosotros es siempre superior a lo que podemos imaginar o pedir."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1181,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Cuando Jesús se acerca a Juan el Bautista en",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Mateo 3:13-17"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1191,
                                                    columnNumber: 9
                                                }, this),
                                                ", Juan ya había predicado acerca de Él, afirmando que después de él vendría alguien que era antes que él mismo. Para Juan, la mayor bendición que podría experimentar sería que aquel de quien habló, Jesús, lo bautizara, pues sabía que era el Hijo de Dios. Sin embargo, no sabía que habría una bendición aún mayor que ser bautizado por Él."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1189,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                'Al cumplir con la voluntad del Padre y bautizar a Jesús, en lugar de ser bautizado por Él, Juan fue testigo de una de las más grandes manifestaciones de gloria que registra el Nuevo Testamento, e incluso tal vez toda la Biblia. Solo Juan pudo ver a los "tres grandes" en una misma manifestación: vio al Hijo cuando lo sumergió en el Jordán, vio al Espíritu Santo descender en forma de paloma sobre el Hijo, y escuchó al Padre abrir los cielos y declarar:',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Este es mi Hijo amado, en quien tengo complacencia"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1210,
                                                    columnNumber: 9
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1201,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Juan el Bautista fue testigo de la presencia simultánea del Padre, el Hijo y el Espíritu Santo en una manifestación gloriosa. Así, debemos orar siempre para que se haga la voluntad del Padre, y no la nuestra. Pedimos cosas que, según nosotros, son grandes, pero Dios tiene bendiciones aún mayores preparadas para nuestras vidas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic my-6",
                                            children: [
                                                '"Y de igual manera el Espíritu nos ayuda en nuestra debilidad, porque no sabemos pedir como conviene, pero el Espíritu mismo es por nosotros con gemidos indecibles” (',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold not-italic",
                                                    children: "Romanos 8:26"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1227,
                                                    columnNumber: 9
                                                }, this),
                                                ")."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1223,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "La Biblia es clara al señalar que no sabemos lo que realmente nos conviene, por lo que, en consecuencia, tampoco podemos pedir correctamente a menos que el Espíritu Santo ponga las palabras adecuadas en nuestra boca. Por lo tanto, como creyentes en Cristo, es fundamental no aferrarnos a las cosas materiales ni a las posiciones, sino caminar con la flexibilidad mental de que, en cualquier momento, Dios nos moverá según su plan superior. No es pecado fijarse metas; de hecho, es algo muy bueno y correcto, pero debemos entender que los caminos del Señor son más altos que los nuestros, y sus pensamientos, mucho más perfectos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1232,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Si has estado orando durante años por algo en particular y de repente descubres que la voluntad de Dios es otra, simplemente da gracias y sigue firme las pisadas que Él marque.",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Proverbios 14:12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1248,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "nos enseña que",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"hay camino que al hombre le parece derecho, pero al final es camino de muerte"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1252,
                                                    columnNumber: 9
                                                }, this),
                                                '. Es importante reflexionar sobre esta verdad bíblica al soñar con lo que deseamos para nuestras vidas, pues aferrarse a ideales sin consultar la voluntad de Dios solo nos llevará por un "camino de muerte".'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1244,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Debemos dar lugar al Espíritu Santo para que ministre a nuestro espíritu sobre el propósito de Dios para nosotros, moldeando nuestra alma hasta hacerla sumisa a sus designios celestiales, aunque no siempre nos producen felicidad. El gozo, sin embargo, siempre estará presente."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 1019,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 1013,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "capitulo-5",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CAPÍTULO 5: SIN FE NO HAY CONQUISTA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "El relato de la caída de las murallas de Jericó demuestra cómo una fe constante es fundamental para lograr victorias que parecen imposibles. En el libro de",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Josué 6:1-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1283,
                                                    columnNumber: 9
                                                }, this),
                                                ", Dios dio una instrucción que, humanamente, no tenía sentido: rodear la ciudad durante seis días en silencio, y el séptimo día dar siete vueltas, tocar las trompetas y clamar para que las murallas de Jericó cayeran."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1279,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Quizás, para el ejército israelita, acostumbrado a usar sus armas en cada batalla, esta estrategia pudo haber parecido extraña; sin embargo, obedecieron con fe, y fue precisamente esa fe en la palabra de Dios lo que les permitió conquistar la ciudad de una manera milagrosa."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1291,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "¿Cuántas conquistas has perdido por tu falta de fe? ¿Cuántas veces has dejado que la duda te impida avanzar hacia la victoria que Dios ya ha prometido? La fe es el puente que te llevará a un nivel más alto de intimidad con Dios, donde podrás alcanzar las victorias que creías imposibles."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1298,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "El poder de creer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1306,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                'Muchas veces oramos sin fe, y sin fe es imposible que el milagro ocurra. Cuando Jesús hacía milagros, se acercaba a las personas y les preguntaba si creían. Ellas le contestaban diciendo: "Sí, yo creo". Entonces Jesús les decía:',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-300 font-semibold",
                                                    children: '"Tu fe te ha salvado"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1314,
                                                    columnNumber: 9
                                                }, this),
                                                ". Y al instante recibían el milagro. Del mismo modo, si creemos, Dios hará cosas mayores, grandes y poderosas en nuestra vida, si confiamos en Él."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1309,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Recuerdo que un día, en una campaña evangelística, Dios se glorificó en sanidad y liberación desde el primer día. En el segundo día, se me acercó una madre con su hija de 11 años, y me dijo:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1321,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Si usted ora por ella, ella sanará. Mi hija lo cree."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1327,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Le respondí:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1330,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Corazón, recuerda que el que sana no soy yo, sino el que me envió, que es Dios. ¿Tú crees que Él te sanará?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1331,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Y la niña contestó:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1335,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Mi madre estaba enferma, mi padre también, y cuando ayer usted oró por él, fue sanado."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1336,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "La niña continuó:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1340,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Yo sufro de epilepsia, todos los días me despierto a la 1:30 de la madrugada con ataques. Si usted ora por mí, sé que Dios me sanará."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1341,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Le pregunté:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: "—¿Tú crees que Dios te sanará?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1348,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "—y ella me respondió:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-yellow-400",
                                                    children: "—Sí."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1352,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1346,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Entonces le dije:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-yellow-400",
                                                    children: "—Tu fe te ha sanado."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1356,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1354,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Al día siguiente, su madre se me acercó y testificó que su hija se despertó a las 4:00 de la madrugada. La madre estaba despierta, observándola, esperando ver si le daba el ataque de epilepsia que siempre la aquejaba a esa hora. La niña le preguntó qué hacía despierta, si el pastor que oró por ella dijo que Dios la había sanado. Luego, la hija le dijo que se fuera a dormir, asegurando que ya estaba sana."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1360,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Certeza en lo invisible"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1370,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-900/20 p-6 rounded-lg my-6 border border-yellow-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "italic font-medium text-yellow-100 mb-4",
                                                    children: '"Pero sin fe es imposible agradar a Dios; porque es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1374,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-right font-bold text-yellow-400",
                                                    children: "—Hebreos 11:6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1379,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1373,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "En",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Hebreos 11:1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1385,
                                                    columnNumber: 9
                                                }, this),
                                                ", se da la mejor y más clara definición de lo que es la Fe. Dice que es la certeza y seguridad absoluta de lo que se espera, y la convicción y visión de lo que aún no se ha visto. Esto implica que cuando oramos a Dios, aguardamos el milagro sin dudar, comprendiendo que la voluntad de Dios para nuestras vidas es buena."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1383,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Al orar, aunque no vea físicamente lo que pido, en el mundo espiritual sé que es una realidad. Si tomamos el versículo 6 y lo combinamos con el 1, notamos que Dios se agrada de quien no duda, de quien cree sin ver. Consecuentemente, abrirá los cielos a su favor."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1395,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Para orar con fe, hay que salir de lo natural y sumergirse en lo espiritual, olvidando las limitaciones humanas y confiando en los recursos inagotables de Dios. Es fundamental aclarar lo que significa la voluntad de Dios, ya que quien ora con fe acepta su voluntad, entendiendo que es lo mejor para quien pide. La fe rompe cadenas, pero no intenta sobreponerse a los designios del Espíritu Santo."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1402,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "La fe no confunde la voluntad de Dios con las emociones humanas. Más bien, es una fuerza que brinda al hombre la capacidad de traer el cielo a la tierra. El apóstol Santiago insiste en la relación entre la fe y las obras, ya que de nada sirve una fe sin obras. Por eso te invito a que fortalezcas tu fe: ¡sí!, tu convicción en Dios y la seguridad de que Él te guía en todos tus caminos. Además, te exhorto a que te disciplines en la oración, en una constante intimidad con el Señor. Solo así verás cumplida su voluntad en tu vida."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1411,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "La fe sin obras es una fe muerta"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1423,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Es fácil decir que tenemos fe en Dios, que confiamos en su poder y en sus promesas, pero la realidad es que la fe no es solo una cuestión de palabras o pensamientos. La fe verdadera se demuestra con acciones. El apóstol Santiago lo expresa de esta manera:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Así también la fe, si no tiene obras, está completamente muerta"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1432,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Santiago 2:17"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1437,
                                                    columnNumber: 9
                                                }, this),
                                                "). Una fe sin obras es estéril, vacía."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1426,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Una fe muerta no produce milagros. La razón por la que pides y no recibes, es porque a tu fe le falta acción. No es solo pedir, es avanzar en pos de eso que pediste, y actuar creyendo que ya lo recibiste."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1442,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Cuando Jesús sanaba a las personas, no solo les decía que tuvieran fe; también los llamaba a actuar. A muchos les dijo:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Levántate, toma tu lecho y anda"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1451,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Juan 5:8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1454,
                                                    columnNumber: 10
                                                }, this),
                                                "). Él no solo declaraba sanidad, sino que pedía una respuesta, una acción."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1448,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "La fe verdadera se manifiesta cuando no solo decimos que creemos, sino cuando actuamos como si lo que pedimos ya es una realidad. Es el tipo de fe que no espera hasta ver para actuar, sino que se mueve, confiando en que Dios ya ha respondido."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1458,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Es fácil decir que tienes fe, pero ¿cómo la demuestras? ¿Te estás moviendo en la dirección de lo que crees que Dios hará en tu vida? La fe que agrada a Dios es aquella que va más allá de la oración y se convierte en acción, en obediencia, en confianza plena."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1464,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Una petición esencial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1472,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "En",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Lucas 17:5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1477,
                                                    columnNumber: 9
                                                }, this),
                                                ', vemos un momento clave en la vida de los discípulos: "Dijeron los apóstoles al Señor: Auméntanos la fe". Esta petición revela una profunda comprensión del corazón del ministerio de Jesús. Al observar los milagros, las enseñanzas y la vida de su Maestro, los discípulos no le pidieron más poder, más fama, ni siquiera más dones espirituales. Ellos pidieron al Maestro que aumentara su fe, porque entendieron que la fe es la base sobre la cual todo lo demás se construye.'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1475,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Es interesante que, ante la grandeza de lo que veían, no pidieran habilidades extraordinarias o reconocimiento. No buscaron el poder para realizar los mismos milagros que Jesús hacía, sino que quisieron lo más esencial: la fe. Sabían que todo lo que Jesús lograba sería posible solo a través de ella."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1489,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Como dijo Jesús en otra ocasión:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Si tuvierais fe como un grano de mostaza, podríais decir a este monte: Pásate de aquí allá, y se pasará; y nada os será imposible"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1498,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Mateo 17:20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1504,
                                                    columnNumber: 9
                                                }, this),
                                                "). Con fe, todo se puede alcanzar: milagros, transformación y una vida guiada por la voluntad de Dios. No es solo una creencia superficial, es una convicción que te lleva a actuar, a confiar plenamente en lo que Dios hará, aunque aún no lo veas."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1496,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Versículos sobre la fe"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1513,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: [
                                                {
                                                    ref: "Hebreos 11:1",
                                                    text: "Es, pues, la fe, la certeza de lo que se espera, la convicción de lo que no se ve."
                                                },
                                                {
                                                    ref: "Mateo 21:22",
                                                    text: "Y todo lo que pidiereis en oración, creyendo, lo recibiréis."
                                                },
                                                {
                                                    ref: "Marcos 9:23",
                                                    text: "Jesús le dijo: Si puedes creer, al que cree todo le es posible."
                                                },
                                                {
                                                    ref: "Romanos 10:17",
                                                    text: "Así que la fe es por el oír, y el oír, por la palabra de Dios."
                                                },
                                                {
                                                    ref: "2 Corintios 5:7",
                                                    text: "Porque por fe andamos, no por vista."
                                                },
                                                {
                                                    ref: "Efesios 2:8",
                                                    text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios."
                                                },
                                                {
                                                    ref: "Santiago 1:6",
                                                    text: "Pero pida con fe, no dudando nada; porque el que duda es semejante a la ola del mar, que es arrastrada por el viento y echada de una parte a otra."
                                                },
                                                {
                                                    ref: "Mateo 17:20",
                                                    text: "Jesús les dijo: Por vuestra poca fe; porque de cierto os digo, que si tuviereis fe como un grano de mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y nada os será imposible."
                                                }
                                            ].map((verse, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex flex-col sm:flex-row gap-2 sm:gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-lg shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-yellow-400 whitespace-nowrap",
                                                            children: [
                                                                verse.ref,
                                                                " —"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1554,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-300 italic",
                                                            children: verse.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1557,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1551,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1516,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 1278,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 1272,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "capitulo-6",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CAPÍTULO 6: PRINCIPIOS QUE TODO VENCEDOR DEBE APLICAR"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 1568,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Cuando notas la ausencia de la voz de Dios en tu vida, no es que Él deje de hablarte porque no quiera hacerlo como Padre. Al contrario, Su mayor anhelo es comunicarse diariamente con Su creación. Sin embargo, muchas veces no lo hace porque, cuando habla, su propósito principal es darnos indicaciones, y generalmente el ser humano no está dispuesto a seguirlas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1572,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A la mayoría no le gusta obedecer lo que Dios pide, y por esta razón Él prefiere dejar de hablar, ya que sería en vano si no vamos a seguir Su voluntad. Si Dios te habla constantemente y tú no obedeces, estarías pecando a cada momento, porque desobedecer es pecar. Por eso, en Su sabiduría y amor, Dios prefiere dejar de hablarte antes que provocar a pecar por desobediencia."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1580,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Actúa por convicción y no por sentimientos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1590,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "No debes ligar tus sentimientos ni emociones a tu llamado, porque eso podría hacerte perder las bendiciones que Dios tiene para tu vida. Con frecuencia, asociamos nuestras emociones a nuestro propósito, lo que puede alejarnos del plan divino. Dios amó tanto al mundo que entregó a Su único Hijo, el Amado del cielo. Si Él hubiera atado sus sentimientos o emociones a ese acto de amor, tal vez no habría permitido que Jesús diera Su vida por nosotros. No habría dejado que Su Hijo muriera en la cruz del Calvario."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1593,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: [
                                                        "Por eso, a menudo te encuentras llorando en un rincón, sintiéndote solo, angustiado o creyendo que Dios te ha abandonado. Pero Dios no busca a alguien que viva solo de sentimientos; Él está buscando guerreros que se levanten en medio de su llanto, en medio de su quebranto y batallas, y que digan:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: '"Yo puedo, voy a pelear esta batalla porque Dios me ha escogido para esto"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1611,
                                                            columnNumber: 10
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1604,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Cuando alguien es llamado, puede decidir si quiere ir o no, porque solo ha escuchado una voz. Pero cuando alguien es escogido, no tiene alternativa; ha sido señalado con un propósito claro. Como cuando éramos niños y nuestros padres nos llamaban a nosotros y a nuestros hermanos; tal vez nadie respondía, y entonces enviaban a otro a hacer el trabajo. Pero cuando nuestro padre mencionaba nuestro nombre directamente, no había opción: teníamos que cumplir con lo que se nos asignaba."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1617,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Así también sucede con Dios. Tal vez no solo te ha llamado, sino que te ha escogido para una misión que solo tú puedes cumplir."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1628,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "A veces te preguntas:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: "—¿Por qué a mí, Señor?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1635,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "La respuesta es que, si este proceso hubiera sido dado a otra persona, tal vez esa persona ya se habría rendido. Pero tú, aunque has pasado por mucho, has seguido adelante. Dios te escogió a ti, y por eso necesitas terminar la asignación que te fue dada, para recibir tus bendiciones."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1633,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1589,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "No te desanimes por las críticas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1647,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: 'Siempre habrá personas que critiquen el éxito de los demás porque, en el fondo, saben que nunca lo alcanzarán. Por eso, cuando logras algo, muchos intentarán minimizar tus logros, diciendo cosas como: "Lo consiguió porque tuvo ayuda", "Cualquiera puede tener ese vehículo", "Ese cargo en la empresa lo puede obtener cualquiera", o "Ese liderazgo no es nada especial". Pero esas críticas nacen del hecho de que ellos mismos no han logrado lo que tú has alcanzado, y por eso no valoran lo que tienes.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1650,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: 'Esto sucede incluso dentro de la familia. Algunos dirán: "Cualquiera puede tener una familia estable", pero no ven lo que hay detrás de esa estabilidad. No entienden que antes de tener un matrimonio armonioso, tuviste que moldear a tu pareja, pasar por momentos difíciles, y muchas veces llorar en silencio para llegar a donde estás hoy.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1661,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Para lograr ese cargo en tu empresa, tuviste que soportar situaciones difíciles: bochornos de tu jefe, confrontaciones, momentos incómodos que formaron parte de tu crecimiento. Muchas veces, no fue porque lo merecieras, sino porque él era el jefe, y aprendiste a manejar esas situaciones."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1669,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Es fácil criticar desde la comodidad, cuando ya has alcanzado algo. Las personas que critican lo hacen porque no están dispuestas a pasar por lo que tú has pasado. Prefieren quedarse sentadas en la banca de los que critican, en lugar de levantarse y aplaudir el éxito ajeno, con la esperanza de que algún día también ellos lo alcanzarán."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1676,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1646,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Da sin restricciones"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1687,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Es fundamental aprender a obedecer la voz de Dios cuando nos habla acerca de dar, ya que en ello se encuentra la verdadera bendición. No se trata solo de dar lo que nos es cómodo, sino de ofrecer aquello que Él nos pide específicamente. No basta con ofrecer una disculpa cuando Dios te llama a un perdón sincero. No se trata de entregar una camisa vieja cuando Él te pide que compres una nueva para tu hermano. Tampoco es suficiente dar lo que llevas en los bolsillos cuando Él te está llamando a ofrecer lo que tienes en tu cuenta."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1690,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: [
                                                        "Para muchos, dar puede ser un desafío, pero despojarse es una de las formas más puras de demostrar fe, ya que la Biblia nos enseña que Dios",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: '"ama al dador alegre"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1705,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "(",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-yellow-400 font-bold",
                                                            children: "2 Corintios 9:7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1709,
                                                            columnNumber: 10
                                                        }, this),
                                                        "). Y no damos con el propósito de recibir algo a cambio; damos con la confianza de que Dios es y siempre será nuestro sustento."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1701,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "El que da sin esperar nada a cambio es verdaderamente libre, pero quien da esperando recibir algo se convierte en esclavo de ese deseo. Queda atado a lo que espera, porque su motivación no es el acto de dar, sino la recompensa que ansía obtener. Muchas veces, las personas te ofrecen algo o te ayudan esperando que, en algún momento, les devuelvas el favor. Sin embargo, todo aquel que da con la expectativa de recibir se convierte en prisionero de eso que espera."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1716,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Cuando das de esa manera, te encuentras esperando un agradecimiento que tal vez nunca llegará. Estás atado a personas que, en muchos casos, no valorarán el esfuerzo que hiciste por ellas. Por eso, cuando des o ayudes, hazlo sin esperar nada a cambio, para no convertirte en esclavo de quienes nunca van a apreciar lo que hiciste. Si vives esperando el reconocimiento, podrías quedarte atrapado en una espera interminable, mientras que para ellos, ese acto que tanto te costó no tuvo mayor importancia, o incluso podrían llegar a creer que cualquiera lo habría hecho."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1726,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Sin embargo, en los momentos de necesidad, cuando se vieron solos, fue tu valentía la que marcó la diferencia. Fuiste tú quien se lanzó, sin importar la profundidad del problema. Por eso, cuando decidas dar o ayudar, hazlo de corazón, sin esperar nada a cambio. Solo así serás verdaderamente libre, sin depender del agradecimiento o la valoración de los demás."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1738,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1686,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Habla la verdad, pero en amor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1749,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: 'A las personas no les gusta que seas hipócrita con ellas, pero tampoco les agrada que les digas la verdad de frente. Muchas veces, los seres humanos rechazan la hipocresía y la mentira, pero al mismo tiempo se sienten incómodos cuando se les dice la verdad. Un ejemplo común es cuando tu pareja te pregunta: "¿Cómo me veo?". Si le respondes: "No me gusta cómo te queda esa ropa" o "Esa prenda te hace ver con más peso", se siente herida. Sin embargo, si evitas ser honesto y suavizas tu opinión, te acusan de ser hipócrita y te piden que seas sincero.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1752,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Este dilema surge porque, aunque las personas dicen querer la verdad, muchas veces no están preparadas para recibirla sin incomodarse. No obstante, es importante señalar que decir la verdad no significa ofender. Hay quienes creen que ser brutalmente honestos y ofender a otros es una forma de ser sinceros, pero no es así. Ser honesto no implica herir."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1764,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Por lo tanto, hay que tener cuidado con cómo se dice la verdad. La verdad tiene el poder de confrontar, pero no debería ofender. Es posible ser sincero sin dañar los sentimientos de los demás, usando la verdad de una manera sabia y respetuosa."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1772,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1748,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Sé sabio al buscar consejos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1782,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "No a todo el mundo se le debe pedir un consejo, ni se debe recibir de cualquiera. Repito: no todos son aptos para darte un consejo, ni todos merecen que tomes en serio su opinión. Muchas veces, las personas te aconsejan desde su propia perspectiva, y es posible que su situación no tenga nada que ver con la tuya. Otros dan opiniones basadas en lo que han oído o lo poco que saben, no en la realidad de los hechos."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1785,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: [
                                                        "Aquí es donde entra la importancia del discernimiento, la capacidad de juzgar sabiamente qué consejos son útiles y cuáles no. La Biblia nos llama a ser prudentes y a pedir discernimiento para tomar decisiones correctas.",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-yellow-400 font-bold",
                                                            children: "Proverbios 3:21"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1799,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "nos dice:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: '"Hijo mío, conserva el buen juicio y el discernimiento, no pierdas de vista la prudencia."'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1803,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "Es fundamental pedirle a Dios sabiduría para distinguir entre una opinión que edifica y una que destruye."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1794,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Esto sucede con frecuencia cuando decides emprender. Siempre habrá personas que te aconsejen mal, ya sea porque no quieren que te superes o porque temen que tengas éxito. Otros te darán opiniones con la intención de desestabilizar lo tuyo y distraerte de lo que realmente quieres lograr. Por eso, no es raro escuchar de personas que soñaban con abrir una tienda de ropa y, al final, terminan abriendo un comedor."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1810,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "¿Por qué sucede esto? Porque escucharon tantas opiniones que terminaron abandonando sus propios sueños para seguir los de otros. O se dejaron llevar por consejos que los desviaron de su camino original, guiados por aquellos que no querían que les fuera igual de bien."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1819,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: [
                                                        "Aquí es vital ejercer discernimiento: saber cuándo escuchar y cuándo seguir el propósito que Dios ha puesto en tu corazón. Como dice",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-yellow-400 font-bold",
                                                            children: "Santiago 1:5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1830,
                                                            columnNumber: 10
                                                        }, this),
                                                        ': "Si a alguno de ustedes le falta sabiduría, pídala a Dios, y Él se la dará, pues Dios da a todos generosamente sin menospreciar a nadie."'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1826,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Recuerda que no todos tienen el mismo corazón que tú, ni la misma intención de darte un buen consejo o una opinión honesta. Por eso, ten mucho cuidado a quién escuchas, y asegúrate de que tus decisiones están guiadas por la sabiduría que viene de lo alto, no por las opiniones de aquellos que no comparten tus sueños o visión."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1837,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1781,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Quiérete a ti mismo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1848,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: 'Quererse a uno mismo es el mejor romance para la vida. Muchas veces dedicas tu amor a los demás, pero te olvidas de amarte a ti mismo. Te esfuerzas en dar amor a otros, pero descuidas el cariño que tú también necesitas. ¿Por qué sucede esto? Porque no has tomado el tiempo para detenerte y pensar en ti. A veces, necesitas decir: "Hoy, necesito descansar." Aunque quieras compartir con tus amigos, es fundamental que te priorices. Primero, ámate y descansa; luego, comparte.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1851,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "¿Cuánto tiempo ha pasado desde que te diste un gusto simple, como tomar una taza de café mientras miras el mar? ¿Cuándo fue la última vez que hiciste algo que realmente te encanta, pero que has postergado por tanto tiempo? Es importante que te dediques tiempo a ti mismo, porque el amor propio es el romance que perdurará toda la vida."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1861,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Las personas estarán a tu lado mientras les convenga; algunas te valoran, otras solo aprovechan tu generosidad o personalidad. Y en muchas ocasiones, algunas de ellas se irán, te van a traicionar o simplemente desaparecerán. Aunque algunos se queden, al final del día, el único que siempre estará ahí para ti, sin fallar, eres tú mismo."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1869,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Es importante entender que el amor propio no es egoísmo. La misma Biblia nos enseña:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: '"Ama a tu prójimo como a ti mismo"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1880,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "(",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-yellow-400 font-bold",
                                                            children: "Mateo 22:39"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                            lineNumber: 1884,
                                                            columnNumber: 10
                                                        }, this),
                                                        "). Este mandamiento implica que para poder amar a los demás, primero debemos amarnos a nosotros mismos. Si no cuidamos de nuestra propia salud física, emocional y espiritual, no podremos cuidar verdaderamente a los demás. Amarte no significa desatender a los demás, sino asegurarte de que estás lo suficientemente fuerte y pleno para dar lo mejor de ti a quienes te rodean."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1877,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1847,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "No le temas al fracaso"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1898,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "El que sabe cómo subir no tiene miedo de bajar, porque confía en que sabe cómo volver a subir. Muchas personas temen enfrentarse a una derrota o perder algo, simplemente porque no entienden cómo llegaron a donde están. Subieron un día porque alguien les ayudó, pero luego se jactan de haberlo logrado por su propio mérito. Y ahora, temen caer porque saben que, en algún momento, traicionaron a esa persona que les dio una mano, y ya no cuentan con su apoyo."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1901,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Por eso, quien realmente sabe cómo alcanzar el éxito no tiene miedo de perderlo, porque ha aprendido el proceso y no depende de otros para volver a subir. Es crucial que, aunque alguien te ayude a llegar más alto, aprendas por ti mismo el camino hacia el éxito. De esa manera, si alguna vez te toca bajar, no tendrás que traicionar ni dañar a nadie por miedo a caer. En cambio, tendrás la confianza de que, sin importar las circunstancias, sabrás cómo levantarte nuevamente."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1911,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "El verdadero éxito no se basa solo en llegar a la cima, sino en conocer el proceso para que, si te encuentras en un valle, puedas volver a ascender con la misma fortaleza."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 1921,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1897,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 1571,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 1565,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "capitulo-7",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CAPÍTULO 7: TEN CUIDADO CON LOS JUDAS Y LOS PEDROS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 1934,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Muchas veces te pueden llegar a confundir con lobos por tu lealtad a tu manada, no por el mal corazón que tienes. La lealtad no es algo que se dice, sino algo que se prueba; es algo que no se exhibe, sino que se demuestra cuando llega el momento. La lealtad tiene hora, minutos y segundos. ¿Por qué me refiero a la lealtad de esta manera? Porque la lealtad se prueba en el momento exacto y preciso en que ocurren las cosas, y ahí es cuando se sabe si verdaderamente eres leal."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1938,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Por eso, cuando elijas, debes saber elegir para que, al hacerlo, no atraigas a un Judas, como muchos dirán, sino quizás a un Pedro. ¿Qué quiere decir esto? En realidad, Judas no traicionó al Maestro solo porque sí; Judas fue escogido para entregar al Maestro. Jesús no llevó a Judas al monte, Jesús no llevó a Judas a caminar sobre las aguas, Jesús no pagó los impuestos de Judas. Sin embargo, con Pedro, Jesús lo llevó al monte, le reveló quién era, pagó el impuesto de Pedro con una moneda que había en la boca de un pez y caminó sobre las aguas con él."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1948,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "La traición de la cercanía"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1960,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Existen unos "Pedros" a quienes les has dado todo: los has llevado a tu casa, les has dado de comer, les has ayudado financieramente, y en el momento en que te tienen en la cruz, son los primeros en traicionarte y negarte tres veces.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1963,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Esos Pedros que te juraron lealtad, que decían que irían contigo hasta la muerte, que afirmaban que no importaba nada porque eras su hermano y su amigo, son los primeros que, al comenzar la persecución contra ti, dicen: "Yo no lo conozco. Yo no soy. Yo nunca he estado con él."'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1969,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Por eso, hay que tener cuidado, no con los Judas, que fueron escogidos para fortalecerte. ¿Por qué para fortalecerte? Porque los Judas son esas personas que están ahí, y tú sabes que no son buenas para ti, pero su presencia tiene un propósito. Y en el momento en que quieres tirar la toalla, dices: "No, no puedo soltarla porque si la suelto, este Judas se va a burlar de mí. Si la suelto, este Judas dirá que tenía la razón. Si la suelto, este Judas dirá que siempre tuvo la razón en todo lo malo que habló de mí". Por eso, esos Judas te dan la fuerza para continuar.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1976,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Sin embargo, los Pedros que decían que irían contigo hasta la muerte, en el primer momento en que empiezan la persecución, la crítica, la murmuración contra ti y la blasfemia, cuando caes o fallas, son los primeros que te niegan y dicen: "Yo estuve ahí en un momento, pero no es mi hermano, él nunca me ayudó, él nunca hizo tal cosa por mí". Por eso debes cuidarte no de los Judas, sino de los Pedros. El enemigo nunca te va a traicionar; el que te traiciona es el amigo.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1988,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "La lealtad de la manada"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 1999,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Dentro de ese mismo punto, cabe destacar que los lobos no son los más fuertes. No, pero tampoco los verás saltando en un circo. ¿Por qué? Porque son leales a sus manadas. Los lobos no son esas personas que, en un momento dado, te aplauden sin estar de acuerdo contigo. No, no, no. Los lobos no se van al bando más fuerte simplemente porque sea el bando que está en auge; no cambiarán de bando por eso."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2002,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Los lobos no traicionan. No se van con aquellos que tienen fuerza en momentos de debilidad; prefieren morir siendo leales a su manada, siendo leales a los suyos. ¿Sabes por qué? Porque los lobos pelean por la manada, no por sus propios intereses. La envidia existe en muchos otros, y por eso solo siguen a personas con algún tipo de éxito. Los lobos no sienten envidia; pelean por la manada completa, porque entienden que las bendiciones deben disfrutarse entre todos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2011,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Hay personas que solo se alinean con un lado u otro porque creen que lo suyo es solo suyo, y es entonces cuando entra la envidia, ese sentimiento del seguidor que en la vida no ha logrado nada. Pero los lobos no son así; no sienten envidia porque entienden que lo que van a recibir es para disfrutarlo entre todos. Por eso, vuelvo y te repito: te han confundido con lobos no por la maldad en tu corazón, sino por tu lealtad a tu manada. Continúa siendo leal a tu manada; tarde o temprano, la vida te recompensará."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2021,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "¿Qué eres? ¿Un Judas o un Pedro? ¿Un lobo fiel a su manada, o simplemente un león que quiere reinar solo?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2032,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Si quieres llegar temprano, vete despacio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2037,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Este punto es muy importante porque mi abuelo siempre me decía:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Si quieres llegar temprano, vete despacio"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 2042,
                                                    columnNumber: 9
                                                }, this),
                                                ". Cuando era niño, no entendía esto, hasta que un día, en un accidente, comprendí que cuanto más rápido corría, más tarde podía llegar a mi destino, o simplemente nunca llegar."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2040,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Muchas veces en la vida, las bendiciones nos están esperando, pero queremos desesperarnos y acelerar el proceso. Esto provoca que nos perdamos en el camino, que las bendiciones se alejen y no podamos recibir lo que verdaderamente Dios ha guardado para nosotros."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2049,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A menudo pensamos que Dios se ha olvidado de nosotros y por eso no recibimos lo que deseamos. Pero no es así; muchas veces estamos pidiendo lo que queremos, no lo que nos conviene. Dios no nos quiere dar solo lo que queremos, sino lo que verdaderamente nos conviene."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2056,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Es como el niño que llega a casa y dice: "Tengo hambre, mami, sírveme la comida". Aunque la comida aún no está lista, la madre responde: "Aguanta, espera". El niño insiste, pero ella sabe que si le sirve la comida cruda podría enfermar del estómago o provocar una mala digestión. Si espera un poco más, podrá disfrutar de una comida bien preparada. Mi abuelo decía: "El hambre que espera hartura, no es hambre", porque al esperar con ansias, se disfruta más, ya que se valora el esfuerzo y el tiempo de espera.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2063,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Recuerdos de un tiempo mejor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2075,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Recuerda esos tiempos de cuando éramos niños, cuando dormíamos tres o cuatro en la misma cama, usábamos el mismo uniforme porque uno estudiaba en la mañana y el otro en la tarde, compartiendo la misma mochila para llevar los cuadernos. Recuerda cómo inventábamos juegos con gomas de carro o carritos de cartón."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2078,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Para ir al baño, salíamos muchas veces a metros de la casa y veíamos monstruos formados por árboles que solo eran figuras en medio de las plantas. Esperábamos a que se fuera la luz para jugar a la escondida o a otros juegos que inventábamos, como el loco ayudante o el "topao".'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2086,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Cuando la luz regresaba, lo celebramos con un grito eufórico, porque había una señora que nos contaba historias sobre personas que habían muerto en el barrio y salían en los callejones, y creíamos en todas esas historias. Muchas veces no podíamos ni caminar por la noche por miedo a esos cuentos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2093,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Recuerda cuán unidos vivíamos, compartiendo una chupeta o una soda. Todos chupamos de la misma chupeta o bebíamos de la misma botella, alegrándonos con cada sorbo compartido. Nadie se tenía asco, nadie se tenía envidia. Nos vestíamos todos los domingos a las 3 de la tarde para salir a dar una vuelta por el barrio, todos juntos, los niños."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2100,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Compramos mentas y chicles para recorrer el sector, luego volvíamos a casa y jugábamos un poco frente al hogar. Recuerdo esos tiempos, eran tiempos hermosos. Solo había una televisión para toda la colonia, para todo el sector, para todo el barrio. Todos veíamos juntos El Chavo, los muñequitos como Candy, la ranita de metal, José Miel, los Thundercats y los Pitufos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2108,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Veíamos esas historietas donde siempre había un malo y uno bueno que vencía. Aunque la televisión requería que giremos una antena que estaba fuera de la casa, todos la disfrutamos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2116,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Recuperando la esencia de la familia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2122,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Todos sentados allí disfrutamos de esa televisión. Hoy en día, la tecnología nos ha robado eso; cada uno tiene un celular mientras estamos reunidos, y no nos damos cuenta de que no conversamos. No solo las amistades, sino también nuestra familia. ¿Cuánto tiempo ha pasado desde que preparaste una cena para todos sin ser Nochebuena? ¿Cuánto tiempo ha pasado desde que comiste a las 12 del mediodía con tu familia? ¿Cuánto tiempo ha pasado desde que le preguntaste a tus hijos qué pasó en la escuela? Siempre tienen un amiguito imaginario que en realidad son ellos mismos."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2125,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Recuerda que tú también lo eras, por eso necesitamos volver a esos valores del amor. Necesitamos volver a esos tiempos en los que todos nos reunimos para comer juntos y hablar de nuestras vidas, para que nos sintamos como una familia que vive no solo en una casa, sino en un hogar feliz. Recuerda: "Si quieres llegar temprano, ve despacio para disfrutar todo el paisaje que te ofrece la vida".'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2137,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Y así pasamos al mejor punto: la oración. Es el código de oro. Después de haber mencionado cada uno de estos códigos de la vida o secretos de la vida, quiero ofrecerte este secreto o código de oro llamado "la oración".'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2146,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 1937,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 1931,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "capitulo-8",
                            className: "scroll-mt-24 p-6 md:p-8 bg-yellow-900/30 rounded-2xl shadow-lg border border-yellow-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 border-b border-yellow-500/30 pb-4 uppercase tracking-tight",
                                    children: "CAPÍTULO 8: EL CÓDIGO DE ORO"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 2159,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-yellow-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "La oración es un estilo de vida, porque es ahí donde te empoderas del poder de Dios. En la relación con Dios hay poder. Existen dos tipos de relación: una con Dios y otra con tu prójimo. La relación con Dios debe ser prioritaria, y si tienes problemas en tu relación con el prójimo o con Dios, Él no oirá tu oración."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2163,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mt-8 mb-4",
                                            children: "Identidad y autoridad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2172,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Una de las artes más importantes en la oración es tener identidad. Si no tienes identidad, no tienes autoridad; y si no tienes identidad, tu honra no será verdadera. Debes ir primero a la fuente de vida, que es Dios, teniendo identidad y sabiendo que eres para Él y en Él."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2175,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Debemos aprender a orar no como bastardos, no como siervos, sino como hijos. Debemos saber a quién le estamos orando para que nuestra oración no sea vana, ligera o de costumbre. Tenemos que recordar que estamos orando al Padre, nuestra fuente de vida. Cada vez que oramos al Padre, reconocemos que Él es nuestra fuente de vida."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2182,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Mientras más identidad tenemos, más Dios nos usa. La identidad es creer conforme a la experiencia de primera mano, y esa experiencia nos hace orar más. En consecuencia, al orar más, alcanzamos una mayor madurez espiritual y aprendemos a depender de Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2190,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mt-8 mb-4",
                                            children: "El poder de la intercesión"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2198,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Cuando oramos constantemente, llegamos a ser no solo oradores, sino también intercesores. Pero para ser intercesor, es necesario tener una vida de oración con Dios. En",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white",
                                                    children: "Éxodo 32:32"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 2205,
                                                    columnNumber: 9
                                                }, this),
                                                ", cuando Moisés intercede por el pueblo que pecó contra Dios haciendo un becerro de oro, la oración de intercesión de Moisés fue tan poderosa que Dios la tomó en cuenta y cambió de parecer."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2201,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Cuando alcanzamos el nivel de intercesión, nos volvemos verdaderos intercesores y estamos en la dimensión espiritual de",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white",
                                                    children: "Juan 17:11-21"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 2213,
                                                    columnNumber: 9
                                                }, this),
                                                ", donde Jesús nos habló de ser uno en Él y en el Padre, porque Él es nuestro mayor intercesor. Cuando eres un verdadero intercesor, no tienes egoísmo; oras por otros y no por tus propios beneficios. Sacrificas para los demás, y a Dios le agradan los sacrificios para Su gloria."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2210,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mt-8 mb-4",
                                            children: "Reconociendo la soberanía de Dios"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2221,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Para orar efectivamente, es imprescindible conocer nuestra posición y la de Dios en la comunión que se establece entre el Todopoderoso y el simple ser humano. Al estudiar minuciosamente la oración modelo que Jesús nos enseñó, notamos que Cristo la inicia con",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Padre nuestro que estás en los cielos"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                                    lineNumber: 2230,
                                                    columnNumber: 9
                                                }, this),
                                                ". Esta debería ser la actitud de quien se acerca a Dios en oración: reconocer Su absoluta deidad y superioridad."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2224,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Nadie que busque a Dios desde sus propios méritos, sin abdicar las coronas humanas frente al Redentor, podrá ser escuchado por el Rey de reyes y Señor de señores. Dios no es un dios más; es el único verdadero, Aquel que todo lo puede y que nunca ha perdido una batalla. Esa condición lo hace inmediatamente superior al ser humano. De nada sirve ser arrogante al orar y creer que somos iguales a Dios."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2236,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mt-8 mb-4",
                                            children: "Una disciplina insustituible"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2246,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Si entendemos esta realidad claramente, tener una vida de oración será sencillo y se convertirá en algo imprescindible en nuestro diario vivir. Entenderemos que si no vamos a la presencia del Eterno, nuestro día será un fracaso lógico. Es imposible conocer a Dios sin la oración, ya que fue el medio creado con ese propósito. La oración no puede ser sustituida por otra disciplina espiritual. No sirve de nada leer mucha Biblia, estudiar intensamente en un seminario, predicar con coherencia lógica o tener una voz agraciada si todo eso no va acompañado de una devota vida de oración."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2249,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Daniel oraba tres veces al día, y por eso fue capaz de soportar el espíritu de idolatría en el imperio babilónico y tuvo un espíritu superior, al punto de que Dios le revelaba los secretos de los tiempos. Además, debido a su constante comunión con Dios, desempeñó un papel destacado en Babilonia durante tres reinados distintos, sin necesidad de comprometer sus principios y superando obstáculos con fe y seguridad en Jehová."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2261,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Deberíamos preguntarnos si la oración con devoción es realmente parte integral de nuestro día a día, o si solo recurrimos a ella cuando queremos que Dios nos use con poder o cuando tenemos necesidades."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2270,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-center italic text-white/90 text-xl mt-8",
                                            children: '"Seamos verdaderos hijos de Dios. Comuniquemos a nuestro Padre celestial todo lo que queremos hacer, y qué mejor forma de hacerlo que con la oración, para que así habitemos bajo Su presencia. Amén."'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                            lineNumber: 2276,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                                    lineNumber: 2162,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                            lineNumber: 2156,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                    lineNumber: 147,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                lineNumber: 146,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: scrollToTop,
                className: "fixed bottom-8 right-8 p-3 bg-yellow-500 text-black rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 hover:bg-yellow-400 hover:scale-110 focus:outline-none z-40 ".concat(showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"),
                "aria-label": "Back to top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                    size: 24,
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                    lineNumber: 2296,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                lineNumber: 2288,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-neutral-950 text-slate-500 py-12 text-center border-t border-yellow-500/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2024 Mentalidad de Mangosta. Todos los derechos reservados."
                    }, void 0, false, {
                        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                        lineNumber: 2300,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-2",
                        children: "Diseñado para la edificación del cuerpo de Cristo."
                    }, void 0, false, {
                        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                        lineNumber: 2301,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
                lineNumber: 2299,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/books/translations/MentalidadDeMangosta.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, this);
}
_s(MentalidadDeMangostaBook, "aiFZ+SaF9kXH29nKW1FRsxmC8PE=");
_c = MentalidadDeMangostaBook;
var _c;
__turbopack_context__.k.register(_c, "MentalidadDeMangostaBook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/books/translations/MongooseMentality.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MongooseMentalityBook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
;
;
function MongooseMentalityBook() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showScrollTop, setShowScrollTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Chapters data for navigation
    const chapters = [
        {
            id: "acknowledgments",
            title: "Acknowledgments"
        },
        {
            id: "introduction",
            title: "Introduction"
        },
        {
            id: "chapter-1",
            title: "Chapter 1: The Beginning"
        },
        {
            id: "chapter-2",
            title: "Chapter 2: God's Heart"
        },
        {
            id: "chapter-3",
            title: "Chapter 3: Forged in Fire"
        },
        {
            id: "chapter-4",
            title: "Chapter 4: The Secret to Victory"
        },
        {
            id: "chapter-5",
            title: "Chapter 5: No Conquest Without Faith"
        },
        {
            id: "chapter-6",
            title: "Chapter 6: Winner Principles"
        },
        {
            id: "chapter-7",
            title: "Chapter 7: Judases and Peters"
        },
        {
            id: "chapter-8",
            title: "Chapter 8: The Golden Code"
        }
    ];
    // Handle scroll for active section highlighting and back-to-top button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MongooseMentalityBook.useEffect": ()=>{
            const handleScroll = {
                "MongooseMentalityBook.useEffect.handleScroll": ()=>{
                    setShowScrollTop(window.scrollY > 400);
                    const sections = chapters.map({
                        "MongooseMentalityBook.useEffect.handleScroll.sections": (ch)=>document.getElementById(ch.id)
                    }["MongooseMentalityBook.useEffect.handleScroll.sections"]);
                    const scrollPosition = window.scrollY + 200;
                    for(let i = sections.length - 1; i >= 0; i--){
                        const section = sections[i];
                        if (section && section.offsetTop <= scrollPosition) {
                            setActiveSection(chapters[i].id);
                            break;
                        }
                    }
                }
            }["MongooseMentalityBook.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "MongooseMentalityBook.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["MongooseMentalityBook.useEffect"];
        }
    }["MongooseMentalityBook.useEffect"], []);
    const scrollToSection = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMenuOpen(false);
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-slate-100 font-sans leading-relaxed selection:bg-yellow-900 selection:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-black/95 backdrop-blur-md shadow-sm border-b border-yellow-500/20 transition-all duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center h-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3 cursor-pointer group",
                                    onClick: scrollToTop,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-500 p-1.5 rounded-lg text-black transition-transform group-hover:scale-105 shadow-[0_0_10px_rgba(234,179,8,0.3)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                size: 20,
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                lineNumber: 74,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 73,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-lg tracking-tight text-yellow-500 hidden sm:block drop-shadow-sm",
                                            children: "Mongoose Mentality"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 76,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-lg tracking-tight text-yellow-500 sm:hidden",
                                            children: "MdM"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 79,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 70,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden md:flex space-x-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-yellow-400 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Table of Contents"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 16,
                                                        className: "rotate-90 group-hover:text-yellow-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                lineNumber: 87,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 w-64 mt-2 bg-neutral-900 rounded-xl shadow-2xl border border-yellow-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "py-2",
                                                    children: chapters.map((chapter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>scrollToSection(chapter.id),
                                                            className: "block w-full text-left px-4 py-2.5 text-sm transition-colors border-l-2 ".concat(activeSection === chapter.id ? "bg-yellow-500/10 text-yellow-400 border-yellow-500 font-medium" : "text-slate-400 border-transparent hover:bg-neutral-800 hover:text-yellow-200"),
                                                            children: chapter.title
                                                        }, chapter.id, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 12
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                lineNumber: 95,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                        lineNumber: 86,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 85,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    className: "md:hidden p-2 rounded-md text-slate-300 hover:text-yellow-400 hover:bg-neutral-900 transition-colors focus:outline-none",
                                    "aria-label": "Menu",
                                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                        lineNumber: 119,
                                        columnNumber: 22
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                        lineNumber: 119,
                                        columnNumber: 40
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 115,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 68,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                        lineNumber: 67,
                        columnNumber: 5
                    }, this),
                    isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden border-t border-yellow-500/20 bg-neutral-950 absolute w-full shadow-lg max-h-[80vh] overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-2 px-2 space-y-1",
                            children: chapters.map((chapter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection(chapter.id),
                                    className: "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ".concat(activeSection === chapter.id ? "bg-yellow-500/10 text-yellow-400 border-l-4 border-yellow-500" : "text-slate-400 hover:bg-neutral-900 hover:text-yellow-200"),
                                    children: chapter.title
                                }, chapter.id, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 129,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 127,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                        lineNumber: 126,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                lineNumber: 66,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-3xl mx-auto px-4 sm:px-6 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "space-y-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "acknowledgments",
                            className: "scroll-mt-24 animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 pb-2 border-b border-yellow-500/30 inline-block tracking-tight",
                                    children: "ACKNOWLEDGMENTS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 152,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I thank Almighty God for allowing me to write this book. I thank my family, especially my wife and children, for enduring and understanding all the times I have had to sacrifice some of the time I dedicate to them to carry out these projects for God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 156,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I am grateful to the entire congregation, the ministry, the pastors and leaders who have helped me. To my brothers and sisters, who have always been there for me, and to everyone who lent me a hand during each of my journeys."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 162,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I am grateful to each and every person who stood up against me; they were a motivation for me not to stop and to be able to show them that God fulfills his purpose in my life."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 168,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I urge you never to stop, no matter how many rise up, because there is One who sent you, who will never stop."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 173,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 155,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 149,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "introduction",
                            className: "scroll-mt-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 pb-2 border-b border-yellow-500/30 inline-block tracking-tight",
                                    children: "INTRODUCTION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 182,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Sometimes life can be hard, and for many, past wounds prevent them from moving forward. However, there is a way out. We can't always control what happens to us, but we can control how we choose to face it. That, in essence, is what I call the",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-300 font-medium italic",
                                                    children: '"mongoose mentality"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 9
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 186,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "The nature of the mongoose"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 197,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "In the animal kingdom, the mongoose is renowned for its courage, agility, and unwavering determination in the face of challenges. Although a relatively small creature, it is undeterred by the dangers that surround it or the predators it encounters. The mongoose's ability to overcome these risks stems not only from its physical prowess but also from its tenacious spirit. Instead of surrendering to imminent danger, it uses its courage and determination to overcome challenges and fight for its survival."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 200,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Historically, the mongoose was an animal constantly attacked by snakes. It is said that when the snake saw the mongoose, it would devour it; but one day, seeing that the snake was about to devour its young, the mongoose stood up and fought. Although the snake managed to bite it, the mongoose was able to kill it. Researchers discovered that the snake failed to kill the mongoose because it possesses a mutant metabolism. This causes the venom that enters its body to be converted into an antibody that protects it. Often, there are things that want to kill us, but instead of destroying us, they make us stronger."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 210,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "A past transformed by God"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 223,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Throughout my life, I faced situations that made me question my worth, my strength, and even my purpose. From a young age, the abuse I suffered seemed to define who I was and who I would become. However, I discovered that we are not condemned to be prisoners of our past. Although scars may try to define us, God has the power to transform any situation. He can restore our lives, change our story, and give us a new identity."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 226,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "The key to this transformation lies in a life of prayer and intimacy with God. It is through prayer that we break the chains that bind us to the past and move forward with firm steps toward our purpose. Without a deep connection with God, it is difficult to maintain a renewed mindset; but when we surrender our burdens to Him, He strengthens us to face and overcome them."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 235,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Throughout this book, I will share how, despite what I've been through, I managed to change my mindset: I went from being a victim of circumstance to someone who walks with sure steps toward the destiny God has designed for me. I want you to know that this transformation process isn't easy, but it is possible."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 243,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "The power of a decision"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 251,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "The first step toward any real change begins with a decision. When I decided to stop living in the shadow of my past, I began to see my life differently. Just as the mongoose confronts its predator, we too can face our greatest fears, insecurities, and traumas with the strength God gives us."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 254,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "There were times when I thought I couldn't get better, that I was stuck in the valley of despair. But when I started to pray, to renew my mind, and to put my trust in God, everything began to change. The Bible says:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200/90",
                                                    children: '"Do not conform to the pattern of this world, but be transformed by the renewing of your mind."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Romans 12:2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 9
                                                }, this),
                                                "). Although I had no control over what happened to me as a child, I did have control over how I would live from that moment on and how I would use those experiences as motivation to grow with God's help."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 261,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I want you to know that no matter what you've faced in your life, God can change your story. If I was able to change my mindset, heal, and improve, you can too. The transformation we seek begins in our minds and in our relationship with God. Every external change is a reflection of an internal transformation, and that transformation comes when we fully trust in Him."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 279,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 185,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 181,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "chapter-1",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CHAPTER 1: MONGOOSE MENTALITY: THE BEGINNING OF EVERYTHING"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 294,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Throughout our lives, we don't always have the freedom to choose the path we wish to take. Circumstances, often beyond our control, push us toward destinations we would never have chosen for ourselves. We are even forced to accept a reality we never imagined or wanted."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 298,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "But to help you better understand what I mean, let me share a part of my personal story. My testimony reflects how, despite the adversities and circumstances I faced, God's purpose was always present, guiding me through every challenge to transform me and lead me toward the life He designed for me."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 305,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "An origin marked by rejection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 313,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "My father and mother had an affair. He was married and lied to her, saying he was single. When she became pregnant, she took the opportunity to ask him to marry her, but he refused. He already had another family: a wife, two daughters, and another baby on the way. Hurt by this betrayal, when I was just five months old, my mother decided to leave the country, leaving me in the care of people she didn't know."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 316,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I grew up with that family, who cared for me with great love until I was six. At that time, my mother came looking for me again, not because she had changed her mind and wanted to take care of me, but hoping that my father would return to her. However, the family that had raised me didn't want to let me go, since I didn't recognize the woman who had abandoned me. To me, she wasn't my mother; I couldn't see her as such."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 325,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I had seen on television that some mothers sold their children to have their organs harvested, and I feared that my mother had done the same to me. That's why I was so afraid to go with her. When the family who had raised me refused to give me up, she threatened to take them to court and send them to jail. Despite their pain and how much they loved me, they had to let me go."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 334,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "The pain of abuse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 343,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "My mother began to abuse me in cruel ways. She would hit me on the head with pipes, tear the cartilage in my ears by pulling them hard, and submerge my head in tanks of water until I almost drowned. She also forced me to kneel on a wooden platform, while making me hold pieces of cinder block in each hand and a water container balanced on my head. If I ever became weak and made a movement that caused the container to fall, she would beat my back with a copper wire."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 346,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "After a year of abuse, when I was 7 years old, my mother decided to kick me out of the house without allowing me to return to the family that had raised me. They took me to my father, who said he couldn't take care of me because he already had a family, with a wife and three daughters (one of them my age), as if I were responsible for his mistakes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 356,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "When my paternal grandmother learned of the situation, she decided to take me into her home. She began to raise me and teach me life principles, such as studying, being kind to others, and seeking God. However, despite this, I didn't have a normal childhood. While other children played, I had to go out and sell empanadas in the streets, or walk around hawking mangoes, avocados, and lemongrass, depending on the harvest season. I also sold charcoal and collected food in the neighborhood for the pigs my grandmother raised."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 364,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Orphan and helpless"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 376,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Four years later, when I turned nine, everything got worse. My grandmother lost her battle with cancer. After she died, I was left in the care of my uncles, who were alcoholics. My nights became a nightmare. My uncles would come home drunk and wake me up by hitting me with their fists and kicking me. One of them even sexually abused me. The worst part was that no one believed me. My family always thought I was making it up."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 379,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "As parents, we must be very careful when our children talk to us about sensitive topics, especially if it involves abuse. It's important to investigate and observe what they tell us, because if we don't believe them or don't show interest when they tell us something, they will lose trust in us and may stop communicating their problems to us."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 388,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "In the spiritual world, everything has a purpose"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 397,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Reading this part of my story and all that I had to suffer, it's normal to wonder:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-300",
                                                    children: "Where was God?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "In moments of pain and suffering, we question how a good being can allow such evil things to happen. Yet, in the midst of anguish and pain, God is present. We may not perceive Him immediately, but He is there, and I was able to confirm it."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 400,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-l-4 border-yellow-500 pl-6 py-4 my-8 bg-yellow-500/10 italic text-slate-300 rounded-r-lg",
                                            children: [
                                                "One day, when I was about 11 years old, while I was sleeping, I dreamt that I was standing in front of a statue of Jesus Christ and that I was asking him for help. When I looked up, I realized that it wasn't a statue, but that He was there, smiling, and He said to me:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-400",
                                                    children: '"I am not a statue, do not fear, I am with you."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 410,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "At that moment, I heard a loud voice calling me:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "uppercase font-bold text-yellow-500",
                                                    children: '"GARY, WAKE UP!"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 9
                                                }, this),
                                                ". When I opened my eyes, I saw a knife coming toward me. One of my uncles was trying to kill me. I jumped out of bed, running and screaming for help, and the neighbors came to my defense. They were the ones who took care of me after my grandmother died, and I am grateful to God for putting these people in my path during that difficult time. In the midst of it all, God used them to show His faithfulness. They fed me, clothed me, and their support was so important during those times of crisis."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 421,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "The street school"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 436,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "But my story doesn't end there. From then on, I was forced to live on the streets, surrounded by drug dealers, muggers, prostitutes, and people with criminal backgrounds. Surprisingly, they were the ones who provided me with food and a place to sleep. However, they couldn't offer me the stability or happiness they themselves lacked. I remember crying every day, feeling like I had no father or mother, and that no one wished me a happy birthday, a happy New Year, or any other time when others received the affection of their loved ones."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 439,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Anyone who carefully analyzes this part of my story might think that this dark period, which I consider more of a stop on the train of my life, wasn't part of God's plan. And, in reality, it's logical to think that way. However, it's important to understand the miraculous nature of God's word. Every experience we go through, even if not directly caused by Him, can be used by God to show His glory through us. Often, in these difficult times, God manifests Himself in unexpected and powerful ways."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 450,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Restoration and promise"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 461,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I am certain that everything I went through with my mother had a purpose in God's plan. Today, my mother serves Christ, and our relationship has been transformed: she loves me, and I love her. My youngest brother is also a Christian, and now only my other brother remains. However, I trust that God is working in his life. I remember that one day He told me that my whole family would serve Him, and I believed Him. I have seen how that promise is being fulfilled and how God has been glorified in our lives."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 464,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Therefore, I have no doubt that everything I suffered, even though I didn't understand it at the time, was somehow used by God in His divine plan for my benefit. What the enemy thought would destroy me, God reversed and used to bring blessing to my life."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 475,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "But the process wasn't easy. It required humility in His presence and prayer. I want to teach you that if you don't have a prayer life, make the necessary adjustments to begin praying immediately. Prayer is the most effective way, and I would say the only way, to maintain constant communication with God. You cannot receive the revelation of God's purpose for your life without prayer."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 482,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Always seek to listen to God and speak to Him; make Him your friend. This will ensure your victory in the Christian life. Leave the past behind and focus on the glorious future God has in store for you."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 491,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 297,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 291,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "chapter-2",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CHAPTER 2: GOD'S HEART ALSO BEATS FOR THE LOST"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 504,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Sometimes we think that God only blesses and helps those who follow Him and strive to do His will. As Christians, we run the risk of becoming insensitive to the suffering of others, especially when we feel that, being saved, we are fine. However, we must remember that the world is full of people who suffer, and although it may seem hard to believe, these people also matter deeply to God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 508,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "His mercy knows no bounds, as Scripture expresses:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200/90",
                                                    children: '"He makes his sun rise on the righteous and the unrighteous."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Matthew 5:45"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 9
                                                }, this),
                                                "). This means that his love and compassion are not limited to those who faithfully follow him; he is attentive to everyone, even those who do not yet know him or who have strayed. God, in his infinite goodness, abandons no one. On the contrary,",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200/90",
                                                    children: '"Leave the 99 sheep to go after the one that is lost."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Luke 15:4—7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 9
                                                }, this),
                                                ")."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 517,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "That is the same love He showed me. I was that lost sheep, and even though I didn't deserve it, He came to find me, reached me with His grace, and brought me back to the fold."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 539,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "No escape"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 545,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I remember that when they called me because agents from the National Drug Control Directorate (DNCD) were going to raid the neighborhood where I was involved in drug micro-trafficking, I would pack everything up and go to a church to attend a service, praying to God that the DNCD wouldn't find me. But one day, members of that agency carried out a raid at 4:00 in the afternoon, and at that hour there were no churches open, so I had to go to the house of an associate in the criminal enterprise."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 548,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I waited there, and at 7:00 p.m. they called me to say that the DNCD was no longer in the area, and that I should go to the location because there were many buyers waiting. I asked my contact, and he said there were no informants or suspicious vehicles in the area. I went down with 45 packets of cocaine, 5 of marijuana, and 7 rocks of crack to sell. I also had cocaine for myself and my people, intending to use it all night."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 559,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "As I crossed the avenue, before reaching the point, four large DNCD vehicles pulled up, carrying about 40 hooded police officers armed with M-16 rifles. They had prisoners in the vans. Seeing this, I stopped in front of the second vehicle. I knew I had no escape. At that moment, I heard a loud voice say to me:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 568,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Run!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 575,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I wondered where I should run. Then I remembered that when I was in trouble, I cried out to God. Time seemed to stand still. I looked up at the sky, spoke to God aloud, and said:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 578,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-neutral-800/50 p-4 rounded-lg italic text-slate-300",
                                            children: "—Lord, the Christians tell me that I will serve you by preaching your word, that you have shown in visions that I would preach in stadiums, and that you will be glorified through me with healing and deliverance. If that is true, I ask you to help me get out of this predicament. I would seek you, but out here, not in jail. If they catch me with all these drugs, when they find out who I am and review my records, they will sentence me to 20 to 30 years. Please, help me."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 584,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "A sign from heaven"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 595,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "At that moment, the sky flashed with a red light."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 598,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "—",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: "Lord, I'm not asking for signs, I'm asking for help"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "—I said desperately—.",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: "Please get me out of here."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 599,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I knew that lightning flash had been a sign from God to let me know He was listening to me, because it wasn't even cloudy. So I kept talking to Him and said:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 609,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—God, if you get me out of this, I will serve you with my life; I will serve you full time."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 614,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "At that moment, the sky flashed with lightning for the second time. Then, out of nowhere, a child of about two or three years old approached, tugged at my pants, and said:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 618,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 font-bold text-yellow-400",
                                            children: "—Let's go with God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 623,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I looked at the child and said:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 626,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "—My son, get out of here because there are a lot of drugs and firearms; a shootout could happen at any moment."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 627,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I gently pushed him away from me, but the boy clung to my pants and repeated:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 631,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 font-bold text-yellow-400",
                                            children: "—Let's go with God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 635,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I looked up at the sky again and said:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 638,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Lord, I haven't asked you for signs, but now I am going to ask you for one: give me a sign and I will leave."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 639,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Lightning flashed in the sky for the third time. Then I picked up the child and started walking. I heard footsteps behind me, tried to turn my face, and the child held my face and said:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 643,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 font-bold text-yellow-400",
                                            children: "—Don't turn around, they're watching you, let's go with God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 648,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'At that moment I raised my hands to heaven and began to worship God as I walked, until I reached my house. I put the child down in front of my house and said to him: "I\'m going to give you a potato chip and a soda when I see you again." He just smiled and left.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 651,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "A pact of loyalty"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 659,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I went to church with my wife to accept Christ. We went to the front and confessed Christ. I remember kneeling at the altar to pray and saying:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 662,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—Lord, I have accepted you, but I have never seen a Christian stealing or selling drugs. How am I going to support myself with a wife?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 667,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I heard a voice that told me:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 672,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center font-bold text-2xl text-yellow-400 italic font-serif my-4",
                                            children: '"Be faithful to me, take care of my things, and I will take care of yours."'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 673,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "In 18 years of drug use, I had never heard voices, but that day I heard that voice and I knew it was the voice of God. Loud, clear, and unmistakable."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 677,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Does God listen to the sinner?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 683,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I know this part of my story may be controversial for many, because there's a notion that God doesn't hear the sinner's prayer. However, it's worth asking to what extent this is true, since we all begin in a sinful state, and the Lord, in His infinite mercy, has heard our cries."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 686,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Although I do not want to make a doctrine of it, since the spiritual guidelines are already defined, I insist that a sincere prayer from a sinner to a just and kind God, asking for help and showing a willingness to serve Him with all one's heart, will not leave our divine Redeemer indifferent."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 693,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "We see this clearly in",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Luke 18:13-14"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 9
                                                }, this),
                                                ". In this passage, a tax collector acknowledges his sins and disobedience before God, as well as his lack of merit to find forgiveness. In verse 14, Jesus Christ himself says that this man went home justified, while in the preceding verses, the Pharisee boasts of fasting twice a week and fulfilling the entire law, forgetting that before the Almighty no one can be justified except by His grace. It is from this recognition of our sins that we must establish a course of life in accordance with this precious gospel."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 700,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I understand that if God hadn't heard me and rescued me when the DNCD almost arrested me, I don't know where I'd be today. But something happened: I placed all my faith and trust in the Lord's mercy, and I was blessed when my cry was heard and answered. That's why today I serve Him with immense joy, facing every obstacle with faith and courage. If God did it once, I have complete certainty that He will do it again, and His glory will be even greater."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 715,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Make this truth a firm conviction in your life: remain constant in prayer, with faith, believing that nothing is impossible for our Lord and Savior Jesus Christ. Healing, improvement, and transformation of your life are also possible for you. The transformation we long for begins in our minds and in our relationship with God. Every external change is a reflection of an internal transformation, and that transformation comes when we fully trust in Him."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 725,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 507,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 501,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "chapter-3",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CHAPTER 3: FORGED IN FIRE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 742,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "It's very common that, when you decide to follow Christ, you'll face a series of spiritual attacks. This happens because the enemy, seeing that you've been freed by the power of Jesus and no longer has control over your life, seeks every possible way to regain his influence. He begins to attack you in different areas: you may experience lack, doubt, illness, and other difficulties that seem to arise out of nowhere. His purpose is to make you believe you were better off before you knew Christ, using lies and deception to sow doubt and weaken your faith."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 746,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I went through a similar phase too. After surrendering my life to Christ, while I was praying one day, God spoke to me clearly and asked me to get rid of everything I owned: clothes, furniture, and other household belongings. All of it came from illicit activities, and obeying His voice, I threw it all away. I was left with literally nothing."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 757,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "The price of obedience"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 766,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "My wife and I started sleeping at the church because we had nowhere else to go. Every day we went out to preach on street corners, in drug dens, in hospitals, orphanages, and prisons. Sometimes we got something to eat; sometimes we didn't. After preaching, we attended church services and then stayed there to sleep."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 769,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "One day, the pastor of the church approached me and told me we had to find another place to sleep, that we couldn't continue staying at the church with the other members. People in the neighborhood were already talking about what God had done in our lives, in my wife's and mine. He knew that as long as we were there, there wouldn't be any robberies in the church or the surrounding area."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 777,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "When the pastor asked us to leave, I explained our situation. We had nowhere to go. His response was direct:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 786,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—If you have nowhere to sleep, find another church where they can help you, where they'll let you stay. Go and gather at that place."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 790,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "At that moment, we felt devastated. We cried with helplessness and suffered greatly. We had no choice; we couldn't sleep on the street. The people in the neighborhood knew me well; they knew everything I had been through before coming to Christ, what my life had been like in the world. Now that I was on God's path, they couldn't bear to see me in that situation, sleeping on the street. They would question me about love and compassion in the church, and that would not only be humiliating but could also damage my witness to the kingdom of God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 795,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Desperate, I made a decision. My wife and I started sleeping in the church's backyard, a place where no one could see us. We waited until everyone had gone to sleep and then spread a sheet on the ground. The garbage dump was right in front of us, and at night it would fill with cockroaches and centipedes. We slept poorly, always with one eye open, watching our surroundings in case something happened. And if it rained, things got worse. We had to take refuge in an outhouse in the yard and wait there until the rain stopped."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 806,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "While we were in the latrine, I sat on the toilet and my wife snuggled into my lap to protect us from the cold and damp. It was a truly uncomfortable situation: cockroaches were falling from the ceiling on us as we tried to stay as safe as possible."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 817,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Despite the hardships, we maintained a prayer routine from 5 to 7 in the morning. During those hours, our struggle was not only against physical difficulties, but also a spiritual battle. We fervently proclaimed the kingdom of God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 823,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "God is not absent in our difficulty"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 830,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "You probably know the story of Shadrach, Meshach, and Abednego, three young men whose faith in God led them to face a very difficult test. When they refused to worship the golden statue that King Nebuchadnezzar had erected, they were thrown into a blazing furnace. But something amazing happened: the king not only saw the three young men in the furnace, but he also noticed a fourth figure with them,",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"as a son of the gods"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 841,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Daniel 3:25"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 9
                                                }, this),
                                                "). That figure was Jesus himself, accompanying them in the midst of their trial."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 833,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "This detail is crucial. Sometimes, God will not deliver us from difficulties, but will enter into them with us. In",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Isaiah 43:2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 9
                                                }, this),
                                                ", God promises us:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you; when you walk through the fire, you will not be burned; the flames will not set you ablaze."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "Instead of eliminating suffering, God joins us in the midst of it, offering us His presence and strength."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 851,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "He assures us that we are not alone in our struggles. Even though we face challenges and trials, God's presence transforms our difficulties into blessings and spiritual growth. My wife and I are living witnesses to this. Just as gold is purified in fire, we are strengthened through trials. The key is not to run from the process, but to embrace it, knowing that every step we take, every difficult moment we go through, is shaping us into the character of a true victor."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 867,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Today, our lives have changed radically. Every week we visit public prisons across the country, go to hospitals and orphanages, preach Christ in the streets, and pastor the church "The Rescued Rescuing." This ministry has sparked a great revival in the Los Ríos region of the capital city.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 877,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We have witnessed over a thousand prisoners accept Christ. In our evangelistic campaigns, we have seen criminals surrender knives, daggers, and firearms as they give themselves to Christ. They have seen the change in my life and trust that God can do the same in theirs."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 884,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Transforming pain into purpose"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 892,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "The difficulties they face are not a reason to cry, but to grow. The process is not a place for lamenting, but for training."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 895,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "My wife and I faced moments of deep sorrow and discouragement, but instead of remaining stuck in sadness, we chose to take our suffering to the cross of Christ. We transformed our pain into an opportunity to glorify God and speak of His greatness. We learned to recognize His purpose in our lives as a couple chosen for His glory."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 899,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Remaining silent and inactive only fuels spiritual laziness, which is truly detrimental to emotional and spiritual health. We often justify our passivity with excuses based on our circumstances, but we cannot allow those excuses to hold us back. Moses was a stutterer, but that didn't prevent him from leading the people of Israel. Gideon felt insignificant and fearful, but God used him to deliver Israel from the Midianites. Jeremiah was young and felt he lacked the necessary experience, but God called him to be a powerful prophet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 907,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Spiritual mediocrity arises when we choose comfort over courage, and this can lead to stagnation in our growth and well-being in faith."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 918,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "When we face difficult situations, like the ones I experienced, it's natural to feel the urge to give up and abandon everything, filling ourselves with resentment toward those who should be helping us. It's easy to waver in our faith and succumb to despair. But that attitude belongs to those who are called, but not chosen. Those who have truly been selected by God and have the courage to be brave, put on the armor of Christ and go out onto the battlefield with faith in God as their guide."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 923,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I won't deny that discouraging thoughts arose. This is a very common trick of the enemy in modern times. In moments of weakness, I compared my current life, filled with financial difficulties, with my previous life, when money came in questionable ways. But since Christ rescued me, He has sealed me for His glory. That transformation taught me that, even though the path may be difficult, God's purpose in our lives is much greater than any challenge we may face."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 933,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Some people understand the value of prudence and the power of silence. While Christians should avoid speaking rashly, there are also times when it is vital to pray and, at the same time, speak boldly about who Jesus is and what he has done in our lives. If I had remained silent during my difficulties and not shared my faith, I cannot imagine where I would be today; I probably wouldn't have the ministry God has entrusted to me."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 943,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Thanks to His eternal mercy, my wife and I have been able to remain steadfast, even in adversity, proclaiming Christ and strengthening our prayer. Only in this way did we find the direction we needed."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 952,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-900/20 p-6 rounded-lg my-8 border border-yellow-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "italic font-medium text-yellow-100 mb-4 text-center",
                                                    children: '"I waited patiently for the Lord; he turned to me and heard my cry. He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand. He put a new song in my mouth, a hymn of praise to our God. Many will see and fear the Lord and put their trust in him."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-right font-bold text-yellow-400",
                                                    children: "—Psalm 40:1-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 968,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 959,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I cannot remain silent or live in anonymity, dedicating myself only to praying in private without telling others about the God who saved me. I will shout it everywhere! Christ saves! Christ lives!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 973,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 745,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 739,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "chapter-4",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CHAPTER 4: THE SECRET TO VICTORY"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 986,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Everyone longs for victory, success, growth, and the blessings that come with it. However, few are willing to pay the price these achievements demand. Many want to grow, but when faced with the process, they retreat out of fear. Others yearn for blessings but run from trials. The truth is, victory is not the fruit of comfort, but of sacrifice, perseverance, and above all, absolute dependence on God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 990,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Those who truly achieve victory are not those who sit and cry in the midst of the process, beginning to doubt God's goodness, but those who understand that every trial is preparation, and every process is an opportunity to grow in faith, character, and spiritual maturity. A very famous saying goes that",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"God gives his toughest battles to his toughest soldiers"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1005,
                                                    columnNumber: 9
                                                }, this),
                                                ", but almost no one mentions that the soldier who wins the battle is exalted and decorated... not for having avoided the battlefield, but for having resisted to the end, with courage and perseverance."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 999,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "How can someone who has never faced a battle be declared victorious? Winners are not those who have never faced difficulties, but those who refused to give up. They are people who, despite setbacks, falls, and adversity, persevered."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1013,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Next, I will share two fundamental principles for achieving victory:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Never stop praying"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "It's important to recognize that we have sometimes adopted mistaken ideas about what it means to pray. Often, we've fallen into routines or practices that don't lead to true communion with God. We might think we're in a holy place simply because we've set aside time to pray, but that doesn't guarantee we're actually entering His presence. It's vital to learn to pray correctly, not out of habit, but because prayer is the only thing that can truly strengthen our spiritual life."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1027,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Prayer is the means by which we deepen our communion with God, giving us the assurance that His promises will be fulfilled in our lives. However, if we pray without acknowledging who God is and without the reverence He deserves, we are not genuinely entering His presence."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Sometimes our prayers are brief, lasting 10, 30 minutes, or perhaps an hour, but if we pray with the constancy and depth that Jesus did, our communication with God would become more natural and powerful."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Jesus, though unsinful, spent entire nights in prayer, as the Gospel of Luke recounts. He would go up the mountain and pray for hours, then come down and perform miracles, fulfilling God's will on earth. If He, being the Son of God, considered prayer a priority, how much more should we, who are imperfect, follow His example. Let us not forget that prayer requires sacrifice and perseverance, something we often avoid because we prefer to rely on our own self-sufficiency rather than seek God's guidance."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1050,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "The disciples noticed that every time Jesus prayed, his requests were granted, which led them to want to learn to pray with the same intensity and effectiveness. Jesus taught them that prayer should be an intimate communion with God, a sincere dialogue in the secret place where the Father reveals himself and speaks to our hearts."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1060,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Through prayer, we receive power and direction for our lives. Jesus emphasized, as recorded in Matthew, that we should pray in secret, not seeking the approval of others, but a genuine relationship with God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1068,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "God doesn't focus so much on the physical place where we pray, but rather on our disposition and communion with Him. We cannot fall into the trap of reducing prayer to a formula or method. No matter how many books we read, prayer cannot be limited to human techniques. It is a spiritual pattern that must be lived out through experience and relationship with God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1074,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Jesus didn't give us a rigid method for praying, but a model to be lived with sincerity and authenticity. Prayer isn't mechanical; it's a space where God reveals himself, speaks to us, and transforms us. As he says",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Mark 11:24"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1087,
                                                    columnNumber: 9
                                                }, this),
                                                ":",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1091,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "But for that to become a reality, we must pray from a place of genuine communion with the Father, not simply repeating words, but aligning our hearts with His will."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1082,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "It's not so much about the time we spend praying or where we do it, but about the disposition with which we approach God. He seeks a living and authentic relationship with us, and that relationship is key to receiving what we have asked for, according to His will and purpose."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1099,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Cling to God's will"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1107,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Many times we find ourselves pursuing our own desires and plans, without realizing that God has a different, much bigger and better purpose for our lives."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1110,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                'In the model prayer that Jesus taught us, He does not say "Do what I want", but instead asked:',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Thy will be done, on earth as it is in heaven."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Matthew 6:10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1122,
                                                    columnNumber: 9
                                                }, this),
                                                "). This is not just a simple phrase, but a declaration of trust and total surrender to the Father's plans, acknowledging that His will is good, pleasing, and perfect."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1115,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "As children of God, we must learn to cling to His will, understanding that His ways and thoughts are higher than our own (",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Isaiah 55:8-9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1133,
                                                    columnNumber: 9
                                                }, this),
                                                "). Although we sometimes don't understand the reasons behind certain situations, we must trust that His plan will always lead us to a more blessed destination. Often, what we ask for or long for is limited by our human perspective, but God, who sees the whole picture, has the best for us, even when it doesn't align with what we initially desired."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1129,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Clinging to God's will means letting go of our own desires, submitting our plans to His control, and trusting that He has a purpose for every situation. While it may not always be easy to accept that things don't go as planned, we must remember that what He has in store for us is always greater than anything we can imagine or ask for."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1143,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "When Jesus approaches John the Baptist in",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Matthew 3:13-17"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1153,
                                                    columnNumber: 9
                                                }, this),
                                                ", John had already preached about Him, stating that after him would come someone who existed before him. For John, the greatest blessing he could experience would be to be baptized by the One he spoke of, Jesus, for he knew that He was the Son of God. However, he did not know that there would be an even greater blessing than being baptized by Him."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                'By fulfilling the Father\'s will and baptizing Jesus, instead of being baptized by Him, John witnessed one of the greatest displays of glory recorded in the New Testament, and perhaps even the entire Bible. Only John was able to see the "three greats" in a single manifestation: he saw the Son when he immersed him in the Jordan, he saw the Holy Spirit descend in the form of a dove upon the Son, and he heard the Father open the heavens and declare:',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"This is my beloved Son, in whom I am well pleased."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1172,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "John the Baptist witnessed the simultaneous presence of the Father, the Son, and the Holy Spirit in a glorious manifestation. Therefore, we should always pray that the Father's will be done, not our own. We ask for things that, in our opinion, are great, but God has even greater blessings prepared for our lives."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1176,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic my-6",
                                            children: [
                                                '"Likewise the Spirit helps us in our weakness, for we do not know how to pray as we ought, but the Spirit himself intercedes for us with groanings too deep for words." (',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold not-italic",
                                                    children: "Romans 8:26"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1188,
                                                    columnNumber: 9
                                                }, this),
                                                ")."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1184,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "The Bible is clear in stating that we don't know what is truly best for us, and therefore, we cannot ask correctly unless the Holy Spirit puts the right words in our mouths. Thus, as believers in Christ, it is crucial not to cling to material things or positions, but to walk with the mental flexibility that, at any moment, God will move us according to His higher plan. Setting goals is not a sin; in fact, it is a very good and right thing to do, but we must understand that the Lord's ways are higher than our own, and His thoughts are far more perfect."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1193,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "If you have been praying for years for something in particular and suddenly discover that God's will is different, simply give thanks and firmly follow the path He sets.",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Proverbs 14:12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1208,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "teaches us that",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"There is a path that seems right to a man, but in the end it leads to death."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1212,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                'It is important to reflect on this biblical truth when dreaming about what we desire for our lives, because clinging to ideals without consulting God\'s will will only lead us down a "path of death".'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1204,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We must allow the Holy Spirit to minister to our spirit regarding God's purpose for us, molding our souls to be submissive to His heavenly designs, even though they don't always bring us happiness. Joy, however, will always be present."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1221,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 989,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 983,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "chapter-5",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CHAPTER 5: WITHOUT FAITH THERE IS NO CONQUEST"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 1234,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "The story of the fall of the walls of Jericho demonstrates how unwavering faith is essential to achieving seemingly impossible victories. In the book of",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Joshua 6:1-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1242,
                                                    columnNumber: 9
                                                }, this),
                                                ", God gave an instruction that, humanly speaking, made no sense: to circle the city for six days in silence, and on the seventh day to circle it seven times, blow the trumpets and cry out for the walls of Jericho to fall."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1238,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Perhaps, for the Israelite army, accustomed to using their weapons in every battle, this strategy may have seemed strange; however, they obeyed with faith, and it was precisely that faith in the word of God that allowed them to conquer the city in a miraculous way."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1250,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "How many victories have you lost because of your lack of faith? How many times have you let doubt prevent you from moving toward the victory God has already promised? Faith is the bridge that will take you to a higher level of intimacy with God, where you can achieve the victories you thought were impossible."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1257,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "The power of believing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1265,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                'Many times we pray without faith, and without faith it is impossible for a miracle to happen. When Jesus performed miracles, he approached people and asked them if they believed. They answered him, saying: "Yes, I believe so". Then Jesus said to them:',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-300 font-semibold",
                                                    children: '"Your faith has saved you"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1274,
                                                    columnNumber: 9
                                                }, this),
                                                ". And instantly they received the miracle. Likewise, if we believe, God will do greater, greater, and more powerful things in our lives if we trust in Him."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1268,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I remember one day, at an evangelistic campaign, God was glorified in healing and deliverance from the very first day. On the second day, a mother approached me with her 11-year-old daughter and said:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1281,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: '"If you pray for her, she will heal. My daughter believes it."'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1287,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "I replied:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1290,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—My dear, remember that it is not I who heals, but the one who sent me, who is God. Do you believe that He will heal you?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1291,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "And the girl replied:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1295,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—My mother was sick, my father too, and when you prayed for him yesterday, he was healed."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1296,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "The girl continued:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1300,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pl-4 border-l-2 border-yellow-500/50 text-yellow-200 italic",
                                            children: "—I suffer from epilepsy; every day I wake up at 1:30 in the morning with seizures. If you pray for me, I know God will heal me."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1301,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "I asked her:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: "—Do you believe God will heal you?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1308,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "—and she answered me:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-yellow-400",
                                                    children: "—Yes."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1312,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1306,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Then I said to her:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-yellow-400",
                                                    children: "—Your faith has healed you."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1316,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "The next day, her mother approached me and testified that her daughter had woken up at 4:00 a.m. The mother was awake, watching her, waiting to see if she would have the epileptic seizure that always plagued her at that time. The girl asked her what she was doing awake, since the pastor who had prayed for her said that God had healed her. Then, the daughter told her to go back to sleep, assuring her that she was already healed."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Certainty in the invisible"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1330,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-900/20 p-6 rounded-lg my-6 border border-yellow-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "italic font-medium text-yellow-100 mb-4",
                                                    children: '"But without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1334,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-right font-bold text-yellow-400",
                                                    children: "—Hebrews 11:6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1339,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1333,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "In",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Hebrews 11:1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1345,
                                                    columnNumber: 9
                                                }, this),
                                                ", The best and clearest definition of faith is given here. It says that faith is the certainty and absolute assurance of what is hoped for, and the conviction and vision of what has not yet been seen. This implies that when we pray to God, we await the miracle without doubting, understanding that God's will for our lives is good."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1343,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "When I pray, even though I don't physically see what I'm asking for, in the spiritual realm I know it's a reality. If we take verse 6 and combine it with verse 1, we see that God is pleased with those who don't doubt, with those who believe without seeing. Consequently, He will open the heavens in their favor."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1355,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "To pray with faith, one must step outside the natural realm and immerse oneself in the spiritual, forgetting human limitations and trusting in God's inexhaustible resources. It is essential to clarify what God's will means, since those who pray with faith accept His will, understanding that it is what is best for the one who asks. Faith breaks chains, but it does not attempt to override the designs of the Holy Spirit."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1362,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Faith does not confuse God's will with human emotions. Rather, it is a force that empowers us to bring heaven to earth. The apostle James emphasizes the connection between faith and works, for faith without works is worthless. Therefore, I invite you to strengthen your faith: yes, your conviction in God and the assurance that He guides you in all your ways. Furthermore, I urge you to discipline yourself in prayer, in constant intimacy with the Lord. Only in this way will you see His will fulfilled in your life."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1371,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Faith without works is dead faith"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1383,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "It's easy to say we have faith in God, that we trust in His power and His promises, but the reality is that faith isn't just a matter of words or thoughts. True faith is demonstrated through actions. The apostle James expresses it this way:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"So also faith by itself, if it is not accompanied by works, is dead."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1391,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "James 2:17"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1396,
                                                    columnNumber: 9
                                                }, this),
                                                "). A faith without works is sterile, empty."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1386,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "A dead faith produces no miracles. The reason you ask and don't receive is because your faith lacks action. It's not just about asking; it's about moving forward toward what you asked for and acting as if you've already received it."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1401,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "When Jesus healed people, he didn't just tell them to have faith; he also called them to action. To many he said:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Get up, take up your mat and walk."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1410,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "John 5:8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1413,
                                                    columnNumber: 10
                                                }, this),
                                                "). He was not only declaring health, but he was demanding a response, an action."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1407,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "True faith is manifested when we not only say we believe, but when we act as if what we ask for is already a reality. It is the kind of faith that doesn't wait to see before acting, but moves forward, trusting that God has already answered."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1417,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "It's easy to say you have faith, but how do you demonstrate it? Are you moving in the direction of what you believe God will do in your life? The faith that pleases God is that which goes beyond prayer and becomes action, obedience, and complete trust."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1423,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "An essential request"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1430,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "In",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Luke 17:5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1435,
                                                    columnNumber: 9
                                                }, this),
                                                ", We see a key moment in the lives of the disciples: \"The apostles said to the Lord: Increase our faith.\" This request reveals a profound understanding of the heart of Jesus' ministry. Observing the miracles, teachings, and life of their Master, the disciples didn't ask for more power, more fame, or even more spiritual gifts. They asked the Master to increase their faith, because they understood that faith is the foundation upon which everything else is built."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1433,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "It's interesting that, faced with the grandeur of what they saw, they didn't ask for extraordinary abilities or recognition. They didn't seek power to perform the same miracles Jesus did, but rather they wanted the most essential thing: faith. They knew that everything Jesus accomplished would only be possible through it."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1445,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "As Jesus said on another occasion:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: "\"If you have faith as small as a mustard seed, you can say to this mountain, 'Move from here to there,' and it will move; nothing will be impossible for you.\""
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1455,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "(",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-yellow-400 font-bold",
                                                    children: "Matthew 17:20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1461,
                                                    columnNumber: 9
                                                }, this),
                                                "). With faith, anything is possible: miracles, transformation, and a life guided by God's will. It's not just a superficial belief; it's a conviction that drives you to act, to trust fully in what God will do, even if you don't yet see it."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1453,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Verses about faith"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1470,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: [
                                                {
                                                    ref: "Hebrews 11:1",
                                                    text: "Faith, then, is the assurance of things hoped for, the conviction of things not seen."
                                                },
                                                {
                                                    ref: "Matthew 21:22",
                                                    text: "And whatever you ask for in prayer, believing, you will receive."
                                                },
                                                {
                                                    ref: "Mark 9:23",
                                                    text: "Jesus said to him, “If you can believe, all things are possible to him who believes.”"
                                                },
                                                {
                                                    ref: "Romans 10:17",
                                                    text: "So then faith comes by hearing, and hearing by the word of God."
                                                },
                                                {
                                                    ref: "2 Corinthians 5:7",
                                                    text: "For we walk by faith, not by sight."
                                                },
                                                {
                                                    ref: "Ephesians 2:8",
                                                    text: "For by grace you have been saved through faith, and this is not from yourselves; it is the gift of God."
                                                },
                                                {
                                                    ref: "James 1:6",
                                                    text: "But let him ask in faith, with no doubting, for he who doubts is like a wave of the sea driven and tossed by the wind."
                                                },
                                                {
                                                    ref: "Matthew 17:20",
                                                    text: "Jesus said to them, “Because of your little faith. For truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, ‘Move from here to there,’ and it will move. Nothing will be impossible for you.”"
                                                }
                                            ].map((verse, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex flex-col sm:flex-row gap-2 sm:gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-lg shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-yellow-400 whitespace-nowrap",
                                                            children: [
                                                                verse.ref,
                                                                " —"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1511,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-300 italic",
                                                            children: verse.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1514,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1508,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1473,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 1237,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 1231,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "chapter-6",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CHAPTER 6: PRINCIPLES THAT EVERY WINNER MUST APPLY"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 1525,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "When you notice the absence of God's voice in your life, it's not that He has stopped speaking to you because He doesn't want to as a Father. On the contrary, His greatest desire is to communicate daily with His creation. However, He often doesn't do so because, when He speaks, His primary purpose is to give us guidance, and human beings are generally unwilling to follow it."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1529,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Most people don't like to obey what God asks, and for this reason, He prefers to stop speaking to you, since it would be pointless if we don't follow His will. If God speaks to you constantly and you don't obey, you would be sinning at every moment, because disobedience is sin. Therefore, in His wisdom and love, God prefers to stop speaking to you rather than provoke you to sin through disobedience."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1537,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Act out of conviction, not feelings"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1548,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "You shouldn't tie your feelings or emotions to your calling, because that could cause you to miss out on the blessings God has for your life. We often associate our emotions with our purpose, which can lead us astray from God's plan. God loved the world so much that He gave His only Son, the Beloved of heaven. If He had tied His feelings or emotions to that act of love, perhaps He wouldn't have allowed Jesus to give His life for us. He wouldn't have let His Son die on the cross of Calvary."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1551,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: [
                                                        "That's why you often find yourself crying in a corner, feeling alone, distressed, or believing that God has abandoned you. But God isn't looking for someone who lives only on feelings; He's looking for warriors who will rise up in the midst of their tears, their brokenness, and their battles, and say:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: '"I can, I\'m going to fight this battle because God has chosen me for this."'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1568,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1562,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "When someone is called, they can decide whether to go or not, because they have only heard one voice. But when someone is chosen, they have no alternative; they have been singled out for a clear purpose. Like when we were children and our parents called us and our siblings; perhaps no one answered, and then they sent someone else to do the job. But when our father called our name directly, there was no choice: we had to do what was assigned to us."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1573,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "The same is true with God. Perhaps He has not only called you, but chosen you for a mission that only you can fulfill."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1583,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Sometimes you ask yourself:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: "—Why me, Lord?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1589,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "The answer is that if this process had been given to someone else, perhaps that person would have given up by now. But you, even though you've been through a lot, have persevered. God chose you, and that's why you need to finish the assignment you were given, in order to receive your blessings."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1587,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1547,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Don't be discouraged by criticism"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1599,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: 'There will always be people who criticize the success of others because, deep down, they know they\'ll never achieve it. That\'s why, when you accomplish something, many will try to minimize your achievements, saying things like: "He succeeded because he had help", "Anyone can own that vehicle", "Anyone can get that position in the company", or "That leadership is nothing special". But those criticisms stem from the fact that they themselves have not achieved what you have, and that is why they do not value what you have.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1602,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "This happens even within families. Some will say: \"Anyone can have a stable family\", but they don't see what lies behind that stability. They don't understand that before having a harmonious marriage, you had to shape your partner, go through difficult times, and often cry in silence to get to where you are today."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1613,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "To achieve that position at your company, you had to endure difficult situations: embarrassing moments from your boss, confrontations, uncomfortable situations that were all part of your growth. Many times, it wasn't because you deserved it, but because he was the boss, and you learned to handle those situations."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1621,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "It's easy to criticize from a place of comfort, once you've already achieved something. People who criticize do so because they're unwilling to go through what you've gone through. They prefer to remain seated on the sidelines, criticizing others instead of standing up and applauding their success, hoping that one day they too will achieve it."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1629,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1598,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Give without restrictions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1640,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "It is essential to learn to obey God's voice when He speaks to us about giving, for true blessing lies in it. It's not just about giving what is comfortable for us, but about offering what He specifically asks of us. It's not enough to offer an apology when God calls you to sincere forgiveness. It's not about handing over an old shirt when He asks you to buy a new one for your brother. Nor is it enough to give what you have in your pockets when He is calling you to offer what you have in your bank account."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1643,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: [
                                                        "For many, giving can be a challenge, but letting go is one of the purest ways to demonstrate faith, as the Bible teaches us that God",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: '"loves a cheerful giver"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1658,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "(",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-yellow-400 font-bold",
                                                            children: "2 Corinthians 9:7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1662,
                                                            columnNumber: 10
                                                        }, this),
                                                        "). And we do not give with the purpose of receiving something in return; we give with the confidence that God is and always will be our sustenance."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1654,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "He who gives without expecting anything in return is truly free, but he who gives expecting something becomes a slave to that desire. He remains bound to what he expects, because his motivation is not the act of giving, but the reward he longs to obtain. Many times, people offer you something or help you hoping that, at some point, you will return the favor. However, anyone who gives with the expectation of receiving becomes a prisoner of that which they expect."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1669,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "When you give in that way, you find yourself waiting for gratitude that may never come. You become tied to people who, in many cases, won't value the effort you made for them. Therefore, when you give or help, do it without expecting anything in return, so you don't become a slave to those who will never appreciate what you did. If you live waiting for recognition, you could get trapped in an endless wait, while for them, that act that cost you so much meant nothing, or they might even come to believe that anyone could have done it."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1679,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "However, in times of need, when they were alone, it was your courage that made all the difference. You were the one who stepped in, no matter how deep the problem was. That's why, when you decide to give or help, do it from the heart, without expecting anything in return. Only then will you be truly free, without depending on the gratitude or approval of others."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1691,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1639,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Speak the truth, but in love"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1703,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: 'People don\'t like it when you\'re hypocritical, but they also don\'t like it when you tell them the truth directly. Often, human beings reject hypocrisy and lies, but at the same time, they feel uncomfortable when told the truth. A common example is when your partner asks you: "How do I look?". If you answer: "I don\'t like how those clothes look on you" or "That garment makes you look heavier", she feels hurt. However, if you avoid being honest and soften your opinion, you\'re accused of being a hypocrite and asked to be sincere.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1706,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "This dilemma arises because, although people say they want the truth, they are often unprepared to receive it without discomfort. However, it's important to point out that telling the truth doesn't mean offending. Some believe that being brutally honest and offending others is a way of being sincere, but that's not the case. Being honest doesn't imply hurting others."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1717,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Therefore, we must be careful how we tell the truth. The truth has the power to confront, but it shouldn't offend. It's possible to be honest without hurting others' feelings by using the truth wisely and respectfully."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1726,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1702,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Be wise when seeking advice"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1735,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Not everyone should be asked for advice, nor should you take it from just anyone. I repeat: not everyone is qualified to give you advice, nor do they all deserve to have their opinion taken seriously. Often, people advise you from their own perspective, and their situation may have nothing to do with yours. Others give opinions based on what they've heard or what little they know, not on the reality of the situation."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1738,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: [
                                                        "This is where the importance of discernment comes in—the ability to wisely judge which advice is helpful and which is not. The Bible calls us to be prudent and to ask for discernment in order to make right decisions.",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-yellow-400 font-bold",
                                                            children: "Proverbs 3:21"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1752,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "tells us:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: '"My son, keep your judgment and discernment, and do not lose sight of prudence."'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1756,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "It is essential to ask God for wisdom to distinguish between an opinion that builds up and one that destroys."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1747,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "This often happens when you decide to start your own business. There will always be people who give you bad advice, either because they don't want you to succeed or because they're afraid of your success. Others will offer opinions intended to undermine your project and distract you from what you truly want to achieve. That's why it's not uncommon to hear of people who dreamed of opening a clothing store and end up opening a restaurant."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1763,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Why does this happen? Because they listened to so many opinions that they ended up abandoning their own dreams to follow those of others. Or they were swayed by advice that led them astray from their original path, guided by those who didn't want them to succeed as well."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1773,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: [
                                                        "Here, discernment is vital: knowing when to listen and when to follow the purpose God has placed in your heart. As it says",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-yellow-400 font-bold",
                                                            children: "James 1:5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1783,
                                                            columnNumber: 10
                                                        }, this),
                                                        ': "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you."'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1780,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Remember that not everyone has the same heart as you, nor the same intention to give you good advice or an honest opinion. Therefore, be very careful who you listen to, and make sure your decisions are guided by wisdom from above, not by the opinions of those who don't share your dreams or vision."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1790,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1734,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Love yourself"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1800,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Loving yourself is the greatest romance in life. Often you dedicate your love to others, but you forget to love yourself. You strive to give love to others, but you neglect the affection you also need. Why does this happen? Because you haven't taken the time to stop and think about yourself. Sometimes, you need to say: \"Today, I need to rest.\" Even if you want to spend time with your friends, it's essential to prioritize yourself. First, love yourself and rest; then, share with others."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1803,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "How long has it been since you treated yourself to something simple, like enjoying a cup of coffee while gazing at the sea? When was the last time you did something you truly love but have been putting off for so long? It's important to make time for yourself, because self-love is the romance that lasts a lifetime."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1814,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "People will be by your side as long as it suits them; some value you, others only take advantage of your generosity or personality. And often, some of them will leave, betray you, or simply disappear. Even if some stay, at the end of the day, the only one who will always be there for you, without fail, is yourself."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1822,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "It's important to understand that self-love is not selfishness. The Bible itself teaches us:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "italic text-yellow-200",
                                                            children: '"Love your neighbor as yourself"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1833,
                                                            columnNumber: 10
                                                        }, this),
                                                        " ",
                                                        "(",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-yellow-400 font-bold",
                                                            children: "Matthew 22:39"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                            lineNumber: 1837,
                                                            columnNumber: 10
                                                        }, this),
                                                        "). This commandment implies that in order to love others, we must first love ourselves. If we don't take care of our own physical, emotional, and spiritual health, we cannot truly care for others. Loving yourself doesn't mean neglecting others, but rather ensuring that you are strong and whole enough to give your best to those around you."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1830,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1799,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-yellow-100 mb-3",
                                                    children: "Don't be afraid of failure"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1850,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "Those who know how to climb aren't afraid of falling, because they're confident they know how to climb back up. Many people fear facing defeat or losing something simply because they don't understand how they got where they are. They climbed one day because someone helped them, but then they boasted of having achieved it through their own merit. And now, they fear falling because they know that, at some point, they betrayed the person who lent them a hand, and they no longer have their support."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1853,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4",
                                                    children: "That's why those who truly know how to achieve success aren't afraid of losing it, because they've learned the process and don't depend on others to climb back up. It's crucial that, even if someone helps you reach higher, you learn the path to success yourself. That way, if you ever have to fall, you won't have to betray or hurt anyone for fear of falling. Instead, you'll have the confidence that, regardless of the circumstances, you'll know how to get back up."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1864,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "True success is not just about reaching the top, but about understanding the process so that, if you find yourself in a valley, you can climb back up with the same strength."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1874,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1849,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 1528,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 1522,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "chapter-7",
                            className: "scroll-mt-24 p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-yellow-500/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-tight",
                                    children: "CHAPTER 7: BEWARE OF JUDASES AND PETERS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 1887,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Many times, you might be mistaken for a wolf because of your loyalty to your pack, not because of any ill will. Loyalty isn't something you talk about, but something you prove; it's not something you show off, but something you demonstrate when the time comes. Loyalty has its hours, minutes, and seconds. Why do I refer to loyalty this way? Because loyalty is tested in the exact and precise moment things happen, and that's when you know if you're truly loyal."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1891,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Therefore, when you choose, you must choose wisely so that, in doing so, you don't attract a Judas, as many will say, but perhaps a Peter. What does this mean? In reality, Judas didn't betray the Master for no reason; Judas was chosen to betray the Master. Jesus didn't take Judas to the mountain, Jesus didn't lead Judas to walk on water, Jesus didn't pay Judas's taxes. However, with Peter, Jesus took him to the mountain, revealed who he was, paid Peter's tax with a coin found in the mouth of a fish, and walked on water with him."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1901,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "The betrayal of closeness"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1913,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'There are some "Peters" to whom you have given everything: you have taken them into your home, fed them, helped them financially, and at the moment when they have you on the cross, they are the first to betray you and deny you three times.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1916,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Those Peters who swore loyalty to you, who said they would go with you to the death, who claimed that nothing else mattered because you were their brother and their friend, are the first ones who, when the persecution against you begins, say: \"I don't know him. I'm not him. I've never been with him.\""
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1922,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "That's why you have to be careful, not with the Judases, who were chosen to strengthen you. Why to strengthen you? Because the Judases are those people who are there, and you know they're not good for you, but their presence has a purpose. And the moment you want to throw in the towel, you say: \"No, I can't let her go because if I do, this Judas will make fun of me. If I let her go, this Judas will say he was right. If I let her go, this Judas will say he was always right about everything bad he said about me.\" That's why those Judases give you the strength to carry on."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1929,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "However, those Peters who said they would go with you to the ends of the earth, the moment the persecution, criticism, murmuring, and blasphemy against you begin, when you fall or fail, are the first to deny you and say: \"I was there for a while, but he's not my brother, he never helped me, he never did anything like that for me.\" That's why you should beware not of Judases, but of Peters. The enemy will never betray you; the one who betrays you is a friend."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1941,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "The loyalty of the pack"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1952,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "On that same point, it's worth noting that wolves aren't the strongest. No, but you also won't see them jumping around in a circus. Why? Because they're loyal to their packs. Wolves aren't the kind of people who applaud you when they disagree with you. No, no, no. Wolves don't join the strongest side simply because it's the most popular; they won't change sides for that reason."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1955,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Wolves don't betray. They don't side with those who are strong in times of weakness; they prefer to die loyal to their pack, loyal to their own. Do you know why? Because wolves fight for the pack, not for their own interests. Envy exists in many others, and that's why they only follow people with some kind of success. Wolves don't feel envy; they fight for the entire pack, because they understand that blessings should be shared by all."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1963,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Some people align themselves with only one side or the other because they believe what's theirs is theirs alone, and that's when envy creeps in—that feeling of the follower who hasn't achieved anything in life. But wolves aren't like that; they don't feel envy because they understand that what they're going to receive is for everyone to enjoy. That's why I repeat: you've been mistaken for wolves not because of any malice in your heart, but because of your loyalty to your pack. Continue to be loyal to your pack; sooner or later, life will reward you."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1972,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "What are you? A Judas or a Peter? A wolf loyal to its pack, or simply a lion that wants to reign alone?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1983,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "If you want to arrive early, go slowly"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1988,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "This point is very important because my grandfather always told me:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"If you want to arrive early, go slowly."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 1994,
                                                    columnNumber: 9
                                                }, this),
                                                " ",
                                                "When I was a child, I didn't understand this, until one day, in an accident, I realized that the faster I ran, the later I might reach my destination, or simply never arrive."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 1991,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Many times in life, blessings are waiting for us, but we want to rush things and try to speed up the process. This causes us to lose our way, the blessings to slip away, and we fail to receive what God has truly reserved for us."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2001,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We often think that God has forgotten us, and that's why we don't receive what we want. But that's not the case; many times we're asking for what we want, not what's best for us. God doesn't want to give us only what we want, but what is truly best for us."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2007,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'It\'s like a child who comes home and says: "I\'m hungry, Mommy, serve me my food." Although the food isn\'t ready yet, the mother replies: "Hold on, wait". The child insists, but she knows that serving him raw food could upset his stomach or cause indigestion. If he waits a little longer, he can enjoy a properly prepared meal. My grandfather used to say: "Hunger that expects to be satisfied is not hunger", because when you wait eagerly, you enjoy it more, since you value the effort and the waiting time.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2014,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Memories of a better time"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2026,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Remember those times when we were kids, when three or four of us slept in the same bed, wore the same uniform because one of us studied in the morning and the other in the afternoon, and shared the same backpack to carry our notebooks? Remember how we invented games with rubber bands or cardboard cars?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2029,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'To go to the bathroom, we often went a few meters from the house and saw monsters formed by trees that were just shapes among the plants. We waited for darkness to play hide-and-seek or other games we invented, like the crazy helper or the "tag".'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2036,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "When the lights came back on, we celebrated with a euphoric shout, because there was a woman who told us stories about people who had died in the neighborhood and appeared in the alleyways, and we believed all those stories. Many times we couldn't even walk at night for fear of those tales."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2042,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Remember how close we were, sharing a lollipop or a soda. We all sucked on the same lollipop or drank from the same bottle, enjoying every shared sip. No one was disgusted by anyone, no one was envious. Every Sunday at 3 p.m., we'd get dressed to go for a walk around the neighborhood, all of us kids."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2049,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We bought mints and gum to take around the neighborhood, then we'd go back home and play a little in front of the house. I remember those times; they were beautiful times. There was only one television for the whole neighborhood, for the whole area, for the whole district. We all watched it together. El Chavo, the little dolls like Candy, the metal frog, Honey Bee Hutch, the Thundercats and the Smurfs."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2056,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We used to watch those cartoons where there was always a bad guy and a good guy who won. Even though television required us to turn an antenna outside the house, we all enjoyed it."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2065,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-yellow-100 mt-8 mb-4",
                                            children: "Recovering the essence of family"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2071,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We all sat there enjoying that television. Nowadays, technology has stolen that from us; everyone has a cell phone while we're gathered together, and we don't realize we're not talking. Not just friends, but our family too. How long has it been since you cooked dinner for everyone on a day other than Christmas Eve? How long has it been since you ate lunch with your family at noon? How long has it been since you asked your children what happened at school? They always have an imaginary friend who is really just themselves."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2074,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'Remember that you were one too, which is why we need to return to those values of love. We need to return to those times when we all gathered to eat together and talk about our lives, so that we could feel like a family living not just in a house, but in a happy home. Remember: "If you want to arrive early, go slowly to enjoy all the scenery that life has to offer."'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2085,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: 'And so we come to the best point: prayer. It is the golden code. After having mentioned each of these codes of life or secrets of life, I want to offer you this secret or golden code called "the prayer".'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2093,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 1890,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 1884,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "chapter-8",
                            className: "scroll-mt-24 p-6 md:p-8 bg-yellow-900/30 rounded-2xl shadow-lg border border-yellow-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 border-b border-yellow-500/30 pb-4 uppercase tracking-tight",
                                    children: "CHAPTER 8: THE GOLDEN CODE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 2106,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-lg text-yellow-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Prayer is a lifestyle, because it's where you empower yourself with God's power. There is power in your relationship with God. There are two kinds of relationships: one with God and one with your neighbor. Your relationship with God should be your priority, and if you have problems in your relationship with your neighbor or with God, He won't hear your prayer."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2110,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mt-8 mb-4",
                                            children: "Identity and authority"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2119,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "One of the most important aspects of prayer is having identity. If you lack identity, you lack authority; and if you lack identity, your honor will not be genuine. You must first go to the source of life, which is God, having identity and knowing that you belong to Him and are in Him."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2122,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We must learn to pray not as bastards, not as servants, but as children. We must know to whom we are praying so that our prayer is not vain, superficial, or routine. We must remember that we are praying to the Father, our source of life. Every time we pray to the Father, we acknowledge that He is our source of life."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2129,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "The stronger our sense of identity, the more God uses us. Identity is believing based on firsthand experience, and that experience leads us to pray more. Consequently, by praying more, we attain greater spiritual maturity and learn to depend on God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2137,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mt-8 mb-4",
                                            children: "The power of intercession"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2144,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "When we pray constantly, we become not only speakers, but also intercessors. But to be an intercessor, it is necessary to have a life of prayer with God. In",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white",
                                                    children: "Exodus 32:32"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 2151,
                                                    columnNumber: 9
                                                }, this),
                                                ", when Moses interceded for the people who sinned against God by making a golden calf, Moses' prayer of intercession was so powerful that God took it into account and changed his mind."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2147,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "When we reach the level of intercession, we become true intercessors and are in the spiritual dimension of",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white",
                                                    children: "John 17:11-21"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 2159,
                                                    columnNumber: 9
                                                }, this),
                                                ", where Jesus spoke to us about being one in Him and in the Father, because He is our greatest intercessor. When you are a true intercessor, you are not selfish; you pray for others and not for your own benefit. You sacrifice for others, and God is pleased by sacrifices for His glory."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2156,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mt-8 mb-4",
                                            children: "Recognizing the sovereignty of God"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2167,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "To pray effectively, it is essential to understand our position and God's position in the communion established between the Almighty and humankind. By carefully studying the model prayer that Jesus taught us, we notice that Christ begins it with",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-yellow-200",
                                                    children: '"Our Father who art in heaven"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                                    lineNumber: 2175,
                                                    columnNumber: 9
                                                }, this),
                                                ". This should be the attitude of one who approaches God in prayer: to recognize His absolute deity and superiority."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2170,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "No one who seeks God based on their own merits, without surrendering their earthly crowns to the Redeemer, will be heard by the King of kings and Lord of lords. God is not just another god; He is the only true God, the One who is all-powerful and who has never lost a battle. This makes Him immediately superior to humankind. It is useless to be arrogant in prayer and believe that we are equal to God."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2181,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mt-8 mb-4",
                                            children: "An irreplaceable discipline"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2191,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "If we understand this reality clearly, having a life of prayer will be simple and will become essential in our daily lives. We will understand that if we do not go into the presence of the Eternal One, our day will be a logical failure. It is impossible to know God without prayer, since it was created as the means for that purpose. Prayer cannot be replaced by any other spiritual discipline. It is useless to read a lot of the Bible, study intensely in a seminary, preach with logical coherence, or have a beautiful voice if all of that is not accompanied by a devout life of prayer."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2194,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Daniel prayed three times a day, and because of this, he was able to endure the spirit of idolatry in the Babylonian Empire and possessed a superior spirit, to the point that God revealed to him the secrets of the ages. Furthermore, due to his constant communion with God, he played a prominent role in Babylon during three distinct reigns, without compromising his principles and overcoming obstacles with faith and trust in Jehovah."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2206,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We should ask ourselves if devotional prayer is truly an integral part of our daily lives, or if we only turn to it when we want God to use us powerfully or when we have needs."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2215,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-center italic text-white/90 text-xl mt-8",
                                            children: '"Let us be true children of God. Let us communicate to our Heavenly Father all that we want to do, and what better way to do so than through prayer, so that we may dwell in His presence. Amen."'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                            lineNumber: 2220,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                                    lineNumber: 2109,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                            lineNumber: 2103,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                    lineNumber: 147,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                lineNumber: 146,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: scrollToTop,
                className: "fixed bottom-8 right-8 p-3 bg-yellow-500 text-black rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 hover:bg-yellow-400 hover:scale-110 focus:outline-none z-40 ".concat(showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"),
                "aria-label": "Back to top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                    size: 24,
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                    lineNumber: 2240,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                lineNumber: 2232,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-neutral-950 text-slate-500 py-12 text-center border-t border-yellow-500/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2024 Mongoose Mentality. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                        lineNumber: 2244,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-2",
                        children: "Designed for the edification of the body of Christ."
                    }, void 0, false, {
                        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                        lineNumber: 2245,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
                lineNumber: 2243,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/books/translations/MongooseMentality.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, this);
}
_s(MongooseMentalityBook, "aiFZ+SaF9kXH29nKW1FRsxmC8PE=");
_c = MongooseMentalityBook;
var _c;
__turbopack_context__.k.register(_c, "MongooseMentalityBook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/books/EbookReader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EbookReader",
    ()=>EbookReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/languageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/static/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/authContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$jumbotron$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/jumbotron/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$books$2f$translations$2f$MentalidadDeMangosta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/books/translations/MentalidadDeMangosta.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$books$2f$translations$2f$MongooseMentality$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/books/translations/MongooseMentality.tsx [app-client] (ecmascript)");
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
function EbookReader(param) {
    let { productId } = param;
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [book, setBook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EbookReader.useEffect": ()=>{
            let isMounted = true;
            const initPageData = {
                "EbookReader.useEffect.initPageData": async ()=>{
                    setLoading(true);
                    try {
                        // 1. Check if we have the required ID
                        if (!productId) return;
                        // --- STEP 1: Fetch the Book Metadata ---
                        // FIX: Use 'productId' prop, not 'book.id'
                        const bookReq = await fetch("/api/books/".concat(productId));
                        const bookRes = await bookReq.json();
                        if (bookRes.success) {
                            const currentBook = bookRes.data;
                            if (isMounted) setBook(currentBook);
                            // --- STEP 2: Check Ownership ---
                            if (user) {
                                const ordersReq = await fetch(// FIX: Ensure you are passing the correct IDs
                                "/api/user/orders/books/".concat(productId, "?userId=").concat(user.id));
                                const ordersRes = await ordersReq.json();
                                // If check fails or user hasn't bought it, redirect
                                if (!ordersRes.success) {
                                    console.warn("User does not own this book");
                                    router.push("/books");
                                }
                            }
                        } else {
                            // If book doesn't exist, redirect
                            router.push("/books");
                        }
                    } catch (error) {
                        console.error("Error initializing book page:", error);
                    } finally{
                        if (isMounted) setLoading(false);
                    }
                }
            }["EbookReader.useEffect.initPageData"];
            // Run the function
            initPageData();
            return ({
                "EbookReader.useEffect": ()=>{
                    isMounted = false;
                }
            })["EbookReader.useEffect"];
        // FIX: Remove 'book' from dependencies to avoid infinite loops
        }
    }["EbookReader.useEffect"], [
        productId,
        user,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/books/EbookReader.tsx",
            lineNumber: 79,
            columnNumber: 5
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$jumbotron$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JumbotronShared"], {
                    topSmTitle: language === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].english ? "You are reading your book" : "Estás leyendo tu libro",
                    mainTitle: (book === null || book === void 0 ? void 0 : book.name) || "",
                    mainText: (book === null || book === void 0 ? void 0 : book.description) || ""
                }, void 0, false, {
                    fileName: "[project]/src/components/books/EbookReader.tsx",
                    lineNumber: 82,
                    columnNumber: 6
                }, this),
                book.name === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availableBooks"].GaryMack.Spanish.MentalidadDeMangosta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$books$2f$translations$2f$MentalidadDeMangosta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/books/EbookReader.tsx",
                    lineNumber: 93,
                    columnNumber: 7
                }, this),
                book.name === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$static$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availableBooks"].GaryMack.English.MongooseMentality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$books$2f$translations$2f$MongooseMentality$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/books/EbookReader.tsx",
                    lineNumber: 97,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true)
    }, void 0, false);
}
_s(EbookReader, "ijslVzMYZAr7u+3uUtWLTF6NXFM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$languageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$authContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EbookReader;
var _c;
__turbopack_context__.k.register(_c, "EbookReader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_7b354d5f._.js.map