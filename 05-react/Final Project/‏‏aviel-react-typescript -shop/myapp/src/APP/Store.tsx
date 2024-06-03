import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../Features/Slices/SliderSlice";
import productsReducer from "../Features/Slices/ProductsSlice";
import cartReducer from "../Features/Slices/CartSlice";
import authReducer from "../Features/Slices/AuthSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});
