import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import quickViewReducer from "./features/quickView-slice";
import productsListStyleReducer from "./features/productsListStyle";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailsReducer from "./features/product-details";

import { TypedUseSelectorHook, useSelector } from "react-redux";

// 1. Combine all reducers
const rootReducer = combineReducers({
  quickView: quickViewReducer,
  productsListStyle: productsListStyleReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  productDetails: productDetailsReducer,
});

// 2. Create persist config for only selected slices
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"], // only these will be persisted
};

// 3. Wrap combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Create store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Create persistor
export const persistor = persistStore(store);

// 6. Types and typed selector hook
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
