import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGptSearch: false,
    gptMovieSearchData: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      state.gptMovieSearchData = action.payload;
    },
  },
});
export const { toggleGptSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
