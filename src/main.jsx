import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import CartStore from "./lib/CartStore";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={CartStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
