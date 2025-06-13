import React from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext.jsx";

const Header = () => {
  const { user, setShowLogin } = useAppContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      className="text-black flex flex-col items-center justify-center mt-4  mb-20 text-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center gap-2 px-4 md:px-8 py-1 backdrop-blur-sm border border-gray-400 shadow-2xl rounded-full text-xs md:text-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span>🚀</span>
        <p> Top AI Art Generator 2025</p>
      </motion.div>
      <h1 className="text-3xl max-w-[300px] sm:text-5xl sm:max-w-[500px] font-semibold mx-auto mt-10 text-center">
        Transform words into{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          visual magic
        </span>
        , instantly.
      </h1>
      <p className="max-w-md sm:max-w-xl text-center mx-auto mt-5">
        Bring your ideas to life with AI. Just describe your vision and watch
        stunning art appear instantly.
      </p>
      <motion.button
        onClick={handleClick}
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-2 rounded-full  transition-all duration-300 group mt-4 cursor-pointer"
        whileHover={{ scale: 1.04 }}
      >
        {/* Rotating neon border */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin"></div>
          <div className="absolute inset-[2px] rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
        </div>

        {/* Button content */}
        <span className="relative z-8 flex items-center gap-2">
          Generate Images
          <span className="animate-pulse">✨</span>
        </span>
      </motion.button>
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <img
              src={assets.girl_image}
              alt="ai-girl-image"
              className="w-20 hover:scale-105 transition-all duration-300 rounded-4xl cursor-pointer"
              key={index}
            />
          ))}
      </div>
      <p className="text-sm mt-2">Genrated images by imagicon</p>
    </motion.div>
  );
};

export default Header;
