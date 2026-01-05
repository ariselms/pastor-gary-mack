"use client";
import { useLanguageContext } from "@/context/languageContext";
import { useNavigationData } from "@/hooks/navigation";
import Image from "next/image";
import { languageOptions } from "@/static";
import Link from "next/link";

export default function Footer() {
	const { language } = useLanguageContext();
	const navigation = useNavigationData();

	return (
		<footer className="bg-gradient-to-bl from-black via-slate-900 to-blue-900">
			<div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-12 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="flex flex-col items-start justify-start gap-2 w-full">
						<Image
							width={100}
							height={100}
							alt="Pastor Gary Mack Logo"
							src="/images/gary-mack-logo.png"
							className="h-40 w-auto"
						/>
						<span className="text-white">Pastor Gary Mack</span>
					</div>
					<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
						<div>
							<h3 className="text-sm/6 font-semibold text-white">Legal</h3>
							<ul role="list" className="mt-6 space-y-4">
								{navigation.legal.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-sm/6 text-white hover:underline">
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-sm/6 font-semibold text-white">
								{language === languageOptions?.spanish ? "Sobre Mi" : "About"}
							</h3>
							<ul role="list" className="mt-6 space-y-4">
								{navigation.company.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-sm/6 text-white hover:underline">
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-sm/6 font-semibold text-white dark:text-white">
								{language === languageOptions.spanish ? "Soporte" : "Support"}
							</h3>
							<ul role="list" className="mt-6 space-y-4">
								{navigation.support.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-sm/6 text-white hover:underline">
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
					<div className="flex gap-x-6 md:order-2">
						{navigation.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-slate-100 hover:text-slate-300">
								<span className="sr-only">{item.name}</span>
								<item.icon aria-hidden="true" className="size-6" />
							</a>
						))}
					</div>
					<p className="mt-8 text-sm/6 text-slate-100 md:order-1 md:mt-0">
						&copy; {new Date().getFullYear()} Pastor Gary Mack,
						{language === languageOptions.spanish
							? " Todos los derechos reservados."
							: " All rights reserved."}
					</p>
				</div>
			</div>
		</footer>
	);
}
