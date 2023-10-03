import { useEffect } from "react";
import { API_OPTIONS, FETCH_CATEGORIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAllCats } from "../utils/moviesSlice";

const useMovieCategories = (types) => {
  const dispatch = useDispatch();
  const fetchAllCats = async () => {
    const fetchCatsArr = [];
    types.forEach((cat) => {
      fetchCatsArr.push(
        fetch(FETCH_CATEGORIES.replace("{type}", cat), API_OPTIONS)
      );
    });
    let catResponse = await Promise.all(fetchCatsArr);

    const catDataArray = await Promise.all(
      catResponse.map(async (response) => {
        return await response.json();
      })
    );
    dispatch(addAllCats(catDataArray));
  };
  useEffect(() => {
    fetchAllCats();
  }, []);
};

export default useMovieCategories;
