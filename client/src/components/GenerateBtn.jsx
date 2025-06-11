import React from "react";

const GenerateBtn = () => {
  return (
    <div className="flex items-center justify-center mb-20 ">
      <div className="flex flex-col items-center max-w-2xl text-center">
        <h1 className="text-4xl mb-2">Create magic, Try it now! </h1>
        <button className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-2 rounded-full  transition-all duration-300 group mt-4 cursor-pointer">
          {/* Rotating neon border */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin"></div>
            <div className="absolute inset-[2px] rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
          </div>

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2">
            Generate Images
            <span className="animate-pulse">✨</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default GenerateBtn;
