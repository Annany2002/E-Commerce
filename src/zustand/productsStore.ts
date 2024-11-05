import { Product } from "@/types/ProductTypes";
import { create } from "zustand";

type ProductState = {
  product: Product;
};

type ProductActions = {
  setProduct: (product: Product) => void;
};

export const useProductStore = create<ProductState & ProductActions>((set) => ({
  product: {} as Product,
  setProduct: (product) => set({ product }),
}));

type ProductsState = {
  products: Product[];
};

type ProductsActions = {
  setProducts: (products: Product[]) => void;
};

export const useProductsStore = create<ProductsState & ProductsActions>(
  (set) => ({
    products: [],
    setProducts: (products) => set({ products }),
  })
);
