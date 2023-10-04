import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LANG_SELECTOR, LOGO_URL, USER_ICON } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { updateLocale } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const gptData = useSelector((store) => store.gpt);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const toggleGptHandler = () => {
    dispatch(toggleGptSearch());
  };
  const handleLocaleChange = (event) => {
    dispatch(updateLocale(event.target.value));
  };
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-44" alt="logo" src={LOGO_URL} />
      {userData && (
        <div className="flex items-center justify-center">
          {gptData?.showGptSearch && (
            <select
              className="p-2 bg-gray-800 text-white mr-2"
              onChange={handleLocaleChange}
            >
              {LANG_SELECTOR.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.label}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-red-700 text-white font-bold rounded-md mr-2"
            onClick={toggleGptHandler}
          >
            {gptData?.showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-8 h-8" src={USER_ICON} alt="usericon" />
          <button className="h-8 text-white font-bold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
