import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

const initialState = {
  productStyle: "grid",
};

export const productsListStyle = createSlice({
  name: "listStyle",
  initialState,
  reducers: {
    updateListStyle: (_, action) => {
      return {
        productStyle: action.payload,
      };
    },
  },
});

export const { updateListStyle } = productsListStyle.actions;
export default productsListStyle.reducer;
