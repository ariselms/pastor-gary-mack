"use client";
import { useRef } from "react";
import gsap from "gsap"; // Import gsap default
import { useGSAP } from "@gsap/react";

export function JumbotronWithCenteredLetters({
	fadedBackgroundText,
	personTitleText,
	personTitleSubText,
	htmlContainer
}: {
	fadedBackgroundText: string;
	personTitleText: string;
	personTitleSubText: string;
	htmlContainer: React.ReactNode;
}) {
	const containerRef = useRef<HTMLElement>(null);
	const bgTextRef = useRef<HTMLHeadingElement>(null);
	const titleTextRef = useRef<HTMLHeadingElement>(null);
	const subTextRef = useRef<HTMLSpanElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			// 1. PRE-SET: Ensure the background text is centered by GSAP immediately
			// We moved the translation logic here to avoid conflict with the scale animation
			gsap.set(bgTextRef.current, {
				xPercent: -50,
				yPercent: -50,
				opacity: 0 // Ensure it's hidden initially (double safety)
			});

			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			// 2. Animation Sequence
			// We use autoAlpha instead of opacity. autoAlpha sets visibility:hidden when opacity is 0,
			// which prevents screen readers or clicks from registering it too early.
			tl.fromTo(
				bgTextRef.current,
				{ scale: 1.5, autoAlpha: 0 },
				{
					scale: 1,
					autoAlpha: 1,
					duration: 1.8,
					transformOrigin: "center center"
				}
			)
				.fromTo(
					titleTextRef.current,
					{ y: 100, autoAlpha: 0 },
					{ y: 0, autoAlpha: 1, duration: 1 },
					"-=1.2"
				)
				.fromTo(
					subTextRef.current,
					{ y: 50, autoAlpha: 0 },
					{ y: 0, autoAlpha: 1, duration: 1 },
					"-=0.8"
				)
				.fromTo(
					contentRef.current,
					{ y: 30, autoAlpha: 0 },
					{ y: 0, autoAlpha: 1, duration: 0.8 },
					"-=0.6"
				);
		},
		{ scope: containerRef }
	); // Scope ensures proper cleanup

	return (
		<section
			ref={containerRef}
			className="h-[calc(100vh-88px)] w-full snap-start flex flex-col justify-center items-center relative bg-slate-900 p-4 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black pointer-events-none"></div>

			{/* CHANGES HERE:
         1. Removed 'transform -translate-x-1/2 -translate-y-1/2' (GSAP handles this now).
         2. Added 'invisible'. CSS hides it first, GSAP's autoAlpha reveals it.
      */}
			<h1
				ref={bgTextRef}
				className="absolute top-1/2 left-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap select-none pointer-events-none font-['Montserrat',sans-serif] invisible">
				{fadedBackgroundText.toUpperCase()}
			</h1>

			{/* Added 'invisible' to prevent flash */}
			<h1
				ref={titleTextRef}
				className="font-['Montserrat',sans-serif] font-black text-[clamp(5rem,15vw,16rem)] leading-[0.85] uppercase text-center text-white relative z-10 invisible">
				{personTitleText}
				<br />
				{/* Added 'invisible' and block to ensure it can animate Y independently */}
				<span
					ref={subTextRef}
					className="text-yellow-300 invisible inline-block">
					{personTitleSubText}
				</span>
			</h1>

			{/* Added 'invisible' */}
			<div ref={contentRef} className="mt-10 invisible">
				{htmlContainer}
			</div>
		</section>
	);
}

// ... JumbotronShared remains the same ...
export function JumbotronShared({
	topSmTitle,
	mainTitle,
	mainText
}: {
	topSmTitle: string;
	mainTitle: string;
	mainText: string;
}) {
	return (
		<div className="px-6 py-18 sm:py-24 lg:px-8 bg-gradient-to-tr from-black via-slate-900 to-blue-900 pointer-events-none">
			<div className="mx-auto max-w-2xl text-center">
				<p className="text-base/7 font-semibold text-yellow-300">
					{topSmTitle}
				</p>
				<h2 className="mt-2 text-5xl font-semibold tracking-tight text-slate-100 sm:text-7xl">
					{mainTitle}
				</h2>
				<p className="mt-8 text-pretty text-lg font-medium text-slate-300 sm:text-xl/8">
					{mainText}
				</p>
			</div>
		</div>
	);
}
