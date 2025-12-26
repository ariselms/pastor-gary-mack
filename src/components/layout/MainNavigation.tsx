// TODO: This navigation menu will have drop downs as the application grows
"use client";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { useEffect, useState } from "react";
import { DarkThemeToggle } from "flowbite-react";
import { MenuIcon } from "@/components/svg/Icons";
import Link from "next/link";
import LanguageHandler from "@/components/forms/LanguageHandler";
import { useAuthContext } from "@/context/authContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { GaryMackLogo } from "@/components/logo";

export default function MainNavigation() {
	const [showMenu, setShowMenu] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const languageContext = useLanguageContext();
	const { language } = useLanguageContext();
	const { user, persistUser, signOutUser } = useAuthContext();
	const pathname = usePathname();

	useEffect(() => {

	  persistUser();

	}, [pathname]);

	useEffect(() => {
		const currentLanguage = languageContext?.verifyLanguageFromLocalStorage();
		languageContext?.setLanguage(currentLanguage);

		const handleResize = () => {
			const windowWidth = window?.innerWidth;
			const isDesktop = windowWidth >= 768;
			setShowMenu(isDesktop);
			setIsMobile(!isDesktop);
		};

		// Initial check on mount
		handleResize();

		// Add event listener for resize
		window?.addEventListener("resize", handleResize);

		// Clean up the event listener
		return () => {
			window?.removeEventListener("resize", handleResize);
		};
	}, [languageContext]); // Add languageContext to the dependency array if it can change

	const handleLanguageChange = (lang: string) => {
		const selectedLanguage = languageContext?.setLanguageAndLocalStorage(lang);
		languageContext?.setLanguage(selectedLanguage);
	};

	const handleMenu = () => {
		setShowMenu(!showMenu);
	};

	const isActiveLink = (path: string) => {
		return pathname === path;
	};

	return (
		<header className="w-full relative h-22 flex items-center justify-center">
			<nav className="px-4 py-4 rounded-none bg-slate-950 flex items-center justify-between relative w-full">
				{/* logo */}
				<Link
					onClick={() => {
						isMobile && setShowMenu(false);
					}}
					className="flex items-center"
					href="/">
					<GaryMackLogo />
				</Link>

				{/* language handler and dark theme toggle */}
				<div className="flex items-center order-3">
					<div className="flex items-center">
						<LanguageHandler
							handleLanguageChange={handleLanguageChange}
							languageContext={languageContext}
							languageOptions={languageOptions}
						/>
					</div>
					<MenuIcon onClick={handleMenu} />
				</div>

				{/* menu links */}
				{showMenu && (
					<ul
						id="menu"
						className="flex flex-col md:flex-row md:items-center absolute md:static right-0 top-23 z-20 gap-x-8 order-2 bg-slate-200 dark:bg-slate-800 md:dark:bg-transparent md:bg-transparent w-full md:w-auto gap-y-4">
						<li className="pt-4 pb-1 md:p-0 text-center hover:bg-transparent trastition-all">
							<Link
								onClick={() => {
									isMobile && setShowMenu(false);
								}}
								className={`${isActiveLink("/") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all mt-6 md:m-0 inline-block`}
								href="/">
								{language === languageOptions.spanish ? "Inicio" : "Home"}
							</Link>
						</li>
						<li className="pt-2 pb-1 md:p-0 text-center hover:bg-transparent trastition-all">
							<Link
								onClick={() => {
									isMobile && setShowMenu(false);
								}}
								className={`${isActiveLink("/about") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all`}
								href="/about">
								{language === languageOptions.spanish ? "Sobre Mi" : "About Me"}
							</Link>
						</li>
						<li className="pt-2 pb-1 md:p-0 text-center hover:bg-transparent trastition-all">
							<Link
								onClick={() => {
									isMobile && setShowMenu(false);
								}}
								className={`${isActiveLink("/books") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all`}
								href="/books">
								{language === languageOptions.spanish ? "Libros" : "Books"}
							</Link>
						</li>
						{user ? (
							<ul className="flex flex-col md:inline-flex md:flex-row md:items-center md:gap-x-2 rounded-xl border border-slate-800">
								<li className="pt-2 pb-1 md:pl-4 md:pr-2 md:py-1 border-r border-slate-400 md:p-0 text-center hover:bg-transparent trastition-all">
									{" "}
									<Link
										onClick={() => {
											isMobile && setShowMenu(false);
										}}
										className={`${isActiveLink("/profile") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all`}
										href="/profile">
										{language === languageOptions.spanish
											? "Perfil"
											: "Profile"}
									</Link>
								</li>
								<li className="pt-2 pb-4 md:p-0  md:pl-2 md:pr-4 md:py-1 text-center hover:bg-transparent trastition-all">
									{" "}
									<Link
										onClick={() => {
											isMobile && setShowMenu(false);
											signOutUser();
										}}
										className={`${isActiveLink("/login") && "border-b-2 border-slate-200"} text-slate-400 hover:border-b-2 hover:border-slate-200 transition-all mt-4 mb-6 md:m-0 inline-block`}
										href="/login">
										{language === languageOptions.spanish ? "Salir" : "Logout"}
									</Link>
								</li>
							</ul>
						) : (
							<li className="pt-2 pb-4 md:p-0 text-center hover:bg-transparent trastition-all">
								{" "}
								<Link
									onClick={() => {
										isMobile && setShowMenu(false);
									}}
									className={`${isActiveLink("/login") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all`}
									href="/login">
									{language === languageOptions.spanish
										? "Iniciar Sesión"
										: "Login"}
								</Link>
							</li>
						)}
					</ul>
				)}
			</nav>
		</header>
	);
}
