import React from "react";
import Navbar from "./components/Navbar.jsx";
import ItemContainer from "./components/ItemContainer.jsx";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="">
        <Navbar />
        <ItemContainer title={"Munchies"} id="Munchies" />
        <ItemContainer title={"Snacks"} id="Snacks" />
        <ItemContainer title={"Desserts"} id="Dessert" />
        <ItemContainer title={"Beverages"} id="Beverages" />
      </div>
    );
  }
}
