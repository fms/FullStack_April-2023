import { PayloadAction ,createSlice } from "@reduxjs/toolkit";


interface colorState {
    color: string;
}

const initialState: colorState = { 
    color: "white",
}

const backgroundColorSlice = createSlice({
    name:"backgroundColor",
    initialState,
    reducers: {
        resetBackgroundColor(state) {
            state.color = "white";
        },
        changeBackgroundColor(state, action: PayloadAction<string>) {
            state.color = action.payload;
        }
    },
    
    selectors: {
        colorValue: state => state.color
    }
})

export default backgroundColorSlice.reducer;
export const { colorValue } = backgroundColorSlice.selectors;
export const { changeBackgroundColor } = backgroundColorSlice.actions;