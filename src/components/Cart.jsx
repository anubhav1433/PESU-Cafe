import react from "react";
import { useState } from "react";
import CartItem from "./CartItem";
export default function Cart(props) {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="fixed right-0 z-20 flex h-full flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-blue-800 text-gray-100">
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className="flex flex-col overflow-y-scroll px-3 h-2/3">
        <CartItem itemQuantity={20} itemName="camera" itemPrice={10} />
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">357 €</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          Back
          <span className="sr-only sm:not-sr-only">to shop</span>
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  );
}
