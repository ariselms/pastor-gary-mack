"use client";
import type { CartContextType } from "@/types/contextTypes";
import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";


export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [cartItems, setCartItems] = useState<any[]>([]);
	const [cartTotal, setCartTotal] = useState<number>(0);
  const [showCartCheckout, setShowCartCheckout] = useState<boolean>(false);

	// 1. Load cart from localStorage ONCE on mount
	useEffect(() => {
		const savedCart = localStorage.getItem("cartItems");
		if (savedCart) {
			try {
				const parsed = JSON.parse(savedCart);
				setCartItems(parsed);
			} catch (e) {
				console.error("Failed to parse cart", e);
			}
		}
	}, []);

	// 2. Keep cartTotal updated whenever cartItems change
	useEffect(() => {
		const total = cartItems.reduce(
			(acc, item) => acc + item.variant.price * item.quantity,
			0
		);
		setCartTotal(total);

		// 3. Sync localStorage whenever cartItems changes
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (productName: string, productId: string, variant: any) => {

		setCartItems((prevItems) => {

      // Check if this specific variant is already in the cart
			const existingItemIndex = prevItems.findIndex(
				(item) => item.variant.id === variant.id
			);

			if (existingItemIndex > -1) {
				// Increment quantity of existing item
				const updatedItems = [...prevItems];
				updatedItems[existingItemIndex].quantity += 1;
				return updatedItems;
			}

			// Add as a new item with quantity 1
			return [...prevItems, { productName, productId, variant, quantity: 1 }];
		});
	};

	const removeFromCart = (variantId: any) => {
		setCartItems((prev) =>
			prev.filter((item) => item.variant.id !== variantId)
		);
    toast.success("Product removed")
	};

	const updateQuantity = (variantId: number, newQuantity: number) => {
		if (newQuantity < 1) return removeFromCart(variantId);
		setCartItems((prev) =>
			prev.map((item) =>
				item.variant.id === variantId
					? { ...item, quantity: newQuantity }
					: item
			)
		);
	};

	return (
		<CartContext.Provider
			value={{
				addToCart,
				removeFromCart,
				updateQuantity, // Added this for your Cart page UI
				cartItems,
				setCartItems,
				cartTotal,
				setCartTotal,
        showCartCheckout,
        setShowCartCheckout
			}}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	const context = useContext(CartContext);
	if (!context) throw new Error("useCartContext must be used within Provider");
	return context;
};
