import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
import ReactPlayer from "react-player/youtube";

const VideoBackground = ({ movieId }) => {
  const { playAudio } = useSelector((store) => store.movies);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useTrailerVideo(movieId);
  return (
    <div className="w-screen">
      <ReactPlayer
        url={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        playing={true}
        controls={false}
        muted={playAudio}
        width={1600}
        height={900}
      />
    </div>
  );
};

export default VideoBackground;
