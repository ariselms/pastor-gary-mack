"use client";
import { useState } from "react";
import { StripeProduct } from "@/types/bookTypes";
import { MaxTextWidth } from "@/components/containers";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export function CoreValuesCard({ item }: { item: any }) {
	return (
		<div className="flex-1 p-4 border border-slate-700 rounded-lg bg-slate-800/50 backdrop-blur-lg">
			<p className="text-slate-200 font-semibold mb-2">
				<span className="text-amber-400">{item.coreValue}</span>
			</p>
			<p className="text-slate-200 text-sm leading-relaxed mb-4 opacity-90">
				{item.belief}
			</p>
			<br />
			<p className="text-xs text-slate-200 italic border-l-2 border-slate-500 opacity-75">
				<span className="inline-block pl-3">"{item.verse}"</span>
			</p>
		</div>
	);
}

export function BookInfoCard({
	book,
	isUserOwned
}: {
	book: StripeProduct;
	isUserOwned: boolean;
}) {
	const { user } = useAuthContext();

	const router = useRouter();

	const { language } = useLanguageContext();
	const [loading, setLoading] = useState(false);

	const formatBookPrice = () => {
		let price;

		if (book?.default_price?.unit_amount) {
			price = book?.default_price.unit_amount / 100;
		}

		const formatter = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD"
		});

		return formatter.format(price ?? 0);
	};

	const handleCheckout = async () => {
		// check if there is user or not
		if (!user) {
			const toastMessage =
				language === languageOptions.english
					? "You must login to make a purchase"
					: "Debe iniciar sesión para realizar una compra";

			toast.warn(toastMessage);

			router.push("/login");

			return;
		}

		setLoading(true);

		try {
			// 1. Call our API to create the session
			const response = await fetch("/api/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ book, user })
			});

			const data = await response.json();

			if (!response.ok) throw new Error(data.error);

			// 2. Redirect user to the Stripe URL returned by our API
			if (data.url) {
				window.location.href = data.url;
			}
		} catch (error) {
			console.error("Checkout Failed:", error);
			alert("Checkout failed. Check console for details.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex-1 p-4 border border-slate-700 rounded-lg bg-slate-800/50 backdrop-blur-lg flex gap-4">
			{/* 1. Image on the Left */}
			{/* Added w-32 (fixed width) and object-cover so it doesn't distort */}
			<img
				src={book.images[0]}
				alt={book.name}
				className="w-48 h-74 object-cover rounded-md flex-shrink-0"
			/>

			{/* 2. Text and Button on the Right */}
			{/* flex-1 ensures it takes remaining width. flex-col stacks content vertically. */}
			<div className="flex flex-col flex-1 justify-between">
				<div>
          {isUserOwned && language === languageOptions.english
            ? "(You own this)"
            : "(Ya tienes este libro)"}
					<h2 className="mb-2 text-lg font-bold text-white block">
						{book.name}
					</h2>
					<MaxTextWidth>
						<p className="text-sm text-slate-300">{book.description}</p>
					</MaxTextWidth>
				</div>

				{/* 3. Button Pushed to Bottom */}
				{/* mt-auto pushes the button to the bottom of the flex container */}
				{isUserOwned ? (
					<Link
						href={`/profile/orders/books/read/${book.id}`}
						className="relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4 h-10 px-5 text-sm bg-slate-700 text-white hover:bg-slate-800 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 w-fit cursor-pointer">
						{language === languageOptions.english ? "Read Now" : "Leer Ahora"}
					</Link>
				) : (
					<button
						onClick={handleCheckout}
						disabled={loading}
						className="relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4 h-10 px-5 text-sm bg-slate-700 text-white hover:bg-slate-800 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 w-fit cursor-pointer">
						{language === languageOptions.english
							? `Buy Now ${formatBookPrice()}`
							: `Comprar Ahora ${formatBookPrice()}`}
					</button>
				)}
			</div>
		</div>
	);
}
