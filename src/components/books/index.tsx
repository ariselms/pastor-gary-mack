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

export function Book() {
	const { language } = useLanguageContext();
	const { user } = useAuthContext();

	const [loading, setLoading] = useState(true);
	const [book, setBook] = useState<StripeProduct | null>(null);
	const [userOwned, setUserOwned] = useState(false);

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
						: "Elija de los siguientes libros, solo haga clic en Comprar Ahora. Una vez compras el libro, podrás accesarlo desde tu panel de administración para leerlo en línea. Tendremos más libros disponibles pronto. Gracias por su apoyo!"
				}
			/>

			{loading ? (
				<Spinner />
			) : (
				<Container7xl>
					<ul className="text-slate-200 py-32">
						{book && <BookInfoCard book={book} isUserOwned={userOwned} />}
					</ul>
				</Container7xl>
			)}
		</>
	);
}
