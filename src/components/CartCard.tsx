import { CartItem } from "@/types/CartItemTypes";
import { useCartStore } from "@/zustand/cartStore";
import { usePriceStore } from "@/zustand/priceStore";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

export default function CartCard({ cartItem }: { cartItem: CartItem }) {
  const { cartItems, setCartItems } = useCartStore();
  const { totalPrice, setTotalPrice } = usePriceStore();

  const increaseCartQuantity = (id: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    setTotalPrice(
      updatedCartItems.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      )
    );
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const decreaseCartQuantity = (id: number) => {
    const existingItem = cartItems.find((item) => item.product.id === id);
    if (!existingItem) return;

    let updatedCartItems;

    if (existingItem.quantity === 1) {
      updatedCartItems = cartItems.filter((item) => item.product.id !== id);
    } else {
      updatedCartItems = cartItems.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }

    setCartItems(updatedCartItems);
    setTotalPrice(
      updatedCartItems.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      )
    );
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  console.log(totalPrice);

  return (
    <div className="w-full p-4 bg-gray-100">
      <div className="p-2 flex justify-between">
        <div className="flex w-full gap-2 items-center justify-start">
          <div>
            <Image
              style={{
                width: "auto",
                height: "auto",
              }}
              priority
              src={cartItem.product.image}
              alt="Product-Image"
              width={60}
              height={60}
            />
          </div>
          <div className="p-2">
            <p className="text-md text-gray-800 font-semibold">
              {cartItem.product.title}
            </p>
            <p className="text-sm">
              Total Price :
              <span className="font-medium text-gray-600">
                {" $ "}
                {cartItem.quantity * cartItem.product.price}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center">
          <p className="font-medium text-gray-700">Quantity</p>
          <div className="flex gap-2 items-center justify-center">
            <MinusIcon
              className="cursor-pointer"
              onClick={() => decreaseCartQuantity(cartItem.product.id)}
            />
            <p>{cartItem.quantity}</p>
            <PlusIcon
              className="cursor-pointer"
              onClick={() => increaseCartQuantity(cartItem.product.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
