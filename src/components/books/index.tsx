"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { StripeProduct } from "@/types/bookTypes";
import { BookInfoCard } from "@/components/cards";
import { Container7xl } from "@/components/containers";
import { JumbotronShared } from "@/components/jumbotron/";
import Spinner from "@/components/Spinner";
import { useAuthContext } from "@/context/authContext";
import { CoreValuesCard } from "@/components/cards";
import { mentalidadDeMangostaValues } from "@/static";

export function BookPageContent() {
	const { language } = useLanguageContext();
	const { user } = useAuthContext();

	const [loading, setLoading] = useState(true);
	const [book, setBook] = useState<StripeProduct | null>(null);
	const [userOwned, setUserOwned] = useState(false);

	const isEnglish = language === languageOptions.english;

	const bookValues = mentalidadDeMangostaValues(isEnglish)

	useEffect(() => {
		let isMounted = true; // 1. Prevents updates if user leaves page quickly

		const initPageData = async () => {
			setLoading(true);
			setUserOwned(false); // Reset to ensure no stale state

			try {
				// --- STEP 1: Fetch the Book ---
				const bookId =
					language === languageOptions.english
						? process.env.NEXT_PUBLIC_MENTALIDAD_DE_MANGOSTA_EN
						: process.env.NEXT_PUBLIC_MENTALIDAD_DE_MANGOSTA_ES;

				if (!bookId) return;

				const bookReq = await fetch(`/api/books/${bookId}`);
				const bookRes = await bookReq.json();

				if (!bookRes.success || !bookRes.data) {
					throw new Error("Failed to load book");
				}

				const currentBook = bookRes.data;
				if (isMounted) setBook(currentBook);

				// --- STEP 2: Check Ownership (Only if User is Logged In) ---
				// We do this BEFORE setting loading to false
				if (user && currentBook.id) {
					const ordersReq = await fetch(
						`/api/user/orders/books/${currentBook.id}?userId=${user.id}`
					);
					const ordersRes = await ordersReq.json();

					if (ordersRes.success && isMounted) {
						// If the API returns any orders, the user owns it
						if (ordersRes.data.length > 0) {
							console.log("Ownership confirmed for:", currentBook.id);
							setUserOwned(true);
						}
					}
				}
			} catch (error) {
				console.error("Error initializing book page:", error);
			} finally {
				// --- STEP 3: Finally Reveal the UI ---
				if (isMounted) setLoading(false);
			}
		};

		if (language) {
			initPageData();
		}

		return () => {
			isMounted = false;
		};
	}, [language, user]); // Re-runs if language switches or user logs in

	return (
		<>
			<JumbotronShared
				topSmTitle="Pastor Gary Mack"
				mainTitle={
					language === languageOptions.english
						? "Available Books"
						: "Libros Disponibles"
				}
				mainText={
					language === languageOptions.english
						? "Choose from the following books, just click Buy Now. Once you purchase a book, you will be able to see them in your dashboard under orders. From there you can read the book online. More books to come soon. Thanks for your support!"
						: "Elija de los siguientes libros, solo haga clic en Comprar Ahora. Una vez compras el libro, podrás accesarlo desde tu panel de administración para leerlo en línea. Gracias por su apoyo!"
				}
			/>

			{loading ? (
				<Spinner />
			) : (
				<Container7xl>
					<ul className="text-slate-200 pt-16">
						{book && <BookInfoCard book={book} isUserOwned={userOwned} />}
					</ul>

					<article>
						<section className="w-full py-16">
							<div className="space-y-12">
								{/* Header */}
								<div className="text-center space-y-4">
									<h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
										{language === languageOptions.english
											? "Faith Values"
											: "Valores de la Fe"}
									</h2>
									<p className="mx-auto text-lg text-slate-200">
										{language === languageOptions.english
											? "Defined by the teology of the book 'Mongoose Mentality' from Pastor Gary Mack"
											: "Definidos por la teología del libro 'Mentalidad de Mangosta' del Pastor Gary Mack"}
									</p>
								</div>

								{/* Values Grid */}
								<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
									{bookValues.map((item, index) => (
										<CoreValuesCard key={index} item={item} />
									))}
								</div>

								{/* Summary Quote */}
								<div className="relative mt-16 p-8 border-t border-b border-slate-700 text-center">
									<blockquote className="text-xl font-medium italic text-slate-200 leading-8">
										"La oración es la maniobra ofensiva de un creyente que
										conoce su identidad en Cristo. Es intrépida en la
										confrontación, persistente en la adversidad y confiada en la
										victoria que ya ha sido ganada."
									</blockquote>
									<cite className="block mt-4 text-sm font-semibold text-slate-400 not-italic">
										— Pastor Gary Mack
									</cite>
								</div>
							</div>
						</section>
					</article>
				</Container7xl>
			)}
		</>
	);
}
