import { create } from "zustand";

type State = {
  cart: string[];
};

type Actions = {
  addToCartItem: (item: string) => void;
  removeFromCart: (item: string) => void;
};

export const useCartStore = create<State & Actions>((set) => ({
  cart: [],
  addToCartItem: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (item) =>
    set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
}));
