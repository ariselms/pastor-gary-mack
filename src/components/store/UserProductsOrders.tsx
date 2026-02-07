"use client";

import { Container7xl } from "@/components/containers";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/helpers/client";
import Link from "next/link";

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
					if (responseOrders.success) {
						setUserOrders(responseOrders.data);
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
				{userOrders.length === 0 ? (
					<p className="text-slate-400 italic">
						{language === languageOptions.english
							? "Your store purchases will show here."
							: "Tus compras en la tienda aparecerán aquí."}
					</p>
				) : (
					<div className="space-y-12">
						<h3 className="text-2xl font-bold border-b border-slate-800 pb-4">
							{language === languageOptions.english
								? "Your Store Orders"
								: "Tus Pedidos en la Tienda"}
						</h3>

						{userOrders.map((order: any) => (
							<div key={order.id} className="flex flex-col gap-2">
								{/* RESPONSIVE ORDER HEADER */}
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-slate-900/50 p-4 rounded-lg border border-slate-800">
									<div>
										<p className="text-slate-500 uppercase text-xs font-bold tracking-wider">
											Total
										</p>
										<p className="font-semibold">
											{formatPrice(order?.order_total)}
										</p>
									</div>
									<div>
										<p className="text-slate-500 uppercase text-xs font-bold tracking-wider">
											{language === languageOptions.english ? "Date" : "Fecha"}
										</p>
										<p>
											{new Date(order.created_at).toLocaleDateString(
												language === languageOptions.english
													? "en-US"
													: "es-ES",
												{ year: "numeric", month: "short", day: "numeric" }
											)}
										</p>
									</div>
									<div>
										<p className="text-slate-500 uppercase text-xs font-bold tracking-wider">
											{language === languageOptions.english
												? "Status"
												: "Estado"}
										</p>
										<span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-yellow-400 border border-yellow-900/50 text-xs">
											{order?.status}
										</span>
									</div>
									<div>
										<p className="text-slate-500 uppercase text-xs font-bold tracking-wider">
											Tracking
										</p>
										{order?.tracking_number ? (
											<a
												href={order?.tracking_url}
												target="_blank"
												className="text-cyan-400 hover:underline truncate block">
												{order?.tracking_number}
											</a>
										) : (
											<p className="text-slate-400 italic">N/A</p>
										)}
									</div>
								</div>

								{/* LINE ITEMS */}
								<div className="space-y-4">
									{order?.line_items.map((item: any, index: number) => (
										<div
											key={index}
											className="p-4 flex flex-col sm:flex-row gap-4 border border-slate-700 rounded-lg bg-slate-800/30 backdrop-blur-sm">
											{/* Image - Centered on mobile, shrink-0 on desktop */}
											<div className="relative h-32 w-32 mx-auto sm:mx-0 shrink-0 bg-neutral-800 rounded-lg overflow-hidden border border-slate-700">
												<Image
													fill
													src={item.product_image}
													alt="purchased product"
													className="object-cover"
												/>
											</div>

											{/* Content Area */}
											<div className="flex flex-col flex-1">
												<div className="flex justify-between items-start gap-2">
													<div>
														<h4 className="text-lg font-bold leading-tight">
															{item?.product_name}
														</h4>
														<p className="text-sm text-slate-400">
															{item?.variant_name}
														</p>
													</div>
												</div>

												{/* Bottom Row - Stacks on mobile */}
												<div className="mt-auto pt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
													<div className="text-sm space-y-1">
														<p className="text-slate-300">
															<span className="text-slate-500">
																{language === languageOptions.english
																	? "Qty: "
																	: "Cant: "}
															</span>
															{item?.quantity}
														</p>
														<p className="font-bold text-slate-100">
															{formatPrice(item?.product_total)}
														</p>
													</div>

													<Link
														className="inline-flex items-center justify-center font-medium text-yellow-300 hover:text-yellow-200 transition-colors text-sm"
														href={`/store/${item?.product_id}`}>
														{language === languageOptions.english
															? "View Product"
															: "Ver producto"}
														<svg
															className="ml-1 w-4 h-4"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24">
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M9 5l7 7-7 7"
															/>
														</svg>
													</Link>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				)}
			</Container7xl>
		</section>
	);
}
