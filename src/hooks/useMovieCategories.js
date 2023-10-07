import { useEffect } from "react";
import { API_OPTIONS, FETCH_CATEGORIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addAllCats } from "../utils/moviesSlice";

const useMovieCategories = (types) => {
  const allCatsData = useSelector((store) => store.allCats);
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
    !allCatsData && fetchAllCats();
  }, []);
};

export default useMovieCategories;
