import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  items: WishListItem[];
};

type WishListItem = {
  supplier_id: number;
  product_id: string;
  product_name: string;
  price: number;
  image: string | null;
  quantity: number;
  stock_qty: number;
};

const initialState: InitialState = {
  items: [],
};

export const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action: PayloadAction<WishListItem>) => {
      const {
        supplier_id,
        product_id,
        product_name,
        quantity,
        price,
        image,
        stock_qty,
      } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product_id === product_id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          product_id,
          product_name,
          price,
          quantity,
          image,
          supplier_id,
          stock_qty,
        });
      }
    },
    removeItemFromWishlist: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.product_id !== itemId);
    },

    removeAllItemsFromWishlist: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemToWishlist,
  removeItemFromWishlist,
  removeAllItemsFromWishlist,
} = wishlist.actions;
export default wishlist.reducer;
