"use client";

import { useEffect, useState } from "react";
import { UserType } from "@/types/userTypes";
import Link from "next/link";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static/";

export function UserOrders({ user }: { user: UserType }) {

  const { language } = useLanguageContext();

	const [userOrders, setUserOrders] = useState<any[] | null>(null);

	useEffect(() => {
		if (user?.id) {
			// Check for ID specifically
			const fetchUserOrders = async () => {
				// 👇 Move try/catch inside the async function
				try {
					// Check if the URL matches your comment: /api/user/orders OR /api/user/orders/books
					const userOrdersReq = await fetch(
						`/api/user/orders/books?userId=${user.id}`
					);

					const userOrdersRes = await userOrdersReq.json();

					if (userOrdersRes.success) {
						setUserOrders(userOrdersRes.data);
					}
				} catch (error) {
					console.error("Failed to fetch orders:", error);
				}
			};

			fetchUserOrders();
		}
	}, [user]);

	return (
		<section className="py-8">
			{userOrders == null && (
				<div className="text-slate-100 text-center w-full">
					Aún no has completado una compra, visita la{" "}
					<Link className="text-slate-100 underline" href="/books">
						página de libros
					</Link>{" "}
					para comprar uno.
				</div>
			)}
			<div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
				{userOrders &&
					userOrders?.length > 0 &&
					userOrders?.map((order) => (
						<div
							key={order.id}
							className="border border-slate-700 rounded-lg bg-slate-800/50 backdrop-blur-lg p-6">
							<div className="h-56 w-full">
								<Link
									href={`/profile/orders/books/read/${order.stripe_product_id}`}>
									<img
										className="mx-auto h-full dark:hidden"
										src="https://files.stripe.com/links/MDB8YWNjdF8xU2FmUnFJS2Z6cVlodU5nfGZsX3Rlc3Rfdmlud05TeHpBWk90dzBWV1BTREFvbEw500O6Oc60Ll"
										alt=""
									/>
									<img
										className="mx-auto hidden h-full dark:block"
										src="https://files.stripe.com/links/MDB8YWNjdF8xU2FmUnFJS2Z6cVlodU5nfGZsX3Rlc3Rfdmlud05TeHpBWk90dzBWV1BTREFvbEw500O6Oc60Ll"
										alt=""
									/>
								</Link>
							</div>
							<div className="pt-6 text-center">
								<div className="mb-4 flex items-center justify-between">
									<span className="rounded bg-slate-300 px-2.5 py-0.5 text-xs font-medium text-slate-800 text-center mx-auto">
										{language === languageOptions.english ? "By " : "Por "}{" "}
										Pastor Gary Mack
									</span>
								</div>
								<Link
									href={`/profile/orders/books/read/${order.stripe_product_id}`}
									className="text-2xl font-semibold leading-tight text-slate-200 hover:underline underline">
									{language === languageOptions.english ? "Read " : "Leer "}{" "}
									{order?.stripe_product_name}
								</Link>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}
