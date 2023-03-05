import React from "react";

import ItemContainer from "./components/ItemContainer.jsx";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="">
        <ItemContainer title={"Munchies"} id="Munchies" />
        <ItemContainer title={"Snacks"} id="Snacks" />
        <ItemContainer title={"Dessert"} id="Dessert" />
        <ItemContainer title={"Beverage"} id="Beverages" />
      </div>
    );
  }
}
