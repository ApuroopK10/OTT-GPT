import { useDispatch, useSelector } from "react-redux";
import localizedConstants from "../utils/localizedConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const defaultLocale = useSelector((store) => store.config.locale);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const getMovieFromTmdb = async (movie) => {
    const movieResp = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const respJson = await movieResp.json();
    return respJson;
  };

  const gptSearchHandler = async () => {
    console.log(searchRef.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query - " +
      searchRef.current.value +
      ". Only give me names of 5 movies, comma separated like for example: Don, Murder, Sholay, Andhadun, Koi Mil Gaya";
    const gptResponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResponse.choices) {
      alert("Failed to fetch results"); // Toast later
    }
    const gptMovieArr = gptResponse.choices?.[0]?.message?.content?.split(", ");
    const movieRespArr = await Promise.all(
      gptMovieArr.map((movie) => getMovieFromTmdb(movie))
    );
    dispatch(
      addGptMovies({ tmbdMovieData: movieRespArr, gptMovieList: gptMovieArr })
    );
  };
  return (
    <div className="pt-[40%] md:pt-[10%]">
      <form
        className=" bg-black w-full md:w-1/2 m-auto flex justify-center items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-3 m-4 flex-1 bg-gray-100 rounded-md"
          placeholder={localizedConstants[defaultLocale]["searchPlaceholder"]}
          ref={searchRef}
        />
        <button
          className=" px-4 mr-4 py-3 bg-red-700 font-bold text-white rounded-md"
          onClick={gptSearchHandler}
        >
          {localizedConstants[defaultLocale]["search"]}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
