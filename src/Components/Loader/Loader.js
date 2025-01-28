import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  // this is just for git testing
  );
};

// this change made in local to be pushed

export default Loader;
