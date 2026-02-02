"use client";

import Image from "next/image";
import { useState, useEffect } from "react"; // Added useEffect
import { useCartContext } from "@/context/cartContext";
import { formatPrice } from "@/helpers/client";
import { DrawerTheme } from "@/theme";
import { ShoppingCartIcon, Minus, Plus, Trash } from "lucide-react";
import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { Container7xl } from "@/components/containers";

export default function CartContextRootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const { cartItems, removeFromCart, updateQuantity, cartTotal, showCartCheckout, setShowCartCheckout } =
		useCartContext();

	// FIX: Hydration Guard
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			<Container7xl>
				<div className="relative text-white">
					<span className="absolute left-0 top-4">
						<ShoppingCartIcon
							className="w-8 h-8 cursor-pointer relative"
							onClick={() => setShowCartCheckout(true)}
						/>
					</span>
					{cartItems.length > 0 && (
						<span className="absolute left-4 top-2 bg-white w-6 h-6 rounded-full text-slate-800 font-bold font-xl flex items-center justify-center border-2 border-yellow-300">
							{cartItems.length}
						</span>
					)}
				</div>
			</Container7xl>

			{children}

			{/* FIX: Only render the Drawer if mounted is true.
         This prevents the server from generating a different ID than the client.
      */}
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
								<p className="text-slate-500">
									Your cart is empty. Please add products to be able to
									checkout.
								</p>
							) : (
								cartItems.map((item: any) => (
									<li key={item?.variant?.id} className="w-full">
										<div className="flex items-start gap-4">
											<div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-md bg-slate-100">
												<Image
													src={item?.variant?.images[0]}
													alt={item?.variant?.title}
													fill
													className="object-cover"
												/>
											</div>
											<div className="w-full">
												<span className="block font-bold text-slate-800 dark:text-white">
													{item?.variant?.title}
												</span>
												<span className="block mb-2 text-slate-600 dark:text-slate-400">
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
						<div className="flex justify-between items-center text-xl font-black text-slate-900 dark:text-white">
							<span>Total:</span>
							<span>{formatPrice(cartTotal)}</span>
						</div>

						{cartItems.length > 0 && (
							<button className="w-full mt-6 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-black py-4 rounded-xl uppercase tracking-wider transition-all">
								Proceed to Checkout
							</button>
						)}
					</DrawerItems>
				</Drawer>
			)}
		</>
	);
}
