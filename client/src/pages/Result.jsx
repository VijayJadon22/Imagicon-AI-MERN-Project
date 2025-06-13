import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";

const Result = () => {
  const [image, setImage] = useState(assets.puppy_img);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  // const [isImageLoaded, setIsImageLoaded] = useState(image?true:false);
  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <motion.div
      className="flex items-center justify-center mb-20 px-2"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="w-full lg:w-2/3">
        <div className="flex flex-col items-center w-full  min-h-[70vh] justify-center ">
          <h1 className="text-xl md:text-2xl text-center font-semibold mb-1">
            Imagine. Prompt. Create.{" "}
          </h1>
          <p className="text-xs text-gray-600 mb-4">
            Let Your Vision Come to Life 🪄
          </p>

          <div className="relative w-full max-w-sm">
            {isLoading ? (
              // Skeleton loader
              <div className="w-full h-64  bg-gradient-to-r from-pink-300 to-purple-200 rounded animate-pulse relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange/20 to-transparent animate-shimmer"></div>

                {/* Optional: Loading text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black text-sm">Loading...⏳</span>
                </div>
              </div>
            ) : (
              // actual image
              <img
                src={image}
                alt="doremon"
                className="rounded w-full h-64 object-cover"
              />
            )}
          </div>

          {!isImageLoaded && (
            <div className="w-full  max-w-xl bg-gradient-to-r from-blue-300 to-purple-300 flex border text-white text-xs md:text-sm p-0.5 mt-4 rounded-full ">
              <input
                className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 text-white p-1 placeholder-color"
                type="text"
                placeholder="Describe your prompt to generate image!"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600  px-2 lg:px-6 py-3 rounded-full cursor-pointer"
              >
                Generate
              </button>
            </div>
          )}

          {isImageLoaded && (
            <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-4 rounded-full">
              <p
                onClick={() => setIsImageLoaded(false)}
                className="bg-transparent border border-zinc-800 text-black px-8 py-3 rounded-full cursor-pointer"
              >
                Generate another
              </p>
              <a
                href={image}
                download
                className=" bg-zinc-800 px-10 py-3 rounded-full cursor-pointer"
              >
                Download
              </a>
            </div>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default Result;
