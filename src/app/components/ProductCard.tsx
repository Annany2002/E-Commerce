"use client";

import { Product } from "@/types/ProductTypes";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white flex flex-col self-center p-5 max-h-[480px] rounded-lg shadow-md">
      <Image
        className="object-cover self-center rounded-md"
        width={150}
        height={140}
        src={product.image}
        alt={product.title}
      />
      <Link href={`/product/${product.id}`}>
        <button className="px-4 py-2 w-16 relative text-gray-500 hover:scale-105 hover:underline">
          View
        </button>
      </Link>
      <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-semibold">${product.price}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
