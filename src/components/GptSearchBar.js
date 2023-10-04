import { useSelector } from "react-redux";
import localizedConstants from "../utils/localizedConstants";

const GptSearchBar = () => {
  const defaultLocale = useSelector((store) => store.config.locale);
  const gptSearchHandler = () => {};
  return (
    <div className="pt-[10%]">
      <form
        className=" bg-black w-1/2 m-auto flex justify-center items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-3 m-4 flex-1 bg-gray-100 rounded-md"
          placeholder={localizedConstants[defaultLocale]["searchPlaceholder"]}
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
