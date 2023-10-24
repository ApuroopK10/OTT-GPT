import React, { useEffect, useState } from "react";
import {
  API_OPTIONS,
  GENRE_DATA,
  IMG_CDN,
  MOVIE_VIDEOS,
} from "../utils/constants";
import ReactPlayer from "react-player/youtube";

// Only loads the YouTube player

const MoviePreviewModal = ({
  backdrop_path,
  genre_ids,
  adult,
  top,
  left,
  id,
}) => {
  const [video, setVideo] = useState(null);
  const [audio, setAudio] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(false);
  const handleToggleBtn = () => {
    setToggleBtn(!toggleBtn);
    setAudio(!audio);
  };
  useEffect(() => {
    setTimeout(() => {
      fetchMovieVideos();
    }, 500);
  }, []);

  const fetchMovieVideos = async () => {
    const response = await fetch(
      MOVIE_VIDEOS.replace("{movie_id}", id),
      API_OPTIONS
    );
    const data = await response.json();
    const videoData =
      data.results.find((vid) => vid.type === "Featurette") || data.results[0];
    setVideo(videoData);
  };
  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className={`absolute bg-gray-900 z-500 testing w-96 rounded-lg testi`}
    >
      <div>
        {!video ? (
          <img
            src={IMG_CDN + backdrop_path}
            alt="movie-poster"
            className="rounded-t-lg"
          />
        ) : (
          <ReactPlayer
            url={`https://www.youtube.com/embed/${video?.key}`}
            playing={true}
            muted={audio}
            controls={false}
            width={384}
            height={240}
          />
        )}
      </div>
      <div
        className="cursor-pointer relative bottom-20 left-80"
        onClick={handleToggleBtn}
      >
        {toggleBtn ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white border-[1px] rounded-2xl p-[4px] inline-block w-7 h-7"
            data-name="VolumeHigh"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 12C24 8.28693 22.525 4.72597 19.8995 2.10046L18.4853 3.51468C20.7357 5.76511 22 8.81736 22 12C22 15.1826 20.7357 18.2348 18.4853 20.4852L19.8995 21.8995C22.525 19.2739 24 15.713 24 12ZM11 3.99995C11 3.59549 10.7564 3.23085 10.3827 3.07607C10.009 2.92129 9.57889 3.00685 9.29289 3.29285L4.58579 7.99995H1C0.447715 7.99995 0 8.44767 0 8.99995V15C0 15.5522 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0786 10.3827 20.9238C10.7564 20.7691 11 20.4044 11 20V3.99995ZM5.70711 9.70706L9 6.41417V17.5857L5.70711 14.2928L5.41421 14H5H2V9.99995H5H5.41421L5.70711 9.70706ZM16.0001 12C16.0001 10.4087 15.368 8.88254 14.2428 7.75732L12.8285 9.17154C13.5787 9.92168 14.0001 10.9391 14.0001 12C14.0001 13.0608 13.5787 14.0782 12.8285 14.8284L14.2428 16.2426C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92889C18.9462 6.80426 19.9998 9.3478 19.9998 12C19.9998 14.6521 18.9462 17.1957 17.0709 19.071L15.6567 17.6568C17.157 16.1565 17.9998 14.1217 17.9998 12C17.9998 9.87823 17.157 7.8434 15.6567 6.34311L17.0709 4.92889Z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white border-[1px] rounded-2xl p-[4px] inline-block w-7 h-7"
            data-name="VolumeOff"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
              fill="currentColor"
            ></path>
          </svg>
        )}
      </div>
      <div className="p-4 rounded-lg">
        <div className="flex gap-3 text-white">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Play"
            aria-hidden="true"
            className="text-black rounded-3xl cursor-pointer border p-1 bg-white"
            onClick={() => setAudio(!audio)}
          >
            <path
              d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Plus"
            aria-hidden="true"
            className="border rounded-3xl cursor-pointer border-white p-1"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="ThumbsUp"
            aria-hidden="true"
            className="border cursor-pointer rounded-full border-white p-1"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="flex gap-2 mt-5 items-center text-gray-200">
          <h2 className="text-lg text-green-500 font-semibold">New</h2>
          <span className="border border-white ">
            {adult ? "A" : "U/A 16+"}
          </span>
          <label className="border border-white text-sm h-5 px-1 leading-4">
            HD
          </label>
          <svg viewBox="0 0 50 16" className="w-14 h-8">
            <g fill="currentColor">
              <path d="M0 8C0 9.87632 0.645949 11.6018 1.7276 12.9661L2.46553 12.3819C1.51113 11.178 0.941177 9.65557 0.941177 8C0.941177 6.42141 1.45936 4.96384 2.33491 3.78813L1.57956 3.22654C0.587274 4.55902 0 6.21093 0 8Z"></path>
              <path d="M16 8C16 6.21093 15.4127 4.55902 14.4204 3.22654L13.6651 3.78813C14.5406 4.96384 15.0588 6.42141 15.0588 8C15.0588 9.65557 14.4889 11.178 13.5345 12.3819L14.2724 12.9661C15.3541 11.6018 16 9.87632 16 8Z"></path>
              <path d="M8 0C9.83269 0 11.5214 0.616258 12.8703 1.65286L12.2974 2.39958C11.1072 1.48493 9.61708 0.941177 8 0.941177C6.38293 0.941177 4.89285 1.48493 3.70265 2.39957L3.12967 1.65285C4.47857 0.616256 6.16732 0 8 0Z"></path>
              <path d="M8 2.19608C9.3296 2.19608 10.5548 2.64317 11.5334 3.39521L10.9604 4.14193C10.1405 3.51184 9.11399 3.13726 8 3.13726C6.88602 3.13726 5.85952 3.51184 5.0396 4.14193L4.46662 3.39521C5.44523 2.64317 6.67041 2.19608 8 2.19608Z"></path>
              <path d="M3.34204 4.5369L4.09738 5.09849C3.49423 5.90843 3.13726 6.91253 3.13726 8C3.13726 9.14051 3.52989 10.1893 4.18737 11.0186L3.44944 11.6029C2.66471 10.613 2.19608 9.36125 2.19608 8C2.19608 6.70205 2.62214 5.5036 3.34204 4.5369Z"></path>
              <path d="M12.8627 8C12.8627 9.14051 12.4701 10.1893 11.8126 11.0186L12.5506 11.6029C13.3353 10.613 13.8039 9.36125 13.8039 8C13.8039 6.70205 13.3779 5.5036 12.658 4.5369L11.9026 5.09849C12.5058 5.90843 12.8627 6.91253 12.8627 8Z"></path>
              <path d="M10.3529 8C10.3529 9.29949 9.29949 10.3529 8 10.3529C6.70051 10.3529 5.64706 9.29949 5.64706 8C5.64706 6.70051 6.70051 5.64706 8 5.64706C9.29949 5.64706 10.3529 6.70051 10.3529 8Z"></path>
              <path d="M2.87389 14.1422C3.75688 12.4329 5.53805 11.2941 7.5516 11.2941H8.4484C10.462 11.2941 12.2431 12.4329 13.1261 14.1422C11.7379 15.302 9.95045 16 8 16C6.04955 16 4.26212 15.302 2.87389 14.1422Z"></path>
              <path d="M21.1 7.96803C20.2467 7.96803 19.5633 7.77469 19.05 7.38803C18.5367 7.00136 18.2067 6.46136 18.06 5.76803H19.67C19.7433 6.00803 19.9033 6.20469 20.15 6.35803C20.3967 6.51136 20.7067 6.58803 21.08 6.58803C21.4267 6.58803 21.7067 6.52469 21.92 6.39803C22.1333 6.27136 22.24 6.09469 22.24 5.86802C22.24 5.72802 22.2067 5.60803 22.14 5.50803C22.08 5.40803 21.9567 5.32136 21.77 5.24803C21.59 5.16803 21.3167 5.09803 20.95 5.03803L20.21 4.90803C19.57 4.79469 19.0867 4.58469 18.76 4.27803C18.44 3.96469 18.28 3.51136 18.28 2.91803C18.28 2.45802 18.4 2.06136 18.64 1.72802C18.88 1.39469 19.2067 1.13802 19.62 0.958025C20.0333 0.778025 20.4933 0.688025 21 0.688025C21.7667 0.688025 22.4 0.868025 22.9 1.22802C23.4 1.58803 23.7033 2.10469 23.81 2.77803H22.2C22.14 2.55136 22.01 2.37803 21.81 2.25803C21.6167 2.13136 21.3533 2.06803 21.02 2.06803C20.6733 2.06803 20.4 2.13136 20.2 2.25803C20.0067 2.38469 19.91 2.55469 19.91 2.76803C19.91 2.96136 19.99 3.11469 20.15 3.22802C20.31 3.34136 20.63 3.44136 21.11 3.52803L21.84 3.64803C23.2 3.88136 23.88 4.56469 23.88 5.69803C23.88 6.18469 23.76 6.59803 23.52 6.93803C23.2867 7.27803 22.96 7.53469 22.54 7.70802C22.1267 7.88136 21.6467 7.96803 21.1 7.96803Z"></path>
              <path d="M24.8462 9.85803V2.59803H26.2962V3.19803C26.4696 2.95803 26.6829 2.77469 26.9362 2.64803C27.1896 2.51469 27.4796 2.44803 27.8062 2.44803C28.2529 2.44803 28.6462 2.56469 28.9862 2.79803C29.3329 3.03136 29.6029 3.35803 29.7962 3.77803C29.9962 4.19136 30.0962 4.66802 30.0962 5.20802C30.0962 5.75469 29.9962 6.23469 29.7962 6.64803C29.6029 7.05469 29.3329 7.37469 28.9862 7.60803C28.6462 7.84136 28.2529 7.95802 27.8062 7.95802C27.4996 7.95802 27.2229 7.89803 26.9762 7.77803C26.7362 7.65803 26.5296 7.48803 26.3562 7.26803V9.85803H24.8462ZM27.4262 6.62803C27.7596 6.62803 28.0296 6.50136 28.2362 6.24802C28.4496 5.99469 28.5562 5.64803 28.5562 5.20802C28.5562 4.76803 28.4496 4.42136 28.2362 4.16803C28.0296 3.90802 27.7596 3.77803 27.4262 3.77803C27.0929 3.77803 26.8196 3.90802 26.6062 4.16803C26.3929 4.42136 26.2862 4.76803 26.2862 5.20802C26.2862 5.64803 26.3929 5.99469 26.6062 6.24802C26.8196 6.50136 27.0929 6.62803 27.4262 6.62803Z"></path>
              <path d="M32.4981 7.95802C31.9515 7.95802 31.5148 7.80803 31.1881 7.50803C30.8615 7.20136 30.6981 6.79803 30.6981 6.29803C30.6981 5.75136 30.8948 5.32803 31.2881 5.02803C31.6815 4.72803 32.2248 4.57803 32.9181 4.57803H33.8681V4.39803C33.8681 4.13803 33.7915 3.94802 33.6381 3.82802C33.4915 3.70136 33.2948 3.63803 33.0481 3.63803C32.8281 3.63803 32.6515 3.68136 32.5181 3.76803C32.3848 3.84803 32.3015 3.94136 32.2681 4.04803H30.8381C30.9248 3.59469 31.1615 3.21469 31.5481 2.90803C31.9348 2.60136 32.4515 2.44803 33.0981 2.44803C33.7915 2.44803 34.3381 2.61802 34.7381 2.95802C35.1448 3.29802 35.3481 3.83469 35.3481 4.56803V7.80803H33.9681V7.21803C33.8081 7.47803 33.5915 7.66802 33.3181 7.78802C33.0515 7.90136 32.7781 7.95802 32.4981 7.95802ZM32.8981 6.77803C33.0515 6.77803 33.2015 6.74469 33.3481 6.67803C33.5015 6.61136 33.6248 6.51469 33.7181 6.38803C33.8181 6.25469 33.8681 6.09136 33.8681 5.89803V5.59803H32.9881C32.7215 5.59803 32.5148 5.65136 32.3681 5.75803C32.2281 5.85803 32.1581 6.00469 32.1581 6.19802C32.1581 6.38469 32.2281 6.52803 32.3681 6.62803C32.5081 6.72803 32.6848 6.77803 32.8981 6.77803Z"></path>
              <path d="M38.4983 7.84803C37.9583 7.84803 37.5383 7.70136 37.2383 7.40803C36.9449 7.11469 36.7983 6.68469 36.7983 6.11802V3.89803H35.9983V2.59803H36.7983V1.07802C37.0449 1.06469 37.2983 1.04136 37.5583 1.00803C37.8183 0.968025 38.0716 0.911358 38.3183 0.838025V2.59803H39.2683V3.89803H38.3183V5.94803C38.3183 6.14803 38.3683 6.30136 38.4683 6.40803C38.5683 6.50803 38.7049 6.55803 38.8783 6.55803H39.2683V7.84803H38.4983Z"></path>
              <path d="M40.9676 2.08803C40.7209 2.08803 40.5076 2.00136 40.3276 1.82802C40.1542 1.65469 40.0676 1.44136 40.0676 1.18802C40.0676 0.934692 40.1542 0.721358 40.3276 0.548025C40.5076 0.374692 40.7209 0.288025 40.9676 0.288025C41.2209 0.288025 41.4342 0.374692 41.6076 0.548025C41.7876 0.721358 41.8776 0.934692 41.8776 1.18802C41.8776 1.44136 41.7876 1.65469 41.6076 1.82802C41.4342 2.00136 41.2209 2.08803 40.9676 2.08803ZM40.2076 7.80803V2.59803H41.7276V7.80803H40.2076Z"></path>
              <path d="M44.422 7.95802C43.8753 7.95802 43.4386 7.80803 43.112 7.50803C42.7853 7.20136 42.622 6.79803 42.622 6.29803C42.622 5.75136 42.8186 5.32803 43.212 5.02803C43.6053 4.72803 44.1486 4.57803 44.842 4.57803H45.792V4.39803C45.792 4.13803 45.7153 3.94802 45.562 3.82802C45.4153 3.70136 45.2186 3.63803 44.972 3.63803C44.752 3.63803 44.5753 3.68136 44.442 3.76803C44.3086 3.84803 44.2253 3.94136 44.192 4.04803H42.762C42.8486 3.59469 43.0853 3.21469 43.472 2.90803C43.8586 2.60136 44.3753 2.44803 45.022 2.44803C45.7153 2.44803 46.262 2.61802 46.662 2.95802C47.0686 3.29802 47.272 3.83469 47.272 4.56803V7.80803H45.892V7.21803C45.732 7.47803 45.5153 7.66802 45.242 7.78802C44.9753 7.90136 44.702 7.95802 44.422 7.95802ZM44.822 6.77803C44.9753 6.77803 45.1253 6.74469 45.272 6.67803C45.4253 6.61136 45.5486 6.51469 45.642 6.38803C45.742 6.25469 45.792 6.09136 45.792 5.89803V5.59803H44.912C44.6453 5.59803 44.4386 5.65136 44.292 5.75803C44.152 5.85803 44.082 6.00469 44.082 6.19802C44.082 6.38469 44.152 6.52803 44.292 6.62803C44.432 6.72803 44.6086 6.77803 44.822 6.77803Z"></path>
              <path d="M48.4302 7.80803V0.558025H49.9502V7.80803H48.4302Z"></path>
              <path d="M22.464 15.608L21.832 14.016H19.272L18.648 15.608H18L20.248 10.04H20.88L23.136 15.608H22.464ZM19.496 13.448H21.608L20.552 10.776L19.496 13.448Z"></path>
              <path d="M26.5971 13.968V11.528H27.1891V15.608H26.6131V15.024C26.4798 15.2427 26.3065 15.4134 26.0931 15.536C25.8798 15.6534 25.6425 15.712 25.3811 15.712C24.9225 15.712 24.5571 15.56 24.2851 15.256C24.0185 14.9467 23.8851 14.5414 23.8851 14.04V11.528H24.4771V13.968C24.4771 14.3307 24.5705 14.6214 24.7571 14.84C24.9438 15.0534 25.1945 15.16 25.5091 15.16C25.8078 15.16 26.0638 15.056 26.2771 14.848C26.4905 14.64 26.5971 14.3467 26.5971 13.968Z"></path>
              <path d="M30.0164 15.712C29.6537 15.712 29.3364 15.6214 29.0644 15.44C28.7924 15.2587 28.579 15.008 28.4244 14.688C28.2697 14.3627 28.1924 13.9894 28.1924 13.568C28.1924 13.1467 28.2697 12.776 28.4244 12.456C28.579 12.1307 28.7924 11.8774 29.0644 11.696C29.3364 11.5147 29.6537 11.424 30.0164 11.424C30.3204 11.424 30.5897 11.496 30.8244 11.64C31.0644 11.7787 31.259 11.9734 31.4084 12.224V9.80804H32.0004V15.608H31.4244V14.888C31.275 15.144 31.0804 15.3467 30.8404 15.496C30.6057 15.64 30.331 15.712 30.0164 15.712ZM30.1044 15.16C30.3657 15.16 30.595 15.0934 30.7924 14.96C30.995 14.8267 31.1524 14.64 31.2644 14.4C31.3817 14.16 31.4404 13.8827 31.4404 13.568C31.4404 13.2534 31.3817 12.976 31.2644 12.736C31.1524 12.496 30.995 12.3094 30.7924 12.176C30.595 12.0427 30.3657 11.976 30.1044 11.976C29.8484 11.976 29.6217 12.0427 29.4244 12.176C29.227 12.3094 29.0724 12.496 28.9604 12.736C28.8484 12.976 28.7924 13.2534 28.7924 13.568C28.7924 13.8827 28.8484 14.16 28.9604 14.4C29.0724 14.64 29.227 14.8267 29.4244 14.96C29.6217 15.0934 29.8484 15.16 30.1044 15.16Z"></path>
              <path d="M33.5571 10.904C33.4344 10.904 33.3277 10.8614 33.2371 10.776C33.1517 10.6854 33.1091 10.5787 33.1091 10.456C33.1091 10.3334 33.1517 10.2294 33.2371 10.144C33.3277 10.0534 33.4344 10.008 33.5571 10.008C33.6797 10.008 33.7837 10.0534 33.8691 10.144C33.9597 10.2294 34.0051 10.3334 34.0051 10.456C34.0051 10.5787 33.9597 10.6854 33.8691 10.776C33.7837 10.8614 33.6797 10.904 33.5571 10.904ZM33.2611 15.608V11.528H33.8531V15.608H33.2611Z"></path>
              <path d="M36.7844 15.712C36.4058 15.712 36.0698 15.6214 35.7764 15.44C35.4884 15.2587 35.2618 15.008 35.0964 14.688C34.9364 14.3627 34.8564 13.9894 34.8564 13.568C34.8564 13.1467 34.9364 12.776 35.0964 12.456C35.2618 12.1307 35.4884 11.8774 35.7764 11.696C36.0698 11.5147 36.4058 11.424 36.7844 11.424C37.1631 11.424 37.4964 11.5147 37.7844 11.696C38.0778 11.8774 38.3044 12.1307 38.4644 12.456C38.6298 12.776 38.7124 13.1467 38.7124 13.568C38.7124 13.9894 38.6298 14.3627 38.4644 14.688C38.3044 15.008 38.0778 15.2587 37.7844 15.44C37.4964 15.6214 37.1631 15.712 36.7844 15.712ZM36.7844 15.16C37.1738 15.16 37.4911 15.016 37.7364 14.728C37.9871 14.4347 38.1124 14.048 38.1124 13.568C38.1124 13.088 37.9871 12.704 37.7364 12.416C37.4911 12.1227 37.1738 11.976 36.7844 11.976C36.3951 11.976 36.0751 12.1227 35.8244 12.416C35.5791 12.704 35.4564 13.088 35.4564 13.568C35.4564 14.048 35.5791 14.4347 35.8244 14.728C36.0751 15.016 36.3951 15.16 36.7844 15.16Z"></path>
            </g>
          </svg>
        </div>
        <div className="py-2">
          <ul className="flex gap-8 text-white">
            {genre_ids.map((genre) => (
              <li className="first:list-none list-disc text-lg">
                {GENRE_DATA[genre.toString()]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviePreviewModal;