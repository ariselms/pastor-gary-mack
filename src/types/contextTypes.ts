export interface LanguageContextType {
	language: string;

	setLanguage: React.Dispatch<React.SetStateAction<string>>;

	verifyLanguageFromLocalStorage: () => string;

	setLanguageAndLocalStorage: (lang: string) => any;
}

export interface AuthContextType {
	user: any | null;
	signOutUser: () => void;
	persistUser: () => Promise<void>;
}

export interface CartContextType {
	// Adds a product variant to the cart or increments quantity if it exists
	addToCart: (productName: string,productId: string, variant: any) => void;

	// Removes an item entirely based on the variant ID
	removeFromCart: (variantId: number) => void;

	// Changes the quantity of a specific variant
	updateQuantity: (variantId: number, newQuantity: number) => void;

	// The list of items currently in the cart
	cartItems: any[];

	// State setter for cart items
	setCartItems: React.Dispatch<React.SetStateAction<any[]>>;

	// The calculated total cost of all items
	cartTotal: number;

	// State setter for cart total
	setCartTotal: React.Dispatch<React.SetStateAction<number>>;

  // Checkout modal
  showCartCheckout: boolean;

  setShowCartCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}