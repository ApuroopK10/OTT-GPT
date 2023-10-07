import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 md:px-12">
      <h1 className="py-4 text-white font-bold md:text-lg">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
