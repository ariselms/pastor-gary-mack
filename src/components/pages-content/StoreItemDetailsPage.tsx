"use client";

import Image from "next/image";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import { useState, useEffect, useMemo } from "react";
import { useLanguageContext } from "@/context/languageContext";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { usePathname } from "next/navigation";
import { serverBaseUrl } from "@/static";
import { formatPrice } from "@/helpers/client";
import { languageOptions } from "@/static";
import { Container7xl } from "@/components/containers";
import { ModalToPromptUserToLogin } from "@/components/modals";
import { toast } from "react-toastify";

export default function ProductClientView({
	ProductData
}: {
	ProductData: any;
}) {

	// --- HOOKS --- //
	const { user } = useAuthContext();
	const { addToCart, cartItems, setShowCartCheckout } = useCartContext();
	const { language } = useLanguageContext();
	const pathname = usePathname();

	// --- STATE --- //
	const [isModalToPromptUserToLoginOpen, setIsModalToPromptUserToLoginOpen] =
		useState<boolean>(false);
	const [selectedColorId, setSelectedColorId] = useState<number | null>(null);
	const [selectedSizeId, setSelectedSizeId] = useState<number | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	const [isInitialStateSet, setIsInitialStateSet] = useState(false);

	// --- MEMOS --- //
	// 1. Only enabled and in-stock variants
	const activeVariants = useMemo(() => {
		return (
			ProductData?.variants.filter(
				(v: any) => v.is_enabled && v.is_available
			) || []
		);
	}, [ProductData]);

	// 2. Available colors for active variants
	const availableColorOptions = useMemo(() => {
		const colorGroup = ProductData?.options?.find(
			(opt: any) => opt.type === "color"
		);
		if (!colorGroup) return [];

		return colorGroup.values.filter((colorVal: any) =>
			activeVariants.some((variant: any) =>
				variant.options.includes(colorVal.id)
			)
		);
	}, [ProductData, activeVariants]);

	// 3. Size/Model options group (Filtered based on color selection)
	const sizeOptionGroup = useMemo(() => {
		const group = ProductData?.options?.find((opt: any) => opt.type === "size");
		if (!group) return null;

		const filteredValues = group.values.filter((sizeVal: any) =>
			activeVariants.some(
				(variant: any) =>
					variant.options.includes(sizeVal.id) &&
					(selectedColorId ? variant.options.includes(selectedColorId) : true)
			)
		);

		return { ...group, values: filteredValues };
	}, [ProductData, activeVariants, selectedColorId]);

	// --- EFFECTS --- //

	// Set Initial State ONCE
	useEffect(() => {
		if (isInitialStateSet || activeVariants.length === 0) return;

		if (availableColorOptions.length > 0) {
			const firstColorId = availableColorOptions[0].id;
			setSelectedColorId(firstColorId);

			if (sizeOptionGroup && sizeOptionGroup.values.length > 0) {
				// Find first available size for that color
				const firstAvailableSize = sizeOptionGroup.values[0].id;
				setSelectedSizeId(firstAvailableSize);
			}
			setIsInitialStateSet(true);
		} else if (sizeOptionGroup && sizeOptionGroup.values.length > 0) {
			// Products without colors (Phone Cases)
			setSelectedSizeId(sizeOptionGroup.values[0].id);
			setIsInitialStateSet(true);
		}
	}, [
		activeVariants,
		isInitialStateSet,
		availableColorOptions,
		sizeOptionGroup
	]);

	// --- DERIVED VARIANT --- //
	const currentVariant = useMemo(() => {
		const hasColorOptions = availableColorOptions.length > 0;

		// Safety check: if we are still initializing, show loading
		if (hasColorOptions && !selectedColorId && !isInitialStateSet) return null;
		if (sizeOptionGroup && !selectedSizeId && !isInitialStateSet) return null;

		// Attempt exact match
		let variant = activeVariants.find((v: any) => {
			const matchesColor = hasColorOptions
				? v.options.includes(selectedColorId)
				: true;
			const matchesSize = selectedSizeId
				? v.options.includes(selectedSizeId)
				: true;
			return matchesColor && matchesSize;
		});

		// FALLBACK: If color changed and size doesn't match, grab the first variant of that color
		if (!variant && selectedColorId) {
			variant = activeVariants.find((v: any) =>
				v.options.includes(selectedColorId)
			);
		}

		if (!variant) return null;

		const colorMeta = availableColorOptions.find(
			(c: any) => c.id === selectedColorId
		);
		const variantImages = ProductData.images
			.filter((img: any) => img.variant_ids.includes(variant.id))
			.map((img: any) => img.src);

		return {
			...variant,
			displayTitle: colorMeta?.title || variant.title,
			images:
				variantImages.length > 0 ? variantImages : [ProductData.images[0]?.src]
		};
	}, [
		selectedColorId,
		selectedSizeId,
		activeVariants,
		availableColorOptions,
		sizeOptionGroup,
		ProductData.images,
		isInitialStateSet
	]);

	// --- HANDLERS --- //
	// color selection change
	const handleColorChange = (colorId: number) => {
		setCurrentImageIndex(0);
		setSelectedColorId(colorId);
		setCurrentImageIndex(0);

		// Auto-select the first available size for this new color to prevent "stuck" state
		if (sizeOptionGroup) {
			const firstSizeForNewColor = sizeOptionGroup.values.find((size: any) =>
				activeVariants.some(
					(v: any) => v.options.includes(colorId) && v.options.includes(size.id)
				)
			);
			if (firstSizeForNewColor) setSelectedSizeId(firstSizeForNewColor.id);
		}
	};

	// add to cart
	const handleAddToCart = async () => {
		if (!user) {
			setIsModalToPromptUserToLoginOpen(true);
			return;
		}

		// Since button is disabled, this code only runs if the item is NEW
		addToCart(ProductData.title, ProductData.id, currentVariant);
		toast.success(
			language === languageOptions.english
				? "Added to cart!"
				: "¡Agregado al carrito!"
		);
	};

	// 3. Add this Derived State Memo:
	const isCurrentVariantInCart = useMemo(() => {
		if (!currentVariant) return false;

		// .some() returns true as soon as it finds a match
		return cartItems.some((item: any) => item.variant.id === currentVariant.id);
	}, [cartItems, currentVariant]);

	if (!currentVariant) return <Spinner />;

	return (
		<Container7xl>
			<section className="text-slate-100 py-16 ">
				<Link
					className="inline-block underline underline-offset-4 mb-4"
					href="/store">
					&larr; {language === languageOptions.english ? "Back" : "Atrás"}
				</Link>
				<h1 className="text-3xl font-bold mb-4">{ProductData?.title}</h1>
				<span className="block text-2xl font-bold text-yellow-400 mb-4">
					{formatPrice(currentVariant.price)}
				</span>

				<div className="flex flex-col md:flex-row gap-10">
					{/* GALLERY */}
					<div className="flex-1">
						<div className="relative aspect-square overflow-hidden bg-neutral-800 rounded-lg">
							<Image
								width={500}
								height={500}
								src={currentVariant.images[currentImageIndex]}
								alt={currentVariant.title}
								className="object-contain w-full"
								priority
							/>
						</div>
						<div className="flex flex-wrap mt-4 gap-2 overflow-x-auto">
							{currentVariant.images.map((img: string, idx: number) => (
								<div
									key={idx}
									onClick={() => setCurrentImageIndex(idx)}
									className={`relative w-20 h-20 cursor-pointer shrink-0 border-2 transition-all ${
										currentImageIndex === idx
											? "border-yellow-400"
											: "border-transparent"
									}`}>
									<Image
										src={img}
										alt="thumb"
										width={100}
										height={100}
										className="object-cover"
									/>
								</div>
							))}
						</div>
					</div>

					{/* SELECTORS */}
					<div className="flex-1 space-y-8">
						{/* COLORS */}
						{availableColorOptions.length > 0 && (
							<div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
								<h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">
									{language === languageOptions.english
										? "Choose Color"
										: "Seleccionar Color"}
								</h2>
								<div className="flex flex-wrap gap-4">
									{availableColorOptions.map((option: any) => (
										<button
											key={option.id}
											onClick={() => handleColorChange(option.id)}
											className={`group relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
												selectedColorId === option.id
													? "border-yellow-400 scale-110 shadow-lg shadow-yellow-400/20"
													: "opacity-60 hover:opacity-100 border-2 border-slate-700 hover:scale-110"
											}`}>
											<div className="flex w-full h-full">
												{option.colors.map((c: string, i: number) => (
													<div
														key={i}
														className="flex-1 h-full"
														style={{ backgroundColor: c }}
													/>
												))}
											</div>
										</button>
									))}
								</div>
								<p className="mt-4 text-sm font-medium">
									Selected Color:{" "}
									<span className="text-yellow-400">
										{currentVariant.displayTitle}
									</span>
								</p>
							</div>
						)}

						{/* SIZES / PHONE MODELS */}
						{sizeOptionGroup && sizeOptionGroup.values.length > 0 && (
							<div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
								<h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">
									{availableColorOptions.length > 0
										? language === languageOptions.english
											? "Select Size"
											: "Seleccionar Tamaño"
										: language === languageOptions.english
											? "Select Model"
											: "Seleccionar Modelo"}
								</h2>
								<div className="flex flex-wrap gap-2">
									{sizeOptionGroup.values.map((size: any) => (
										<button
											key={size.id}
											onClick={() => {
												setCurrentImageIndex(0);
												setSelectedSizeId(size.id);
											}}
											className={`min-w-80px h-12 px-4 text-sm font-bold border-2 transition-all rounded-lg ${
												selectedSizeId === size.id
													? "bg-yellow-400 border-yellow-400 text-black"
													: "border-slate-700 text-white hover:border-slate-500"
											}`}>
											{size.title}
										</button>
									))}
								</div>
							</div>
						)}

						<small className="inline-block mb-1">
							{isCurrentVariantInCart &&
								(language === languageOptions.english
									? "This product is already in the cart. To define the quantity, go to the cart and update it."
									: "Este producto ya está en el carrito. Para definir la cantidad, vaya al carrito y actualizela.")}
						</small>
						<button
							className="w-full rounded-lg text-lg font-medium focus:outline-none focus:ring-4 px-5 py-3 bg-yellow-300 text-slate-800 hover:bg-yellow-400 focus:ring-yellow-300 cursor-pointer transition-all text-center"
							onClick={() => {
								isCurrentVariantInCart
									? setShowCartCheckout(true)
									: handleAddToCart();
							}}>
							{isCurrentVariantInCart
								? language === languageOptions.english
									? "Product added"
									: "Producto agregado"
								: language === languageOptions.english
									? `Add to cart - ${formatPrice(currentVariant.price)}`
									: `Añadir al carrito - ${formatPrice(currentVariant.price)}`}
						</button>

						<div
							className="prose prose-invert text-slate-200 text-lg max-w-[80ch]"
							dangerouslySetInnerHTML={{ __html: ProductData.description }}
						/>
					</div>
				</div>
			</section>

			<ModalToPromptUserToLogin
				setIsModalToPromptUserToLoginOpen={setIsModalToPromptUserToLoginOpen}
				isModalToPromptUserToLoginOpen={isModalToPromptUserToLoginOpen}
				serverBaseUrl={serverBaseUrl || ""}
				pathname={pathname}
			/>
		</Container7xl>
	);
}
