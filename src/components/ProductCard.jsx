import React from "react";
import { useState } from "react";

const ProductCard = (props) => {
  let available, availableClass;
  props.available ? (available = true) : (available = false);
  available
    ? (availableClass = "bg-green-50 p-0.5 border-green-500 text-green-700")
    : (availableClass = "bg-red-50 p-0.5 border-red-500 text-red-700");

  const [count, setCount] = useState(0);
  console.log(props.productImage);
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
        <h1 className="text-gray-800 text-center mt-1">{props.itemName}</h1>
        <p className="text-center text-gray-800 mt-1">Rs.{props.itemPrice}</p>
        <div className="inline-flex items-center mt-2">
          <button disabled={!props.available}
            onClick={() => {
              if (count > 0) {
                setCount((prevState) => prevState - 1);
              }
            }}
            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {count}
          </div>
          <button disabled={!props.available}
            onClick={(e) => setCount((prevcount) => prevcount + 1)}
            className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
        <button
          disabled={!props.available}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
        >
          Add to Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
