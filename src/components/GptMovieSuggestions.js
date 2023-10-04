import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieSearchData } = useSelector((store) => store.gpt);
  if (!gptMovieSearchData) return null;
  const { tmbdMovieData, gptMovieList } = gptMovieSearchData;
  if (!tmbdMovieData || !gptMovieList) return null;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-90">
      <div>
        {gptMovieList.map((movie, movieIdx) => (
          <MovieList
            title={movie}
            movies={tmbdMovieData?.[movieIdx]?.results}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
