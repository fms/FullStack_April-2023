import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface TextState {
  value: string
}

const initialState = {
  value: "The initial text value",
}

export const textSlice = createSlice({
  name: "text2",
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.value = action.payload
    },

    resetText(state){
      // This resets just the value property
      state.value = initialState.value

      // This resets ALL the properties
      // state = initialState;
    },

    setAsLeonardo(state) {
      state.value = "Leonardo deCaprio"
    },
  },
  selectors: {
    textValue: current => current.value,
  },
})

export const { setText, resetText, setAsLeonardo } = textSlice.actions
export const { textValue } = textSlice.selectors

export default textSlice.reducer;
