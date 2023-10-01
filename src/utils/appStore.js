import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
