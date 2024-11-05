import { create } from "zustand";

type PriceState = {
  totalPrice: number;
};

type PriceActions = {
  setTotalPrice: (price: number) => void;
};

export const usePriceStore = create<PriceState & PriceActions>((set) => ({
  totalPrice: 0,
  setTotalPrice: (price: number) => set({ totalPrice: price }),
}));
