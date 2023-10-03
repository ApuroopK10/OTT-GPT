import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieCategories from "../hooks/useMovieCategories";
import { ALL_CATS_ARRAY } from "../utils/constants";

const Browse = () => {
  useMovieCategories(ALL_CATS_ARRAY);
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
