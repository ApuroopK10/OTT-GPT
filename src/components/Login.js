import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
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
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-600 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Enter Email address"
          className="p-3 my-3 w-full bg-gray-600 rounded-sm"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-3 my-3 w-full bg-gray-600 rounded-sm"
        />
        <button className="p-3 my-3 bg-red-800 font-bold w-full rounded-lg">
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
