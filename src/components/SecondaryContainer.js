import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { CATS_ARRAY_LABEL } from "../utils/constants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.allCats && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-44 relative z-30">
          {CATS_ARRAY_LABEL.map((eachCat, catIndex) => (
            <MovieList
              key={eachCat}
              title={eachCat}
              movies={movies?.allCats[catIndex]?.results}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
