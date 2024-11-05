import { CartItem } from "@/types/CartItemTypes";
import { create } from "zustand";

type CartState = {
  cartItems: CartItem[];
};

type CartActions = {
  setCartItems: (cartItems: CartItem[]) => void;
};

export const useCartStore = create<CartState & CartActions>((set) => ({
  cartItems: [],
  setCartItems: (cartItem: CartItem[]) => set({ cartItems: cartItem }),
}));
