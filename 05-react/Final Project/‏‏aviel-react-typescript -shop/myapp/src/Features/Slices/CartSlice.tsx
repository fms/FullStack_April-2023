// @ts-ignore

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    // @ts-ignore
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            // @ts-ignore
            product.id === productId.id &&
            // @ts-ignore
            product.size === productId.size &&
            // @ts-ignore
            product.color === productId.color
        );
        if (exist) {
            // @ts-ignore
          exist.amount++;
          // @ts-ignore
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
            // @ts-ignore
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            img: productId.img,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
    },
    // @ts-ignore
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
 
          (product) =>
            // @ts-ignore
            product.id === productId.id &&
            // @ts-ignore
            product.size === productId.size &&
            // @ts-ignore
            product.color === productId.color
        );
        // @ts-ignore
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
                // @ts-ignore
              product.id !== productId.id ||
              // @ts-ignore
              product.size !== productId.size ||
              // @ts-ignore
              product.color !== productId.color
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
            // @ts-ignore
          exist.amount--;
          // @ts-ignore
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
