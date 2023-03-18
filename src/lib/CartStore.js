import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../lib/CartSlice";
export default configureStore({
  reducer: {
    cart: CartReducer,
  },
});
