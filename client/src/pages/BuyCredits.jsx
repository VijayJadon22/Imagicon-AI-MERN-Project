import React from "react";
import { assets, subscriptionPlan } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext.jsx";
import { motion } from "framer-motion";

const BuyCredits = () => {
  const { user } = useAppContext();
  return (
    <motion.div
      className="flex flex-col items-center min-h-[80vh] text-center mb-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl font-semibold mb-8">Choose the imagicon plan</h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {subscriptionPlan.map((item, index) => (
          <div
            className="flex flex-col items-start py-12 px-12 md:px-8 space-y-2 rounded-lg bg-white/40 drop-shadow-sm text-gray-600 hover:scale-105 transition-all duration-500 shadow-lg"
            key={index}
          >
            <img src={assets.imagiconLogo} alt="" width={40} />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <div className="flex items-center mt-6">
              <p className="text-2xl font-semibold text-black">{item.price} </p>
              <span className="text-xs ">/{item.credits} credits</span>
            </div>
            <button className="w-full bg-black text-white mt-8 text-sm rounded-md py-2.5 min-w-52 p-1 border cursor-pointer">
              {user ? "Buy Plan" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredits;
