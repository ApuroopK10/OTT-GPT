import React, { useRef, useState } from "react";
import { IMG_CDN } from "../utils/constants";
import MoviePreviewModal from "./MoviePreviewModal";

const MovieCard = ({ movie }) => {
  const modalRef = useRef(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [position, setPosition] = useState({ clientX: 0, clientY: 0 });
  const { poster_path } = movie;
  if (!poster_path) return;
  const renderModal = (event) => {
    const elementRect = modalRef.current.getBoundingClientRect();
    const elementX = elementRect.left;
    const elementY = elementRect.top - 12;
    setPosition({ clientX: elementX, clientY: elementY });
    setDisplayModal(true);
  };
  const hideModal = () => {
    setDisplayModal(false);
  };
  return (
    <div
      className="w-36 md:w-48 mr-5"
      onMouseEnter={renderModal}
      onMouseLeave={hideModal}
      ref={modalRef}
    >
      <img alt="movie card" src={IMG_CDN + poster_path} />
      {displayModal && (
        <MoviePreviewModal
          {...movie}
          top={position.clientY}
          left={position.clientX}
        />
      )}
    </div>
  );
};

export default MovieCard;
