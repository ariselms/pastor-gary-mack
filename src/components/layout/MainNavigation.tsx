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

	useGSAP(() => {
		if (!isMobile || !menuRef.current) return;

		const items = menuRef.current.querySelectorAll("li");

		if (isFirstRender.current) {
			if (!showMenu) {
				gsap.set(menuRef.current, {
					height: 0,
					paddingTop: 0,
					paddingBottom: 0,
					borderTopWidth: 0,
					opacity: 0,
					visibility: "hidden"
				});
				gsap.set(items, { opacity: 0, y: -20 });
			}
			isFirstRender.current = false;
			return;
		}

		if (showMenu) {
			// --- OPEN SEQUENCE ---
			const tl = gsap.timeline();

			// Step A: Setup
			tl.set(items, { opacity: 0, y: -20, immediateRender: true });

			// Step B: Open Background (Duration 0.2s)
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
			); // <--- THIS is the change.
			// It means: "Start this 0.15s BEFORE the previous step ends."
			// Since the previous step is 0.2s, the links start almost immediately (0.05s in).
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
            bg-black md:dark:bg-transparent md:bg-transparent
            w-full md:w-auto gap-y-4 gap-x-4
            border-slate-900 overflow-hidden

            md:h-auto md:p-0 md:opacity-100 md:border-t-0 md:visible
          `}>
					<li className="md:p-0 text-center hover:bg-transparent transition-all">
						<Link
							onClick={() => isMobile && setShowMenu(false)}
							className={`${isActiveLink("/") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all md:m-0 inline-block`}
							href="/">
							{language === languageOptions.spanish ? "Inicio" : "Home"}
						</Link>
					</li>
					<li className="md:p-0 text-center hover:bg-transparent transition-all">
						<Link
							onClick={() => isMobile && setShowMenu(false)}
							className={`${isActiveLink("/about") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all`}
							href="/about">
							{language === languageOptions.spanish ? "Sobre Mi" : "About Me"}
						</Link>
					</li>
					<li className="md:p-0 text-center hover:bg-transparent transition-all">
						<Link
							onClick={() => isMobile && setShowMenu(false)}
							className={`${isActiveLink("/books") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all`}
							href="/books">
							{language === languageOptions.spanish ? "Libros" : "Books"}
						</Link>
					</li>
					<li className="md:p-0 text-center hover:bg-transparent transition-all">
						<Link
							onClick={() => isMobile && setShowMenu(false)}
							className={`${isActiveLink("/give") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all`}
							href="/give">
							{language === languageOptions.spanish ? "Donar" : "Donate"}
						</Link>
					</li>
					{user ? (
						<ul className="flex flex-col md:inline-flex md:flex-row md:items-center md:gap-x-2 rounded-xl border border-slate-800">
							<li className="md:pl-4 md:pr-2 md:py-1 border-r border-slate-400 md:p-0 text-center hover:bg-transparent transition-all">
								<Link
									onClick={() => isMobile && setShowMenu(false)}
									className={`${isActiveLink("/profile") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all`}
									href="/profile">
									{language === languageOptions.spanish ? "Perfil" : "Profile"}
								</Link>
							</li>
							<li className="md:p-0 md:pl-2 md:pr-4 md:py-1 text-center hover:bg-transparent transition-all">
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
						<li className="md:p-0 text-center hover:bg-transparent transition-all">
							<Link
								onClick={() => isMobile && setShowMenu(false)}
								className={`${isActiveLink("/login") && "border-b-2 border-slate-200"} text-slate-100 hover:border-b-2 hover:border-slate-200 transition-all`}
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
