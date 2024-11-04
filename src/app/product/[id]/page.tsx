"use client";

import { Product } from "@/types/ProductTypes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {product ? (
        <div className="bg-white flex gap-6 justify-between p-3 mx-12 h-[300px] rounded-lg shadow-md">
          <Link href={"/"}>
            <button className="p-1 bg-transparent bg-gray-100 text-gray-800 hover:underline">
              Back
            </button>
          </Link>
          <Image
            className="m-1 object-cover self-center rounded-md"
            width={150}
            height={140}
            src={product.image}
            alt={product.title}
          />

          <div className="flex flex-col gap-3 justify-evenly">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <h1>
                Rating :{" "}
                <span className="font-semibold text-gray-700">
                  {product.rating.rate} {" stars"}
                </span>
              </h1>
            </div>
            <h2 className="text-sm mt-1">{product.description}</h2>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-lg font-semibold">${product.price}</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-lg font-semibold tracking-wide">Loading...</p>
      )}
    </div>
  );
}
