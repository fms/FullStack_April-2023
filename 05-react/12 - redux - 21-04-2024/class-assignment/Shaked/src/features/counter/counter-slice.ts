import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "Counter",
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

})

export const { increment, decrement, addAmount } = counterSlice.actions;
export default counterSlice.reducer;