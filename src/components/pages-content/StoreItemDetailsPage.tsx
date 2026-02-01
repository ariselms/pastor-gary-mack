"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Container7xl } from "@/components/containers";
import { useLanguageContext } from "@/context/languageContext";
import { formatPrice } from "@/helpers/client";
import { languageOptions } from "@/static";
import { ModalToPromptUserToLogin } from "@/components/modals";
import { useAuthContext } from "@/context/authContext";
import { usePathname } from "next/navigation";
import { serverBaseUrl } from "@/static";

export default function ProductClientView({
	ProductData
}: {
	ProductData: any;
}) {
	// hooks //
	const { language } = useLanguageContext();
  const { user } = useAuthContext();
  const pathname = usePathname();
  const [isModalToPromptUserToLoginOpen, setIsModalToPromptUserToLoginOpen]
    = useState<boolean>(false);


  // state //
	const [selectedColorId, setSelectedColorId] = useState<number | null>(null);
	const [selectedSizeId, setSelectedSizeId] = useState<number | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

	// 1. Filter for variants that are actually purchasable (Active & In Stock)
	const activeVariants = useMemo(() => {
		return (
			ProductData?.variants.filter(
				(v: any) => v.is_enabled && v.is_available
			) || []
		);
	}, [ProductData]);

	// 2. Filter Color Options: Only show colors that have at least one active variant
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

	// 3. Size Options Group
	const sizeOptionGroup = useMemo(
		() => ProductData?.options?.find((opt: any) => opt.type === "size"),
		[ProductData]
	);

	// 4. Set Initial State
	useEffect(() => {
		if (availableColorOptions.length > 0) {
			const firstColorId = availableColorOptions[0].id;
			setSelectedColorId(firstColorId);

			// Find the first available size for this specific color
			if (sizeOptionGroup) {
				const firstAvailableSize = sizeOptionGroup.values.find((size: any) =>
					activeVariants.some(
						(v: any) =>
							v.options.includes(firstColorId) && v.options.includes(size.id)
					)
				);
				if (firstAvailableSize) setSelectedSizeId(firstAvailableSize.id);
			}
		}
	}, [availableColorOptions, sizeOptionGroup, activeVariants]);

	// 5. Derived State: The currently selected Variant object
	const currentVariant = useMemo(() => {
		if (!selectedColorId) return null;

		const variant = activeVariants.find((v: any) => {
			const matchesColor = v.options.includes(selectedColorId);
			const matchesSize = sizeOptionGroup
				? v.options.includes(selectedSizeId)
				: true;
			return matchesColor && matchesSize;
		});

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
		ProductData.images
	]);

  // handle add product to cart
  const handleAddToCart = async () => {

    if (!user) {
      setIsModalToPromptUserToLoginOpen(true);
      return;
    }

  }



	if (!currentVariant)
		return (
			<div className="text-white p-20 text-center">
				{language === languageOptions.english ? "Loading available options..." : "Cargando opciones disponibles..."}
			</div>
		);

	return (
		<Container7xl>
			<section className="text-slate-100 py-16">
				<h1 className="text-3xl font-bold mb-4">{ProductData?.title}</h1>
				<span className="block text-2xl font-bold text-yellow-400 mb-4">
					{formatPrice(currentVariant.price)}
				</span>

				<div className="flex flex-col md:flex-row gap-10">
					{/* LEFT: Gallery */}
					<div className="flex-2">
						<div className="relative aspect-square overflow-hidden bg-neutral-800 rounded-lg">
							<Image
								src={currentVariant.images[currentImageIndex]}
								alt={currentVariant.title}
								fill
								className="object-contain"
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
									<Image src={img} alt="thumb" fill className="object-cover" />
								</div>
							))}
						</div>
					</div>

					{/* RIGHT: Selectors */}
					<div className="flex-3 space-y-8">
						{/* COLORS */}
						<div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
							<h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">
								1. Choose Color
							</h2>
							<div className="flex flex-wrap gap-4">
								{availableColorOptions.map((option: any) => (
									<button
										key={option.id}
										onClick={() => {
											setSelectedColorId(option.id);
											setCurrentImageIndex(0);
										}}
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

						{/* SIZES */}
						{sizeOptionGroup && (
							<div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
								<h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">
									2. Select Size
								</h2>
								<div className="flex flex-wrap gap-2">
									{sizeOptionGroup.values.map((size: any) => {
										const isAvailable = activeVariants.some(
											(v: any) =>
												v.options.includes(selectedColorId) &&
												v.options.includes(size.id)
										);

										return (
											<button
												key={size.id}
												disabled={!isAvailable}
												onClick={() => setSelectedSizeId(size.id)}
												className={`min-w-60px h-12 px-4 text-sm font-bold border-2 transition-all rounded-lg ${
													selectedSizeId === size.id
														? "bg-yellow-400 border-yellow-400 text-black"
														: "border-slate-700 text-white hover:border-slate-500"
												} ${!isAvailable ? "opacity-10 cursor-not-allowed pointer-events-none" : ""}`}>
												{size.title}
											</button>
										);
									})}
								</div>
							</div>
						)}

						<div
							className="prose prose-invert text-slate-200 text-lg max-w-[80ch]"
							dangerouslySetInnerHTML={{ __html: ProductData.description }}
						/>

						<button
              onClick={handleAddToCart}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black py-5 rounded-xl transition-all transform active:scale-95 uppercase tracking-tighter text-lg">
							Add to Cart — ${(currentVariant.price / 100).toFixed(2)}
						</button>
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
