import React from "react";
import { assets, testimonialsData } from "../assets/assets.js";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      className="flex items-center justify-center mb-20 "
      className="flex items-center justify-center mb-20 "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center max-w-2xl text-center">
        <h1 className="text-4xl mb-2">Customer Testimonials</h1>
        <p className="text-sm text-gray-500 mb-8">
          What our users say about us
        </p>
        <div className="flex flex-row flex-wrap gap-6 ">
          {testimonialsData.map((item, index) => (
            <div
              className="flex flex-col items-center w-full sm:max-w-50 shadow-2xl rounded-xl bg-white/40 p-4 hover:scale-105 transition-all duration-300"
              key={index}
            >
              <img src={item.image} alt="profile-image-of-user" width={30} />
              <p className="text-sm">{item.name}</p>
              <p className="text-xs text-gray-600 mb-2">{item.role}</p>
              <div className="flex items-center mb-2">
                {Array(item.stars)
                  .fill("")
                  .map((e, index) => (
                    <span key={index}>
                      <img
                        src={assets.ratingStar}
                        alt="rating star"
                        width={12}
                      />
                    </span>
                  ))}
              </div>
              <p className="text-xs text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
