import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute px-12 pt-[20%] text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="  font-bold text-4xl">{title}</h1>
      <p className="py-6 w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black   px-8 py-2 rounded-sm font-semibold hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className="bg-gray-500 px-5 py-2 rounded-sm mx-2 font-semibold">
          ℹ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
