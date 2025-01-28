import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function clickHandler(currentIndex) {
    setRating(currentIndex);
  }
  function MouseHoverHandler(currentIndex) {
    setHover(currentIndex);
  }
  function MouseleaveHandler() {
    setHover(rating);
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      {
        <div className="flex gap-3  text-[40px]">
          {[...Array(noOfStars)].map((ele, index) => {
            return (
              <FaStar
                key={index}
                className={`${
                  index <= (hover || rating)
                    ? " text-yellow-400 "
                    : " text-black"
                }`}
                onClick={() => clickHandler(index)}
                onMouseOver={() => MouseHoverHandler(index)}
                onMouseLeave={() => MouseleaveHandler(index)}
              />
            );
          })}
        </div>
      }
    </div>
  );
};

export default StarRating;
