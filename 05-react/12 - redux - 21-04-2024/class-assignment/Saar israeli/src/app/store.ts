import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import textReducer from "../features/text/textSlice";
import quotesReducer, {
  quotesApiSlice,
} from "../features/quotes/quotesApiSlice";
import backgroundcolorReducer from "../features/backgroundColorSlice/backgroundcolor-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
    quotesApi: quotesReducer,
    backgroundColor: backgroundcolorReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(quotesApiSlice.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
