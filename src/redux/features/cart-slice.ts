import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductImage } from "@/types/product";

type InitialState = {
  items: CartItem[];
};

type CartItem = {
  supplier_id: number;
  product_id: string;
  product_name: string;
  price: number;
  quantity: number;
  image: string | null;
};

const initialState: InitialState = {
  items: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const { supplier_id, product_id, product_name, price, quantity, image } =
        action.payload;
      const existingItem = state.items.find(
        (item) => item.product_id === product_id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          supplier_id,
          product_id,
          product_name,
          price,
          quantity,
          image,
        });
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemProduct_id = action.payload;
      state.items = state.items.filter(
        (item) => item.product_id !== itemProduct_id
      );
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ product_id: string; quantity: number }>
    ) => {
      const { product_id, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product_id === product_id
      );

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },

    removeAllItemsFromCart: (state) => {
      state.items = [];
    },
  },
});

export const selectCartItems = (state: RootState) =>
  state.cart.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) => {
  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return parseFloat(total.toFixed(2));
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  removeAllItemsFromCart,
} = cart.actions;
export default cart.reducer;
