import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMsg(null);
    email.current.value = null;
    password.current.value = null;
  };

  const handleFormSubmit = () => {
    // Validate form
    const message = isValidData(
      email.current.value,
      password.current.value,
      isSignIn ? false : fullName.current.value
    );
    setErrorMsg(message);
    if (!message) {
      if (isSignIn) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user, "succeess");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorMessage + "-" + errorCode);
          });
      } else {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user, "succeess");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorMessage + "-" + errorCode);
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      <form className="w-1/3 absolute p-12 text-white bg-slate-950 bg-opacity-80 mx-auto my-36 right-0 left-0 flex flex-col rounded-md">
        <h1 className="text-3xl font-bold py-4 m-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-600 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email address"
          className="p-3 my-3 w-full bg-gray-600 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-3 my-3 w-full bg-gray-600 rounded-sm"
        />
        {errorMsg && <p className="text-red-600 font-bold py-2">{errorMsg}</p>}
        <button
          type="button"
          className="p-3 my-3 bg-red-800 font-bold w-full rounded-lg"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 m-2 cursor-pointer" onClick={toggleForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Click here to Sign In if already a member"}
        </p>
      </form>
    </div>
  );
};

export default Login;
