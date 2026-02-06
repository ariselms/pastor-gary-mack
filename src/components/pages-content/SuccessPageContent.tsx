"use client";

import Spinner from "@/components/Spinner";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { useCartContext } from "@/context/cartContext";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";
import { Container7xl } from "@/components/containers";

export function StripeSuccessPageContent() {
  // hooks
  const {setCartItems} = useCartContext();
	const { language } = useLanguageContext();
	const { user } = useAuthContext();
	const router = useRouter();
	const params = useSearchParams();

  // state
	const sessionId = params.get("session_id");
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState<any | null>(null);

  // use effect to delete cart_items from local storage
  // TODO: remove
  useEffect(() => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  }, []);


	useEffect(() => {
		if (sessionId && user) {
			const fetchOrder = async () => {
				try {
					const requestOrder = await fetch(`/api/user/orders/${sessionId}`);
					const responseOrder = await requestOrder.json();

					if (responseOrder.success) {
						setOrder(responseOrder.data);
						setLoading(false);
					} else {
						router.push("/store"); // Redirect to store if fails
					}
				} catch (error) {
					console.error(error);
				}
			};
			fetchOrder();
		}
	}, [sessionId, user, router]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<Container7xl>
					<article className="w-full py-16 text-slate-100">
						<div className="flex items-center justify-between mb-8">
							<h1 className="text-3xl font-bold">
								{language === languageOptions.english
									? "Thank you for your order!"
									: "Gracias por tu orden!"}
							</h1>
							<Link
								className="w-fit inline-flex items-center font-medium text-white hover:text-slate-300 border-b-2 border-yellow-300"
								href="/profile">
								{language === languageOptions.english
									? "View Details"
									: "Ver Detalles"}
								<svg
									className="ml-2 -mr-1 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"></path>
								</svg>
							</Link>
						</div>
						{/* LIST OF PRODUCTS */}
						<div className="flex flex-col gap-8">
							{order.products.map((product: any, idx: number) => {
								console.log(product);
								return (
									<section
										key={product.id + idx}
										className="flex gap-6 flex-wrap md:flex-nowrap border-b border-slate-800 pb-8">
										<div className="relative h-48 w-48 shrink-0 bg-neutral-800 rounded-lg overflow-hidden border border-slate-700">
											<Image
												width={200}
												height={200}
												src={product.image}
												alt={product.name}
												className="h-full w-full object-contain"
											/>
										</div>

										<div className="flex flex-col justify-between flex-1 min-h-48">
											<div>
												<h2 className="text-2xl font-bold text-yellow-400">
													{product.name}
												</h2>
												<p className="text-lg text-slate-300 mt-2">
													{language === languageOptions.english
														? "Quantity: "
														: "Cantidad: "}{" "}
													{product.quantity}
												</p>
												<p className="text-xl font-semibold mt-1">
													${product.amount.toFixed(2)} USD
												</p>
											</div>
										</div>
									</section>
								);
							})}
						</div>
						{/* ORDER TOTAL FOOTER */}
						<div className="mt-10 p-6 bg-slate-900/50 rounded-xl border border-slate-800 flex justify-between items-center">
							<span className="text-xl font-bold">
								{language === languageOptions.english
									? "Total Paid"
									: "Total Pagado"}
							</span>
							<span className="text-3xl font-black text-yellow-400">
								${order.amount_total.toFixed(2)} USD
							</span>
						</div>
					</article>
				</Container7xl>
			)}
		</>
	);
}