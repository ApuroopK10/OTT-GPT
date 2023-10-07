import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-36 md:w-48 mr-5">
      <img alt="movie card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
