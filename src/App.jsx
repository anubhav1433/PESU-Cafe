import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import ItemContainer from "./components/ItemContainer.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState("");
  const [showCart, setShowCart] = useState(0);
  const fetchData = () => {
    fetch("/Assets/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItemContainer = () => {
    if (products) {
      return Object.entries(products).map((item) => {
        return (
          <ItemContainer
            key={item[0]}
            title={item[0]}
            id={item[0]}
            productData={item[1]}
          />
        );
      });
    }
  };
  return (
    <div className="">
      <Navbar
        items={["Munchies", "Snacks", "Desserts", "Beverages"]}
        showCart={setShowCart}
      />
      <Cart showCart={showCart} />
      <Hero />
      {renderItemContainer()}
      <ToastContainer />
      <Footer />
    </div>
  );
}
