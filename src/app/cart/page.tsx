"use client";

import { useEffect } from "react";
import CartCard from "../../components/CartCard";
import Link from "next/link";
import { useCartStore } from "@/zustand/cartStore";

export default function CartPage() {
  const { cartItems, setCartItems } = useCartStore();

  useEffect(() => {
    const cartItem = localStorage.getItem("cart");
    if (cartItem) {
      setCartItems(JSON.parse(cartItem));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container mt-16 space-y-4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <p className="font-medium">
            Total Price : ${" "}
            {cartItems
              .reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
              )
              .toPrecision(4)}
          </p>
          {cartItems.length > 0 && (
            <>
              <p className="text-md text-gray-600">
                Total Items: {cartItems.length}
              </p>
            </>
          )}
        </div>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-evenly h-[200px] p-4 w-full">
            <h1 className="text-2xl font-bold">Your cart is empty</h1>
            <Link
              href="/"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Add Items
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 rounded-lg">
              {cartItems.map((cartItem) => (
                <CartCard cartItem={cartItem} key={cartItem.product.id} />
              ))}
            </div>

            <div className="w-full text-center mt-4">
              <Link
                href={"/checkout"}
                className="w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                aria-label="Proceed to Checkout"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
