"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"; // Added useEffect
import { useCartContext } from "@/context/cartContext";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { formatPrice } from "@/helpers/client";
import { DrawerTheme } from "@/theme";
import { ShoppingCartIcon, Minus, Plus, Trash } from "lucide-react";
import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";

export default function ShoppingCart() {
  const { language } = useLanguageContext();
	const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    showCartCheckout,
    setShowCartCheckout
  } = useCartContext();

	// FIX: Hydration Guard
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="relative">
			<ShoppingCartIcon
				className="w-8 h-8 cursor-pointer text-white"
				onClick={() => setShowCartCheckout(true)}
			/>
			{cartItems.length > 0 && (
				<span className="absolute -left-2 -top-2 bg-white w-4 h-4 rounded-full text-slate-800 font-bold text-sm flex items-center justify-center border-2 border-yellow-300">
					{cartItems.length}
				</span>
			)}

			{mounted && (
				<Drawer
					theme={DrawerTheme}
					open={showCartCheckout}
					onClose={() => setShowCartCheckout(false)}
					position="right"
					className="w-full lg:w-6/12">
					<DrawerHeader title="Checkout" titleIcon={() => <></>} />
					<DrawerItems>
						<ul className="flex flex-col gap-4">
							{cartItems.length === 0 ? (
								<div>
									<div className="py-16 flex flex-col items-center">
										<Image
											src="/images/shopping-cart.svg"
											alt="shopping cart"
											width={200}
											height={200}
											className="mx-auto"
										/>
										<p className="text-slate-500 mb-4">
											{language === languageOptions.english
												? "Your cart is empty. Please add products to be able to checkout."
												: "Tu carrito de compras está vacío. Por favor, agregue productos para poder realizar el checkout."}
										</p>
										<Link
											onClick={() => setShowCartCheckout(false)}
											href="/store"
											className="rounded-lg text-center text-lg font-medium focus:outline-none focus:ring-4 px-5 py-3 bg-yellow-300 text-slate-800 hover:bg-yellow-400 focus:ring-yellow-300  w-fit cursor-pointer inline-block mt-4 md:mt-0 transition-all">
											{language === languageOptions.english
												? `Go to the store`
												: `Ir a la tienda`}
										</Link>
									</div>
								</div>
							) : (
								cartItems.map((item: any) => (
									<li key={item?.variant?.id} className="w-full">
										<div className="flex items-start gap-4">
											<div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-md bg-slate-100">
												<Image
													src={item?.variant?.images[0]}
													alt={item?.variant?.title}
													width={200}
													height={200}
													className="object-cover"
												/>
											</div>
											<div className="w-full">
												<span className="block font-bold text-slate-800 dark:text-white">
													{item?.productName}
												</span>
												<span className="block mb-2 text-slate-600 dark:text-slate-400">
													{item?.variant?.title}{" - "}
													{formatPrice(item?.variant?.price)}
												</span>
												<div className="flex items-center gap-4">
													{item?.quantity === 1 ? (
														<button
															className="text-red-500 hover:text-red-700"
															onClick={() => removeFromCart(item?.variant?.id)}>
															<Trash size={18} />
														</button>
													) : (
														<button
															className="p-1 border rounded hover:bg-slate-100 dark:hover:bg-slate-800"
															onClick={() =>
																updateQuantity(
																	item?.variant?.id,
																	item?.quantity - 1
																)
															}>
															<Minus size={16} />
														</button>
													)}
													<span className="font-mono font-bold text-slate-900 dark:text-white">
														{item?.quantity}
													</span>
													<button
														className="p-1 border rounded hover:bg-slate-100 dark:hover:bg-slate-800"
														onClick={() =>
															updateQuantity(
																item?.variant?.id,
																item?.quantity + 1
															)
														}>
														<Plus size={16} />
													</button>
												</div>
											</div>
										</div>
									</li>
								))
							)}
						</ul>
						<hr className="my-6 border-slate-200 dark:border-slate-700" />

						{cartItems.length > 0 && (
							<>
								<div className="flex justify-between items-center text-xl font-black text-slate-900 dark:text-white">
									<span>Total:</span>
									<span>{formatPrice(cartTotal)}</span>
								</div>
								<button className="w-full mt-6 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-black py-4 rounded-xl uppercase tracking-wider transition-all">
									Proceed to Checkout
								</button>
							</>
						)}
					</DrawerItems>
				</Drawer>
			)}
		</div>
	);
}
