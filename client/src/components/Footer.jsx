import React from "react";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <div className="flex items-center mb-10 justify-around px-8">
      <div className="flex items-center gap-2 ">
        <img src={assets.imagiconLogo} alt="imagicon-logo" width={40} />
        <span className="font-bold">imagicon</span>
      </div>
      <p className="hidden md:block  text-gray-600 text-sm">
        All rights reserved. Copyright @imagicon
      </p>
      <div className="flex items-center justify-evenly gap-1 ">
        <img src={assets.facebook_icon} alt="facebook_icon" width={28} className="cursor-pointer"/>
        <img src={assets.insta_icon} alt="insta_icon" width={28} className="cursor-pointer"/>
        <img src={assets.twitter_icon} alt="twitter_icon" width={28} className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Footer;
