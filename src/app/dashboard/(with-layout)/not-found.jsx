import React from "react";

const NotFound = () => {
  return (
    <div className="absolute inset-8 flex flex-col justify-center items-center rounded-xl bg-muted animate-pulse">
      <h1 className="flex text-6xl">
        4<div className="animate-bounce">0</div>4
      </h1>

      <p>The page you are looking for does not exist</p>
    </div>
  );
};

export default NotFound;
