import React from "react";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <motion.div
      className="flex items-center justify-center mb-20 "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center max-w-2xl ">
        <h1 className="text-4xl mb-2">Create AI images</h1>
        <p className="text-sm text-gray-500 mb-8">
          Turn your imagination into visual magic
        </p>
        <div className="flex flex-col sm:flex-row  items-center gap-8 ">
          <img
            src={assets.ai_boy_image}
            className="w-60 rounded-2xl "
            alt="ai-boy-image"
            // width={200}
          />
          <div className="flex flex-col text-center items-center sm:items-start sm:text-start justify-evenly space-y-4 p-6 ">
            <p className="text-lg">
              Introducing the AI-Powered Text to Image Generator
            </p>
            <p className="text-xs text-gray-500">
              Easily bring your ideas to life with our free AI image generator.
              Whether you need stunning visuals or unique imagery, our tool
              transforms your text into eye-catching images with just a few
              clicks. Imagine it, describe it, and watch it come to life
              instantly.
            </p>
            <p className="text-xs text-gray-500">
              Simply type in a text prompt, and our cutting-edge AI will
              generate high-quality images in seconds. From product visuals to
              character designs and portraits, even concepts that don’t yet
              exist can be visualized effortlessly. Powered by advanced AI
              technology, the creative possibilities are limitless!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Details;
