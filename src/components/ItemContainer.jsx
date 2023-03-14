import React from "react";
import ProductCard from "./ProductCard.jsx";
import { useEffect, useState } from "react";

const ItemContainer = (props) => {
  const [products, setProducts] = useState("");

  const fetchData = () => {
    fetch("/Assets/data.json")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setProducts(data);
        console.log(products.Munchies);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-16 p-6">
      <p
        align="left"
        className="text-4xl m-4 text-gray-800 font-bold hover:text-gray-700"
      >
        {props.title}
      </p>
      <ProductCard />
      <hr />
      <div className="flex flex-wrap justify-around w-full my-4"></div>
    </div>
  );
};

export default ItemContainer;
