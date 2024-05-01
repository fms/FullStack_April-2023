import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface ColorState {
    value: string
}

const initialState = {
    value: "black",
}

export const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setColor(state, action: PayloadAction<string>) {
            state.value = action.payload
        },

        resetColor(state) {
            state.value = initialState.value
        },
    },
    selectors: {
        colorValue: current => current.value,
    }
});

export const { setColor, resetColor } = colorSlice.actions;
export const { colorValue } = colorSlice.selectors;

export default colorSlice.reducer;