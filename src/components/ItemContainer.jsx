import React from "react";
import ProductCard from "./ProductCard.jsx";
export default function ItemContainer(props) {
  return (
    <div className="mx-16 p-6">
      <p
        align="left"
        className="text-4xl m-4 text-gray-800 font-bold hover:text-gray-700"
      >
        {props.title}
      </p>
      <hr />
      <div className="flex flex-wrap justify-around w-full my-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
