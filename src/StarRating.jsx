import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const renderStars = () => {
    return Array.from({ length: totalStars }, (_, index) => {
      const starIndex = index + 1;
      const isFilled =
        hoverRating >= starIndex || (!hoverRating && rating >= starIndex);
      const isHalfFilled =
        hoverRating === starIndex - 0.5 ||
        (!hoverRating && rating === starIndex - 0.5);

      return (
        <span
          key={starIndex}
          className={`star ${isFilled ? "filled" : ""} ${
            isHalfFilled ? "half-filled" : ""
          }`}
          onClick={() => handleClick(starIndex)}
          onMouseEnter={() => handleMouseEnter(starIndex)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </span>
      );
    });
  };

  return (
    <div className="star-rating-container">
      <div className="star-rating">{renderStars()}</div>
    </div>
  );
};

export default StarRating;
