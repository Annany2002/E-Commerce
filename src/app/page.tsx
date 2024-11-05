"use client"; // Not strictly necessary in modern React (optional)

import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import ProductCard from "./components/ProductCard";
import { useProductsStore } from "@/zustand/productsStore";

export default function Home() {
  const { products, setProducts } = useProductsStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-5 bg-gray-100 min-h-[550px]">
      {isLoading && (
        <div className="flex h-96 w-full items-center justify-center">
          <Loader className="animate-spin h-8 w-8" />
        </div>
      )}

      {products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}
