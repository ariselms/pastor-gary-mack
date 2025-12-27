"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
	// Refs for GSAP targeting
	const containerRef = useRef(null);
	const bgTextRef = useRef(null);
	const titleTextRef = useRef(null);
	const subTextRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		// Use gsap.context for proper cleanup
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			// 1. Background Text: Starts bigger (scale 1.5) and shrinks to natural size (scale 1)
			tl.from(bgTextRef.current, {
				scale: 1.5,
				opacity: 0,
				duration: 1.8,
				transformOrigin: "center center"
			})
				// 2. Person Title: Fades in and moves up
				.from(
					titleTextRef.current,
					{
						y: 100,
						opacity: 0,
						duration: 1
					},
					"-=1.2"
				)
				// 3. Sub Title: Fades in and moves up
				.from(
					subTextRef.current,
					{
						y: 50,
						opacity: 0,
						duration: 1
					},
					"-=0.8"
				)
				// 4. HTML Container: Fades in and moves up
				.from(
					contentRef.current,
					{
						y: 30,
						opacity: 0,
						duration: 0.8
					},
					"-=0.6"
				);
		}, containerRef);

		return () => ctx.revert();
	}, []);
	return (
		<section className="h-[calc(100vh-88px)] w-full snap-start flex flex-col justify-center items-center relative bg-slate-900 p-4 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black pointer-events-none"></div>

			{/* Giant Faded Background Text */}
			<h1 ref={bgTextRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap select-none pointer-events-none font-['Montserrat',sans-serif]">
				{fadedBackgroundText.toUpperCase()}
			</h1>

			<h1 ref={titleTextRef} className="font-['Montserrat',sans-serif] font-black text-[clamp(5rem,15vw,16rem)] leading-[0.85] uppercase text-center text-white relative z-10">
				{personTitleText}
				<br />
				<span ref={subTextRef} className="text-yellow-300">{personTitleSubText}</span>
			</h1>
			<div ref={contentRef} className="mt-10">{htmlContainer}</div>
		</section>
	);
}

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
