"use client";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { useEffect, useState, useRef } from "react";
import { MenuIcon } from "@/components/svg/Icons";
import Link from "next/link";
import LanguageHandler from "@/components/forms/LanguageHandler";
import { useAuthContext } from "@/context/authContext";
import { usePathname } from "next/navigation";
import { GaryMackLogo } from "@/components/logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MainNavigation() {
	const [showMenu, setShowMenu] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const menuRef = useRef<HTMLUListElement>(null);
	const isFirstRender = useRef(true);

	const languageContext = useLanguageContext();
	const { language } = useLanguageContext();
	const { user, persistUser, signOutUser } = useAuthContext();
	const pathname = usePathname();

	useEffect(() => {
		persistUser();
	}, [pathname]);

	// --- RESIZE & INITIAL CHECK ---
	useEffect(() => {
		const currentLanguage = languageContext?.verifyLanguageFromLocalStorage();
		languageContext?.setLanguage(currentLanguage);

		const handleResize = () => {
			const windowWidth = window?.innerWidth;
			const isDesktop = windowWidth >= 768;
			setIsMobile(!isDesktop);

			if (isDesktop) {
				setShowMenu(true);
				// Clean up GSAP inline styles so CSS classes take over on desktop
				if (menuRef.current) {
					gsap.set(menuRef.current, { clearProps: "all" });
					const items = menuRef.current.querySelectorAll("li");
					gsap.set(items, { clearProps: "all" });
				}
			} else {
				if (!showMenu) setShowMenu(false);
			}
		};

		handleResize();
		window?.addEventListener("resize", handleResize);
		return () => window?.removeEventListener("resize", handleResize);
	}, [languageContext]);

	// --- GSAP ANIMATION LOGIC ---
	useGSAP(() => {
		if (!isMobile || !menuRef.current) return;

		const items = menuRef.current.querySelectorAll("li");

		// 1. First Render Safety: Ensure GSAP knows the starting state matches CSS
		if (isFirstRender.current) {
			if (!showMenu) {
				// We sync GSAP with our CSS 'invisible' state
				gsap.set(menuRef.current, {
					height: 0,
					opacity: 0,
					visibility: "hidden"
				});
				gsap.set(items, { opacity: 0, y: -20 });
			}
			isFirstRender.current = false;
			return;
		}

		if (showMenu) {
			const tl = gsap.timeline();

			// Step A: Ensure Items are hidden & shifted UP before container opens
			tl.set(items, { opacity: 0, y: -20, immediateRender: true });

			// Step B: Open Background
			// GSAP inline styles (height: auto) will override the CSS class (h-0)
			tl.to(menuRef.current, {
				height: "auto",
				paddingTop: "2rem",
				paddingBottom: "2rem",
				borderTopWidth: "1px",
				opacity: 1,
				visibility: "visible", // Overrides CSS invisible
				duration: 0.2,
				ease: "none"
			});

			// Step C: Animate Links
			tl.to(
				items,
				{
					opacity: 1,
					y: 0,
					duration: 0.3,
					ease: "none",
					stagger: {
						amount: 0.2,
						from: "end"
					}
				},
				"-=0.40"
			);
		} else {
			// --- CLOSE SEQUENCE ---
			gsap.to(menuRef.current, {
				height: 0,
				paddingTop: 0,
				paddingBottom: 0,
				borderTopWidth: 0,
				opacity: 0,
				duration: 0.1,
				ease: "none",
				onComplete: () => {
					// Reset to match the hidden CSS state
					gsap.set(menuRef.current, { visibility: "hidden" });
					gsap.set(items, { opacity: 0, y: -20 });
				}
			});
		}
	}, [showMenu, isMobile]);

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
			<nav className="px-4 py-4 rounded-none bg-black flex items-center justify-between relative w-full">
				<Link
					onClick={() => isMobile && setShowMenu(false)}
					className="flex items-center"
					href="/">
					<GaryMackLogo />
				</Link>

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

				<ul
					id="menu"
					ref={menuRef}
					className={`
            flex flex-col md:flex-row md:items-center
            absolute md:static right-0 top-23 z-20 order-2
            backdrop-blur-sm bg-black/80 md:dark:bg-transparent md:bg-transparent
            w-full md:w-auto gap-y-4 gap-x-4
            border-b border-slate-800 overflow-hidden
            h-0 opacity-0 invisible
            md:h-auto md:p-0 md:opacity-100 md:border-t-0 md:border-b-0 md:visible
          `}>
					<li className="opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all">
						<Link
							onClick={() => isMobile && setShowMenu(false)}
							className={`${isActiveLink("/") && "border-b-2 border-yellow-300"} text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1 md:m-0`}
							href="/">
							{language === languageOptions.spanish ? "Inicio" : "Home"}
						</Link>
					</li>
					<li className="opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all">
						<Link
							onClick={() => isMobile && setShowMenu(false)}
							className={`${isActiveLink("/about") && "border-b-2 border-yellow-300"} text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1`}
							href="/about">
							{language === languageOptions.spanish ? "Sobre Mi" : "About Me"}
						</Link>
					</li>
					<li className="opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all">
						<Link
							onClick={() => isMobile && setShowMenu(false)}
							className={`${isActiveLink("/books") && "border-b-2 border-yellow-300"} text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1`}
							href="/books">
							{language === languageOptions.spanish ? "Libros" : "Books"}
						</Link>
					</li>
					<li className="opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all">
						<Link
							onClick={() => isMobile && setShowMenu(false)}
							className={`${isActiveLink("/give") && "border-b-2 border-yellow-300"} text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1`}
							href="/give">
							{language === languageOptions.spanish ? "Donar" : "Donate"}
						</Link>
					</li>
					{user ? (
						/* FIX: Removed 'opacity-0' from this UL container so it doesn't hide the children */
						<ul className="flex flex-col md:inline-flex md:flex-row md:items-center md:gap-x-0">
							{/* FIX: Added 'opacity-0 md:opacity-100' to the LIs so they stagger in correctly */}
							<li className="opacity-0 md:opacity-100 md:pl-4 md:pr-2 md:py-1 border-r border-slate-400 md:p-0 text-center hover:bg-transparent transition-all">
								<Link
									onClick={() => isMobile && setShowMenu(false)}
									className={`${isActiveLink("/profile") && "border-b-2 border-yellow-300"} text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1`}
									href="/profile">
									{language === languageOptions.spanish ? "Perfil" : "Profile"}
								</Link>
							</li>
							{/* FIX: Added 'opacity-0 md:opacity-100' */}
							<li className="opacity-0 md:opacity-100 md:p-0 md:pl-2 md:pr-4 md:py-1 text-center hover:bg-transparent transition-all">
								<Link
									onClick={() => {
										isMobile && setShowMenu(false);
										signOutUser();
									}}
									className={`${isActiveLink("/login") && "border-b-2 border-yellow-300"} text-slate-400 hover:border-b-2 hover:border-yellow-300 transition-all mt-4 mb-6 md:mt-0 md:mb-0 inline-block leading-none pb-1`}
									href="/login">
									{language === languageOptions.spanish ? "Salir" : "Logout"}
								</Link>
							</li>
						</ul>
					) : (
						<li className="opacity-0 md:opacity-100 md:p-0 text-center hover:bg-transparent transition-all">
							<Link
								onClick={() => isMobile && setShowMenu(false)}
								className={`${isActiveLink("/login") && "border-b-2 border-yellow-300"} text-slate-100 hover:border-b-2 hover:border-yellow-300 transition-all inline-block leading-none pb-1`}
								href="/login">
								{language === languageOptions.spanish
									? "Iniciar Sesión"
									: "Login"}
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
