import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
