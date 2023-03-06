import React from "react";
import ProductCard from "./ProductCard.jsx";
export default function ItemContainer(props) {
  async function fetchData() {
    // const title = props.title;
    // try {
    //   const res = await fetch("./Assets/data.json");
    //   const data = await res.json();
    //   console.log(Object.entries(data..items)[0][1]); //productID
    // } catch (err) {
    //   console.error(err);
    // }
  }

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
      </div>
    </div>
  );
}
