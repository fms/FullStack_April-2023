import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import textSliceReducer from "../features/text/textSlice";
import colorSliceReducer from "../features/background/background";

export const store = configureStore( {
    reducer: {counter: counterReducer, text: textSliceReducer, background: colorSliceReducer},
})

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
