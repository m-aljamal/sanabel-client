import React from "react";
import clsx from "clsx";

const SwipArrows = ({
  prevClass,
  nextClass,
  arrowsStyle,
  prevRef,
  nextRef,
}) => {
  return (
    <div className={clsx("", arrowsStyle)} style={{ direction: "ltr" }}>
      <div ref={prevRef} className={clsx("cursor-pointer", prevClass)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div ref={nextRef} className={clsx("cursor-pointer", nextClass)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default SwipArrows;
