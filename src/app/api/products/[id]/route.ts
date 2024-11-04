import { Product } from "@/types/ProductTypes";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: Product = await response.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
