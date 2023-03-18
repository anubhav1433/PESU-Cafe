import React from "react";
import ProductCard from "./ProductCard.jsx";
import { useEffect, useState } from "react";

const ItemContainer = (props) => {
  //renderproductcard method that passes data from props.productData to productCard component
  const renderProductCard = () => {
    if (props.productData) {
      return Object.entries(props.productData).map(
        ([productName, productData]) => {
          return (
            <ProductCard
              key={productName}
              available={productData.available}
              productImage={`${productData.productImage}`}
              itemName={productName}
              itemPrice={productData.itemPrice}
              itemQuantity={productData.itemQuantity}
            />
          );
        }
      );
    }
  };
  return (
    <div className="mx-16 p-6" id={props.id}>
      <p
        data-aos="zoom-in"
        align="left"
        className="text-4xl m-4 text-gray-800 font-bold hover:text-gray-700"
      >
        {props.title}
      </p>

      <hr />
      <div className="flex flex-wrap justify-around w-full my-4">
        {renderProductCard()}
      </div>
    </div>
  );
};

export default ItemContainer;
