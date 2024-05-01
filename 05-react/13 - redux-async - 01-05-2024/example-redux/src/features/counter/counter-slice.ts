import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}
interface counterState {
  count: number;
  status: Status;
}

const initialState: counterState = {
  count: 0,
  status: Status.IDLE,
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

  extraReducers: (builder) =>
    builder
      .addCase(delayedAddition.pending, (state, action) => {
        console.log("about to run");
        state.status = Status.LOADING;
      })
      .addCase(delayedAddition.fulfilled, (state, action) => {
        console.log("done");
        state.count += action.payload;
        state.status = Status.IDLE;
      })
      .addCase(delayedAddition.rejected, (state, action) => {
        console.log("error");
        state.status = Status.FAILED;
      }),
});

export const delayedAddition = createAsyncThunk(
  "counter/async",
  async (sum: number) => {
    await new Promise((handler) => setTimeout(handler, 3000));
    if (sum === 0) {
      throw "got error";
    }
    return sum;
  }
);

export const { increment, decrement, addAmount } = counterSlice.actions;

export const { countValue } = counterSlice.selectors;

export default counterSlice.reducer;
