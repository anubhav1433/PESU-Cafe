import react from "react";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
export default function Cart(props) {
  const [itemCount, setItemCount] = useState(0);
  const [view, setView] = useState("hidden");
  useEffect(() => {
    if (props.showCart) {
      setView("show");
    }
  }, [setView]);
  return (
    <div
      className={`fixed right-0 z-20 flex h-full flex-col py-6 px-2 space-y-4 sm:py-4 sm:px-4 bg-blue-800 text-gray-100 ${view}`}
    >
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className="flex flex-col overflow-y-scroll px-3 h-2/3">
        <CartItem itemQuantity={20} itemName="Donuts" itemPrice={10} />
      </ul>
      <div className="space-y-1 text-right text-xl">
        <p>
          Total &nbsp;
          <span className="font-semibold text-xl">Rs. 130</span>
        </p>
      </div>
      <div className="flex justify-between px-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md"
          onClick={() => setView("hidden")}
        >
          Back
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md bg-white text-blue-900"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
