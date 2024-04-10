import { createAppSlice } from "../../app/createAppSlice"

export interface TextState {
  value: string
}

const initialState = {
  value: "The initial text value",
}

export const textSlice = createAppSlice({
  name: "text",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.value = action.payload
    },

    resetText: state => {
      // This resets just the value property
      state.value = initialState.value

      // This resets ALL the properties
      // state = initialState;
    },

    setAsYuval: state => {
      state.value = "Yuval"
    },
  },
  selectors: {
    textValue: current => current.value,
  },
})

export const { setText, resetText, setAsYuval } = textSlice.actions
export const { textValue } = textSlice.selectors
