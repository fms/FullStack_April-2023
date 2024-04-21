import { createSlice } from "@reduxjs/toolkit";

interface boxColor {
  color: string;
}

const initialState: boxColor = {
  color: "red",
};

const boxSlice = createSlice({
  name: "changeColor",
  initialState,
  reducers: {
    changeBlue(state) {
      state.color = "blue";
    },
    changeOrange(state) {
      state.color = "orange";
    },
  },
  selectors: {
    colorValue: (state) => state.color,
  },
});

export const { changeBlue, changeOrange } = boxSlice.actions;
export const { colorValue } = boxSlice.selectors;

export default boxSlice.reducer;
