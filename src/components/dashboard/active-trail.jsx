import React from "react";

const ActiveTrailIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="3"
      viewBox="0 0 2 3"
      className={className}
    >
      <path
        d="M 0 1 Q 2 1 2 0 L 2 3 Q 2 2 0 2 L 0 1"
        fill="currentColor"
        className="z-10"
      />
    </svg>
  );
};

export default ActiveTrailIcon;
