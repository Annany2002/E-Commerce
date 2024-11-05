"use client";

import { usePriceStore } from "@/zustand/priceStore";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CheckoutPage() {
  const { totalPrice } = usePriceStore();
  const router = useRouter();

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
  });

  const handlePayment = (e: FormEvent) => {
    e.preventDefault();

    try {
      const isSuccess = Math.random() > 0.3; // 70% success rate
      if (isSuccess) {
        router.push("/success");
      } else {
        router.push("/failure");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[500px]">
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <form onSubmit={handlePayment} className="w-full max-w-md">
          <label className="block mb-2">
            Card Number:
            <input
              type="text"
              value={paymentData.cardNumber}
              onChange={(e) =>
                setPaymentData({ ...paymentData, cardNumber: e.target.value })
              }
              className="w-full px-2 py-1 border rounded mb-4"
              required
            />
          </label>
          <label className="block mb-2">
            Expiry Date:
            <input
              type="text"
              value={paymentData.expiry}
              onChange={(e) =>
                setPaymentData({ ...paymentData, expiry: e.target.value })
              }
              className="w-full px-2 py-1 border rounded mb-4"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            {"Pay $ "}
            {totalPrice}
          </button>
        </form>
      </div>
    </div>
  );
}
