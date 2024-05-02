
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BackgroundState {
    color: string;
}

const initialState: BackgroundState = {
    color: "white",
}

const colorSlice = createSlice({
    name: "Background",
    initialState,
    reducers: {
        changeColor(state, action: PayloadAction<string>) {
            state.color = action.payload; 
        },
        initialColor(state) {
            state.color = initialState.color;
        }
    },
});

export const { changeColor, initialColor } = colorSlice.actions;
export default colorSlice.reducer;
