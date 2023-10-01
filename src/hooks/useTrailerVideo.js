import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const movieVideo =
      json.results.find((obj) => obj.type === "Trailer") || json.results[0];
    dispatch(addTrailerVideo(movieVideo));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailerVideo;
