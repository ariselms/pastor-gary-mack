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

    if(user && book){

      const checkIfUserOwnsBook = async () => {
        try{
          const requestUserOrders = await fetch(`/api/user/orders?userId=${user.id}&productId=${book?.id}`)

          const responseUserOrders = await requestUserOrders.json()

          if(responseUserOrders.success){

            const userOrders = responseUserOrders.data

            if(userOrders.length > 0 && book){
              // check if there is an order with the session_id
              const isPurchased = userOrders.filter((order:any) => order.stripe_product_id === book.id)

              if(isPurchased.length > 0){
                setUserOwned(true)
              }
            }
          }
        } catch (error) {
          console.error(error);
        }
      }

      checkIfUserOwnsBook();
    }
  },[user, book])

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
						{book && (
							<>
								<BookInfoCard book={book} isUserOwned={userOwned} />
							</>
						)}
					</ul>
				</Container7xl>
			)}
		</>
	);
}
