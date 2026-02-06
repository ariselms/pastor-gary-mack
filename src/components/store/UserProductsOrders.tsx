"use client";

import { Container7xl } from "@/components/containers";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/helpers/client";

export function UserProductsOrders({
	userId,
	language,
	languageOptions
}: {
	userId: string;
	language: string;
	languageOptions: any;
}) {
	const [userOrders, setUserOrders] = useState<any[]>([]);

	useEffect(() => {
		if (userId) {
			const fetchOrders = async () => {
				try {
					const requestOrders = await fetch(
						`/api/user/orders?userId=${userId}`
					);
					const responseOrders = await requestOrders.json();
					console.log(responseOrders);
					if (responseOrders.success) {
						console.log(responseOrders.data);
						setUserOrders(responseOrders.data);
					} else {
						console.error(responseOrders.message);
					}
				} catch (error) {
					console.error(error);
				}
			};
			fetchOrders();
		}
	}, [userId]);

	return (
		<section className="py-8">
			<Container7xl>
				<h3 className="mb-4">
					{language === languageOptions.english
						? "Your Store Orders: "
						: "Tus Pedidos en la Tienda: "}
				</h3>
				<div>
					{userOrders.map((product: any, idx: number) => {
						return (
							<div
								key={product.id}
								className="flex flex-col gap-4 border-b border-slate-800 pb-8">
								<div className="flex items-center justify-between flex-wrap gap-4">
									<p>
										<strong>Total:</strong> {formatPrice(product?.order_total)}
									</p>
									<p>
										<strong>
											{language === languageOptions.english
												? "Status: "
												: "Estado: "}
										</strong>{" "}
										{product?.status}
									</p>
									<p>
										<strong>Tracking:</strong>{" "}
										{product?.tracking !== null ? (
											"not available"
										) : (
											<a href={product?.tracking_url}>{product?.tracking}</a>
										)}
									</p>
									<p>
										<strong>
											{" "}
											{language === languageOptions.english
												? "Purchased: "
												: "Ordenada: "}
										</strong>{" "}
										{new Date(product.created_at).toLocaleDateString(
											language === languageOptions.english ? "en-US" : "es-ES",
											{ year: "numeric", month: "short", day: "numeric" }
										)}
									</p>
								</div>
								{product?.line_items.map((item: any, index: number) => {
									return (
										<div
											className="bg-slate-700 p-4 rounded-lg flex"
											key={index}>
											<div className="relative h-48 w-48 shrink-0 bg-neutral-800 rounded-lg overflow-hidden border border-slate-700">
												<div key={index}>
													<Image
														width={200}
														height={200}
														src={item.product_image}
														alt="purchased product"
														className="h-full w-full object-cover"
													/>
												</div>
											</div>
											<div className="flex-4 px-4">
												{language === languageOptions.english
													? "Quantity: "
													: "Cantidad: "}
                        {item?.quantity}
											</div>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</Container7xl>
		</section>
	);
}
