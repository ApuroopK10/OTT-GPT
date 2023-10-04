import React, { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieCategories from "../hooks/useMovieCategories";
import { ALL_CATS_ARRAY } from "../utils/constants";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useMovieCategories(ALL_CATS_ARRAY);
  const toggleGptView = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {toggleGptView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
