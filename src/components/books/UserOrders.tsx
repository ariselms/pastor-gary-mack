"use client";

import { useEffect, useState } from "react";
import { UserType } from "@/types/userTypes";
import Link from "next/link";

export function UserOrders({ user }: { user: UserType }) {
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

	console.log(userOrders);

	// userOrders?.length === 0 && (
	// 		<div className="py-8 text-slate-100 text-center w-full">
	// 			Aún no has completado una compra, visita la página de libros para
	// 			comprar uno.
	// 		</div>
	// 	)

  console.log(userOrders)

	return (
		<section>
			{userOrders == null && (
				<div className="py-8 text-slate-100 text-center w-full">
					Aún no has completado una compra, visita la <Link className="text-slate-100 underline" href="/books">página de libros</Link> para
					comprar uno.
				</div>
			)}
			<div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
				{userOrders &&
					userOrders?.length > 0 &&
					userOrders?.map((order) => (
						<div
							key={order.id}
							className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
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
									<span className="rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300 text-center mx-auto">
										Por Pastor Gary Mack
									</span>
								</div>
								<Link
									href={`/profile/orders/books/read/${order.stripe_product_id}`}
									className="text-2xl font-semibold leading-tight text-gray-900 hover:underline dark:text-white underline">
									Leer {order?.stripe_product_name}
								</Link>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}
