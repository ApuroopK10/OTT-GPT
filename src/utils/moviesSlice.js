import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    // nowPlayingMovies: null,
    trailerVideo: null,
    allCats: null,
  },
  reducers: {
    // addNowPlayingMovies: (state, action) => {
    //   state.nowPlayingMovies = action.payload; // mutating the state
    // },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addAllCats: (state, action) => {
      state.allCats = action.payload;
    },
  },
});

export const { addTrailerVideo, addAllCats } = moviesSlice.actions;
export default moviesSlice.reducer;
