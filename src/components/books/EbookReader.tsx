// TODO: Consider adding the purchased book language to the order table
"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { JumbotronShared } from "@/components/jumbotron";

export function EbookReader({ productId }: { productId: string }) {
	const { language } = useLanguageContext();
	const { user } = useAuthContext();
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const [book, setBook] = useState<any | null>(null);
	const [userOwned, setUserOwned] = useState(false);

	useEffect(() => {
		if (language) {
			const fetchDigitalBook = async () => {
				try {
					const requestBook = await fetch(
						`/api/books/${
							language === languageOptions.english
								? process.env.NEXT_PUBLIC_MENTALIDAD_DE_MANGOSTA_EN
								: process.env.NEXT_PUBLIC_MENTALIDAD_DE_MANGOSTA_ES
						}`
					);

					const responseBook = await requestBook.json();

					if (responseBook.success) {
						setBook(responseBook.data);

						setLoading(false);
					}
				} catch (error) {
					console.error(error);
				}
			};

			fetchDigitalBook();
		}

		// cleanup
		return () => {
			setBook(null);
		};
	}, [language]);

	useEffect(() => {

		if (user && book) {
			const checkIfUserOwnsBook = async () => {
				try {
					const requestUserOrders = await fetch(
						`/api/user/orders?userId=${user.id}&productId=${book?.id}`
					);

					const responseUserOrders = await requestUserOrders.json();

					if (responseUserOrders.success) {

						const userOrders = responseUserOrders.data;

						if (userOrders.length > 0 && book) {
							// check if there is an order with the session_id
							const isPurchased = userOrders.filter(
								(order: any) => order.stripe_product_id === book.id
							);

							if (isPurchased.length > 0) {
								setUserOwned(true);
							} else {
								router.push("/books");
							}
						}
					} else {

            router.push("/books");

          }
				} catch (error) {
					console.error(error);
				}
			};

			checkIfUserOwnsBook();
		}
	}, [user]);

	return (
		<>
			<JumbotronShared
				topSmTitle="Pastor Gary Mack"
				mainTitle={book?.name}
				mainText={book?.description}
			/>
			<iframe
				style={{
					height: "100vh"
				}}
				src="https://designrr.page/?id=598561&token=1449435590&h=2154"
				height={"100vh"}
				width={"100%"}
			/>
		</>
	);
}
