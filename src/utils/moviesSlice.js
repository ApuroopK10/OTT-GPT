import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    // nowPlayingMovies: null,
    trailerVideo: null,
    allCats: null,
    playAudio: true,
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
    toggleAudio: (state) => {
      state.playAudio = !state.playAudio;
    },
  },
});

export const { addTrailerVideo, addAllCats, toggleAudio } = moviesSlice.actions;
export default moviesSlice.reducer;
