import react from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../lib/CartSlice.js";

import CartItem from "./CartItem";
export default function Cart(props) {
  const [itemCount, setItemCount] = useState(0);
  const [view, setView] = useState("hidden");
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem({ item }));
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.itemCount * item.itemPrice;
    });
    return total.toFixed(2);
  };
  console.log(cartItems);
  return (
    <div>
      <button
        className="h-18 bg-blue-800 top-1/3 right-0 fixed p-2 rounded-l-md z-20 hover:bg-blue-700"
        onClick={() => setView("visible")}
      >
        <i class="uil uil-shopping-cart-alt text-3xl text-white"></i>
      </button>
      <div
        className={`fixed right-0 z-20 flex h-full flex-col py-6 px-2 space-y-4 sm:py-4 sm:px-4 bg-blue-800 text-gray-100 ${view}`}
      >
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col overflow-y-scroll px-3 h-2/3">
          {cartItems.map((item) => (
            <CartItem
              key={item.itemName}
              itemImage={item.productImage}
              itemCount={item.itemCount}
              itemQuantity={item.itemQuantity}
              itemName={item.itemName}
              itemPrice={item.itemPrice}
              onRemoveItem={() => handleRemoveItem(item)}
            />
          ))}
        </ul>
        <div className="space-y-1 text-right text-xl">
          <p>
            Total &nbsp;
            <span className="font-semibold text-xl">
              Rs. {calculateTotal()}
            </span>
          </p>
        </div>
        <div className="flex justify-between px-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md"
            onClick={() => {
              setView("hidden");
            }}
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
    </div>
  );
}
