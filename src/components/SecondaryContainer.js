import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 relative z-30">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          {/* make it dynamic */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
