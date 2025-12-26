"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Container7xl } from "@/components/containers";
import Spinner from "../Spinner";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";

export function StripeSuccessPageContent() {
	const { language } = useLanguageContext();
	const { user } = useAuthContext();
	const router = useRouter();

	const params = useSearchParams();
	const sessionId = params.get("session_id");

	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState<any | null>(null);

	useEffect(() => {
		if (sessionId && user) {
			const fetchOrder = async () => {
				try {
					const requestOrder = await fetch(`/api/user/orders/${sessionId}`);

					const responseOrder = await requestOrder.json();

					if (responseOrder.success) {
						// console.log("Order response: ", responseOrder.data);
						setOrder(responseOrder.data);
						setLoading(false);
					} else {
						router.push("/books");
					}
				} catch (error) {
					console.error(error);
				}
			};

			fetchOrder();
		}

		// cleanup
		return () => {};
	}, [sessionId, user]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<Container7xl>
					<article className="w-full py-16 text-slate-100">
						<h1 className="mb-4">
							{language === languageOptions.english
								? "Order Completed"
								: "Orden Completada"}
						</h1>
						<p>
							<strong>
								{language === languageOptions.english
                  ? "By: "
                  : "Por: "}
							</strong>{" "}
							{user?.name}
						</p>
						<p>
							<strong>Id:</strong> {sessionId}
						</p>
						<section className="flex gap-4 flex-wrap mt-10 h-full">
							<img
								src={order.products[0].image}
								className="h-48 w-32 object-cover rounded-sm"
							/>

							{/* 2. Added 'flex-1' to ensure it takes up remaining width */}
							{/* The container now stretches to match the image height (h-48) */}
							<div className="flex flex-col justify-between flex-1 min-h-[12rem]">
								<div>
									<p className="text-2xl font-bold">
										{language === languageOptions.english
											? "Book: "
											: "Libro: "}{" "}
										{order.products[0].description}
									</p>
									<p className="text-xl text-slate-200 mt-1">
										Total: ${order.amount_total} USD
									</p>
									<p className="text-sm text-slate-200 mt-1">
										{language === languageOptions.english
											? "Delivery Method: "
											: "Método de Entrega: "}
										{"Lectura Digital"}
									</p>
								</div>
								{/* 3. Link now pushes to the bottom of the 12rem (h-48) container */}
								<Link
									className="block relative rounded-lg text-center font-medium focus:outline-none focus:ring-4 px-5 py-3 text-sm bg-slate-700 text-white hover:bg-slate-800 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 w-fit"
									// use the product id
									href={`/profile/orders/books/read/${order.products[0].id}`}>
									Leer Ahora &rarr;
								</Link>
							</div>
						</section>
					</article>
				</Container7xl>
			)}
		</>
	);
}
