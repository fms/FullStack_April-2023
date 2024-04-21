import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface counterState {
  count: number;
}

const initialState: counterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addAmount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },

  selectors: {
    countValue: (state) => state.count,
  },
});

export const { increment, decrement, addAmount } = counterSlice.actions;

export const { countValue } = counterSlice.selectors;

export default counterSlice.reducer;
