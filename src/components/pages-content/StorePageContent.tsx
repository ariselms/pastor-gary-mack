"use client";

import Link from "next/link";
import Spinner from "@/components/Spinner";
import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguageContext } from "@/context/languageContext";
import { languageOptions } from "@/static";
import { formatPrice } from "@/helpers/client";
import { ArrowUpDown, Filter, X } from "lucide-react";

export default function StoreHomePageContent({
	ProductsData
}: {
	ProductsData: any;
}) {
	const { language } = useLanguageContext();
	const router = useRouter();
	const searchParams = useSearchParams();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [allTagsSpanish, setAllTagsSpanish] = useState<any>(null);
	const [isLoadingSpanishTags, setIsLoadingSpanishTags] =
		useState<boolean>(false);

	const activeTag = searchParams.get("tag") || "All";
	const sortBy = searchParams.get("sort") || "newest";
	const products = ProductsData?.data || [];

	const allTags = useMemo(() => {
		const tags = new Set(["All"]);
		products.forEach((p: any) => p.tags.forEach((t: string) => tags.add(t)));
		return Array.from(tags);
	}, [products]);

	const translateTags = async (tags: string[]) => {
		try {
			setIsLoadingSpanishTags(true);

			const requestTranslateTags = await fetch("/api/store/translate", {
				cache: "no-store",
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ tags })
			});

			if (!requestTranslateTags.ok) {
				console.log(requestTranslateTags.statusText);
			}

			const responseTranslateTags = await requestTranslateTags.json();

			setAllTagsSpanish(responseTranslateTags?.data);

			return responseTranslateTags.data;
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoadingSpanishTags(false);
		}
	};

	useEffect(() => {
		const fetchTranslatedTags = async () => {
			await translateTags(allTags);
		};

		fetchTranslatedTags();
	}, [allTags]);

	const filteredProducts = useMemo(() => {
		let list = [...products];
		if (activeTag !== "All")
			list = list.filter((p) => p.tags.includes(activeTag));
		if (sortBy === "price-low")
			list.sort((a, b) => a.variants[0].price - b.variants[0].price);
		else if (sortBy === "price-high")
			list.sort((a, b) => b.variants[0].price - a.variants[0].price);
		else if (sortBy === "az")
			list.sort((a, b) => a.title.localeCompare(b.title));
		return list;
	}, [products, activeTag, sortBy]);

	const handleUpdateQuery = (key: string, value: string) => {
		setIsLoading(true);
		const params = new URLSearchParams(searchParams.toString());
		params.set(key, value);
		if (key !== "page") params.set("page", "1");
		router.push(`?${params.toString()}`, { scroll: false });
		setIsMobileMenuOpen(false);
	};

	useEffect(() => {
		setIsLoading(false);
	}, [ProductsData, searchParams]);

	return (
		<div className="relative min-h-screen text-slate-100">
			{/* OVERLAY SPINNER:
          This will only show when isLoading is true.
          The 'animate-in' makes the transition smoother.
      */}
			{isLoading && (
				<div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-sm transition-all duration-300 animate-in fade-in">
					<div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col items-center">
						<Spinner />
						<p className="text-yellow-300 font-bold uppercase tracking-widest text-xs mt-4 animate-pulse">
							{language === languageOptions.english
								? "Updating"
								: "Actualizando"}
						</p>
					</div>
				</div>
			)}

			<section className="container mx-auto px-4 py-8">
				{/* Header Section */}
				<div className="flex items-end justify-between mb-8 border-b border-slate-700 pb-6">
					<div>
						<h1 className="text-3xl font-black uppercase tracking-wider text-slate-100">
							{language === languageOptions.english ? "Store" : "Tienda"}
						</h1>
						<p className="text-slate-200 text-sm mt-1">
							{filteredProducts.length}{" "}
							{language === languageOptions.english ? "products" : "productos"}
						</p>
					</div>

					<div className="flex items-center gap-4">
						<button
							onClick={() => setIsMobileMenuOpen(true)}
							className="md:hidden flex items-center gap-2 px-5 py-3 bg-yellow-300 text-slate-800 hover:bg-yellow-400 focus:ring-yellow-300 rounded-lg">
							<Filter className="w-4 h-4" />
							{language === languageOptions.english ? "Filter" : "Filtrar"}
						</button>

						<div className="hidden md:flex items-center gap-3 px-5 py-3 bg-yellow-300 text-slate-800 hover:bg-yellow-400 focus:ring-yellow-300 rounded-lg">
							<ArrowUpDown className="w-4 h-4 text-slate-800" />
							<select
								value={sortBy}
								onChange={(e) => handleUpdateQuery("sort", e.target.value)}
								className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer p-0 pr-8">
								<option value="newest">
									{language === languageOptions.english
										? "Newest"
										: "Más Reciente"}
								</option>
								<option value="price-low">
									{language === languageOptions.english
										? "Price: Low"
										: "Precio: Bajo"}
								</option>
								<option value="price-high">
									{language === languageOptions.english
										? "Price: High"
										: "Precio: Alto"}
								</option>
								<option value="az">A-Z</option>
							</select>
						</div>
					</div>
				</div>

				<div className="flex gap-10">
					<aside className="hidden md:block w-64 shrink-0">
						<div className="sticky top-24 space-y-8">
							<div>
								<h3 className="text-base uppercase tracking-widest font-black text-slate-100 mb-4">
									{language === languageOptions.english ? "Tags" : "Etiquetas"}
								</h3>
								<div className="flex flex-col gap-1">
									{language === languageOptions.english &&
										allTags.map((tag: any) => (
											<button
												key={tag}
												onClick={() => handleUpdateQuery("tag", tag)}
												className={`text-left py-2.5 rounded-xl text-sm font-bold transition-all ${
													activeTag === tag
														? "px-4 bg-yellow-300 text-slate-800"
														: "text-slate-300 hover:bg-yellow-300 hover:text-slate-900 hover:px-4"
												}`}>
												{tag}
											</button>
										))}
									{language === languageOptions.spanish &&
									isLoadingSpanishTags ? (
										<div className="flex flex-col items-center justify-center">
											<small className="inline-block text-center">
												Traduciendo Etiquetas...
											</small>
											<Spinner />
										</div>
									) : (
										allTagsSpanish?.map((tag: any) => (
											<button
												key={tag.id}
												data-tag-value={tag.english}
												onClick={(e) => {
													const value = e.currentTarget.dataset.tagValue;
													if (value) handleUpdateQuery("tag", value);
												}}
												className={`text-left py-2.5 rounded-xl text-sm font-bold transition-all ${
													activeTag === tag.english
														? "px-4 bg-yellow-300 text-slate-800"
														: "text-slate-300 hover:bg-yellow-300 hover:text-slate-900 hover:px-4"
												}`}>
												{tag?.spanish}
											</button>
										))
									)}
								</div>
							</div>
						</div>
					</aside>

					<div className="flex-1">
						<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
							{filteredProducts.map((product: any) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</div>
				</div>
			</section>

			{/* MOBILE FILTER MENU (SHEET OVERLAY) */}

			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-50 md:hidden">
					<div
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						onClick={() => setIsMobileMenuOpen(false)}
					/>

					<div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6 flex flex-col transition-transform animate-in slide-in-from-right">
						<div className="flex items-center justify-between mb-8">
							<h2 className="text-xl text-slate-800 font-black uppercase">
								{language === languageOptions.english ? "Filter" : "Filtrar"}
							</h2>

							<button
								onClick={() => setIsMobileMenuOpen(false)}
								className="p-2 bg-red-700 hover:bg-red-800 rounded-full transition-all">
								<X className="w-5 h-5" />
							</button>
						</div>

						<div className="mb-8">
							<h3 className="text-base font-black uppercase text-slate-800 tracking-widest mb-4">
								{language === languageOptions.english
									? "Sort By"
									: "Ordenar por"}
							</h3>

							<div className="grid grid-cols-2 gap-2">
								{["newest", "price-low", "price-high", "az"].map((opt) => (
									<button
										key={opt}
										onClick={() => handleUpdateQuery("sort", opt)}
										className={`px-4 py-3 rounded-xl text-xs font-bold border ${sortBy === opt ? "text-center p-4 rounded-2xl font-bold border-2 transition-all bg-yellow-300 border-yellow-300 text-black" : "text-center p-4 rounded-2xl font-bold border-2 transition-all border-slate-100 text-slate-600"}`}>
										{opt.replace("-", " ").toUpperCase()}
									</button>
								))}
							</div>
						</div>

						<div className="flex-1 overflow-y-auto space-y-8">
							<div>
								<h3 className="text-base font-black uppercase text-slate-700 tracking-widest mb-4">
									{language === languageOptions.english
										? "Categories"
										: "Categorías"}
								</h3>

								<div className="grid grid-cols-1 gap-2">
									{language === languageOptions.english &&
										allTags.map((tag) => (
											<button
												key={tag}
												onClick={() => handleUpdateQuery("tag", tag)}
												className={`text-left p-4 rounded-2xl font-bold border-2 transition-all ${
													activeTag === tag
														? "bg-yellow-300 border-yellow-300 text-black"
														: "border-slate-100 text-slate-600"
												}`}>
												{tag}
											</button>
										))}
									{language === languageOptions.spanish &&
										allTagsSpanish.map((tag: any) => (
											<button
												key={tag.id}
												data-tag-value={tag.english}
												onClick={() => handleUpdateQuery("tag", tag.english)}
												className={`text-left p-4 rounded-2xl font-bold border-2 transition-all ${
													activeTag === tag.english
														? "bg-yellow-300 border-yellow-300 text-black"
														: "border-slate-100 text-slate-600"
												}`}>
												{tag.spanish}
											</button>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

const ProductCard = ({ product }: any) => {
	const { language } = useLanguageContext();

	const prices = product.variants.map((v: any) => v.price);
	const minPrice = Math.min(...prices);
	const maxPrice = Math.max(...prices);

	// 1. Identify if multiple colors exist
	const colorOptions = useMemo(() => {
		const colorGroup = product.options?.find(
			(opt: any) => opt.type === "color"
		);
		return colorGroup?.values || [];
	}, [product]);

	const hasMultipleColors = colorOptions.length > 1;

	const displayImage =
		product.images.find((i: any) => i.is_default)?.src ||
		product.images[0]?.src;

	return (
		<Link
			href={`/store/${product.id}`}
			className="group p-4 border border-slate-700 rounded-lg bg-slate-800/50 backdrop-blur-lg shadow-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
			<div className="aspect-4/5 overflow-hidden relative rounded-md bg-slate-900">
				<img
					src={displayImage}
					alt={product.title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>

				<div className="absolute bottom-1 right-1">
					{hasMultipleColors && (
						<span className="flex flex-col justify-between gap-1 bg-slate-900/80 backdrop-blur-md text-slate-100 text-[10px] font-black uppercase tracking-tighter px-2 pt-0.5 pb-2 rounded border border-slate-700/50">
							{language === languageOptions.english
								? "Multiple Colors Available"
								: "Varios Colores Disponibles"}
							<div className="flex justify-end-safe gap-1">
								<span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
								<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
								<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
								<span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
							</div>
						</span>
					)}
				</div>
			</div>

			<div className="pt-5 flex-1 flex flex-col">
				{language === languageOptions.english && (
					<div className="flex items-center justify-between mb-2">
						{product.tags.slice(0, 1).map((tag: string) => (
							<span
								key={tag}
								className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">
								{tag}
							</span>
						))}
					</div>
				)}

				<h3
					style={{ fontSize: "20px" }}
					className="font-bold text-slate-100 leading-tight mb-2 group-hover:text-slate-300 transition-colors line-clamp-3">
					{product.title}
				</h3>

				<div className="mt-auto flex items-center justify-between">
					<span className="inline-block text-yellow-300 font-bold text-xl">
						{minPrice === maxPrice
							? formatPrice(minPrice)
							: `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`}
					</span>
				</div>
			</div>
		</Link>
	);
};
