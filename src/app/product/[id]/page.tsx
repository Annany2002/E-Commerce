"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader, Star } from "lucide-react";
import { Product } from "@/types/ProductTypes";
import { useProductStore } from "@/zustand/productsStore";
import { useCartStore } from "@/zustand/cartStore";
import { CartItem } from "@/types/CartItemTypes";
import { usePriceStore } from "@/zustand/priceStore";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { setCartItems } = useCartStore();
  const { product, setProduct } = useProductStore();
  const { setTotalPrice } = usePriceStore();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        const data: Product = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = (id: number) => {
    const localStorageCart = localStorage.getItem("cart");

    const updateCart = (newCartItems: CartItem[]) => {
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      const totalPrice = newCartItems.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
      setTotalPrice(totalPrice);
      setCartItems(newCartItems);
    };

    if (!localStorageCart) {
      const initialCart = [{ product: product, quantity: 1 }];
      updateCart(initialCart);
      return;
    }

    let parsedCartItems: CartItem[];
    try {
      parsedCartItems = JSON.parse(localStorageCart);
    } catch (e) {
      console.error("Failed to parse cart items from localStorage", e);
      return;
    }

    if (parsedCartItems.some((item) => item.product.id === id)) {
      alert("Item already in cart");
      return;
    }

    const updatedCartItems = [
      ...parsedCartItems,
      { product: product, quantity: 1 },
    ];
    updateCart(updatedCartItems);
  };

  return (
    <div className="flex flex-col min-h-[450px] items-center justify-center bg-gray-100">
      {loading && <Loader className="animate-spin h-8 w-8" />}
      {!loading && (
        <div className="bg-white flex gap-12 justify-between p-3 mt-12 mx-12 h-[300px] rounded-lg shadow-md">
          <Image
            className="m-1 object-cover self-center rounded-md"
            width={150}
            height={140}
            src={product.image}
            alt={product.title}
          />

          <div className="flex flex-col gap-3 justify-evenly p-2">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <div className="flex gap-1">
                <p>Rating :</p>
                <p className="font-semibold text-gray-700">
                  {product.rating?.rate}
                </p>
                <Star />
              </div>
            </div>
            <div className="flex gap-3">
              <p className="text-slate-800 font-medium">Category : </p>
              <p className="text-neutral-800 uppercase">{product.category}</p>
            </div>
            <h2 className="text-sm mt-1">{product.description}</h2>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-lg font-semibold">${product.price}</p>
              <button
                onClick={() => addToCart(product.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
