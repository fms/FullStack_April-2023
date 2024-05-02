import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface textState {
    value: string;
}

const initialState: textState = {
    value: "Hey there!"
}

export const textSlice = createSlice({
    name: "Text",
    initialState,
    reducers: {
        setText(state, action: PayloadAction<string>) {
            state.value = action.payload;
        },
        resetText(state) {
            state.value = initialState.value;
        },
        setAsShaked(state) {
            state.value = 'Shaked!'
        }
    }
})

export const {setText, resetText, setAsShaked} = textSlice.actions;

export default textSlice.reducer;