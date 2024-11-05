"use client";

import { Product } from "@/types/ProductTypes";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white flex flex-col self-center p-5 max-h-[480px] rounded-lg shadow-md">
      <div className="w-full flex justify-end">
        <Link href={`/product/${product.id}`}>
          <button className="text-sm p-1 rounded-md bg-neutral-100 border border-black text-gray-500 hover:scale-105">
            More
          </button>
        </Link>
      </div>
      <Image
        className="object-cover self-center rounded-md"
        width={150}
        height={140}
        src={product.image}
        alt={product.title}
      />

      <h2 className="text-md font-semibold mt-4">{product.title}</h2>
      <p className="font-sm">({product.rating?.count})</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-semibold">${product.price}</p>
        <div className="flex gap-1">
          <p className="font-semibold text-gray-700">{product.rating?.rate}</p>
          <Star />
        </div>
      </div>
    </div>
  );
}
