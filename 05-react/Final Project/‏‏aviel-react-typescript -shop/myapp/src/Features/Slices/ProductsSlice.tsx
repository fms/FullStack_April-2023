// @ts-ignore

import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../Assets/Data/DummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
    // @ts-ignore
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
    // @ts-ignore
      JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
    error: false,
  },
  reducers: {
    // @ts-ignore
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", savedState);
      } catch (err) {
        return err;
      }
    },
    // @ts-ignore
    singleProduct(state, action) {
      try {
        const oneProduct = state.filteredProducts.filter(
            // @ts-ignore
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem("singleProduct", savedState);
      } catch (err) {
        return err;
      }
    },
    // @ts-ignore
    filterGender(state, action) {
      try {
        const gender = state.filteredProducts.filter(
            // @ts-ignore
          (product) => product.gender === action.payload
        );
        state.error = false;
        state.filteredProducts = gender;
        const oneGenderType = gender.length > 0;
        if (oneGenderType) {
          state.error = false;
          const saveState = JSON.stringify(gender);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    // @ts-ignore
    sortByPrice(state) {
      try {
        // @ts-ignore
        const price = state.filteredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filteredProducts = price;
        let count = price.length;
        if (count > 1) {
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filteredProducts = price;
            const saveState = JSON.stringify(price);
            sessionStorage.setItem("filteredData", saveState);
          }
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    // @ts-ignore
    filterByColor(state, action) {
      try {
        // @ts-ignore
        const color = state.filteredProducts.filter((product) =>
          product.color.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = color;
        if (color.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = color;
          const saveState = JSON.stringify(color);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        return err;
      }
    },
    // @ts-ignore
    filterBySize(state, action) {
      try {
        // @ts-ignore
        const size = state.filteredProducts.filter((product) =>
          product.size.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = size;
        if (size.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = size;
          const saveState = JSON.stringify(size);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const {
  filterProducts,
  singleProduct,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} = productSlice.actions;
export default productSlice.reducer;
