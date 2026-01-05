"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions, availableBooks } from "@/static";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { JumbotronShared } from "@/components/jumbotron";
import Spinner from "@/components/Spinner";


export function EbookReader({ productId }: { productId: string }) {
	const { language } = useLanguageContext();
	const { user } = useAuthContext();
	const router = useRouter();

	const [loading, setLoading] = useState(true);
	const [book, setBook] = useState<any | null>(null);

	useEffect(() => {
		let isMounted = true;

		const initPageData = async () => {
			setLoading(true);

			try {
				// 1. Check if we have the required ID
				if (!productId) return;

				// --- STEP 1: Fetch the Book Metadata ---
				// FIX: Use 'productId' prop, not 'book.id'
				const bookReq = await fetch(`/api/books/${productId}`);
				const bookRes = await bookReq.json();

				if (bookRes.success) {
					const currentBook = bookRes.data;

					if (isMounted) setBook(currentBook);

					// --- STEP 2: Check Ownership ---
					if (user) {
						const ordersReq = await fetch(
							// FIX: Ensure you are passing the correct IDs
							`/api/user/orders/books/${productId}?userId=${user.id}`
						);
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
			} finally {
				if (isMounted) setLoading(false);
			}
		};

		// Run the function
		initPageData();

		return () => {
			isMounted = false;
		};
		// FIX: Remove 'book' from dependencies to avoid infinite loops
	}, [productId, user, router]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<JumbotronShared
						topSmTitle={
							language === languageOptions.english
								? "You are reading your book"
								: "Estás leyendo tu libro"
						}
						mainTitle={book?.name || ""}
						mainText={book?.description || ""}
					/>

					{book.name === availableBooks.GaryMack.Spanish.MentalidadDeMangosta && (
						<iframe
							style={{ height: "100vh" }}
							allowFullScreen={true}
							src="https://designrr.page/?id=476859&token=1040907110&type=FP&h=9917"
							height="600"
							width="100%"></iframe>
					)}

					{book.name === availableBooks.GaryMack.English.MongooseMentality && (
						<iframe
							style={{ height: "100vh" }}
							allowFullScreen={true}
							src="https://designrr.page/?id=476860&token=2494106008&type=FP&h=5453"
							height="600"
							width="100%"></iframe>
					)}
				</>
			)}
		</>
	);
}
