import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    addItem: (state, action) => {
      const productData = action.payload;
      const existingProductIndex = state.products.findIndex(
        (p) => p.itemName === productData.itemName
      );
      if (existingProductIndex >= 0) {
        state.products[existingProductIndex].itemQuantity +=
          productData.itemQuantity;
      } else {
        state.products.push(productData);
      }
    },
    removeItem: (state, action) => {
      const itemNameToRemove = action.payload;
      const existingProductIndex = state.products.findIndex(
        (p) => p.itemName === itemNameToRemove
      );
      if (existingProductIndex >= 0) {
        state.products.splice(existingProductIndex, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
