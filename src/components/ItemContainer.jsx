import React from "react";
import ProductCard from "./ProductCard.jsx";
export default class ItemContainer extends React.Component {
  componentDidMount() {
    fetch("./Assets/data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) => console.log(error));
    console.log(this.state.products);
  }
  render() {
    return (
      <div className="mx-16 p-6">
        <p
          align="left"
          className="text-4xl m-4 text-gray-800 font-bold hover:text-gray-700"
        ></p>
        {}
        <ProductCard />
        <hr />
        <div className="flex flex-wrap justify-around w-full my-4"></div>
      </div>
    );
  }
}
