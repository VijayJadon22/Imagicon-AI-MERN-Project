import React from "react";
import { stepsData } from "../assets/assets.js";

const Steps = () => {
  return (
    <div className="flex flex-col items-center mb-20">
      <h1 className="text-4xl mb-2">How it works</h1>
      <p className="text-sm text-gray-500 mb-8">
        Transform words into stunning images
      </p>
      <div className="space-y-4 flex flex-col gap-3 items-center ">
              {stepsData.map((item, index) => (
                  <div className="flex items-center gap-4 bg-white/60 shadow-2xl rounded-xl p-4 w-full hover:scale-[1.02] transition-all duration-300" key={index}>
                      <img src={item.icon} alt={item.title} width={40}/>
                      <div className="flex flex-col items-start">
                          <p className="text-sm">{ item.title}</p>
                          <p className="text-xs text-gray-500">{ item.description}</p>
                      </div>
                  </div>
              ))}
      </div>
    </div>
  );
};

export default Steps;
