import React from "react";
import { useState } from "react";
import toastify from "../lib/toastify.js";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../lib/CartSlice.js";

const ProductCard = (props) => {
  let available, availableClass;
  props.available ? (available = true) : (available = false);
  available
    ? (availableClass = "bg-green-50 p-0.5 border-green-500 text-green-700")
    : (availableClass = "bg-red-50 p-0.5 border-red-500 text-red-700");

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const productData = {
    itemName: props.itemName,
    itemPrice: props.itemPrice,
    itemCount: count,
    itemQuantity: props.itemQuantity,
    productImage: props.productImage,
  };

  const addItemToCart = () => {
    dispatch(addItem(productData));

    toastify("Item Added to Cart!");
  };

  return (
    <div className="w-60 bg-white shadow rounded my-4">
      <div
        className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${props.productImage})`,
          filter: `grayscale(${available ? 0 : 1})`,
        }}
      >
        <div>
          <span
            className={`uppercase text-xs border rounded font-medium select-none ${availableClass}`}
          >
            {available ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-gray-800 text-md font-semibold text-center mt-1">
          {props.itemName}
        </h1>
        <p className="text-center font-bold text-gray-800 mt-1">
          Rs.{props.itemPrice}
        </p>
        <div className="inline-flex items-center mt-2">
          <button
            disabled={!props.available}
            onClick={() => {
              if (count > 0) {
                setCount((prevState) => prevState - 1);
              }
            }}
            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <i class="uil uil-minus"></i>
          </button>
          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {count}
          </div>
          <button
            disabled={!props.available}
            onClick={(e) => {
              if (count <= props.itemQuantity) {
                setCount((prevcount) => prevcount + 1);
              }
            }}
            className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <i class="uil uil-plus"></i>
          </button>
        </div>
        <button
          onClick={addItemToCart}
          disabled={!props.available || count === 0}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
        >
          Add to Cart
          <i class="uil uil-shopping-cart-alt p-1"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
