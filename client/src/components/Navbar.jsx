import React from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { user, setUser } = useAppContext();
  const credits = 4;
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between items-center py-2 ">
      <Link to={"/"} className="flex items-center ">
        <img
          className="w-8 sm:w-10 lg:w-20 cursor-pointer"
          src={assets.imagiconLogo}
          alt="Imagicon-Logo"
        />
        <p className="text-lg md:text-2xl font-bold cursor-pointer">imagicon</p>
      </Link>
      <div>
        {user ? (
          //   if user is logged in we will display logout and credits available section
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to={'/buy'}
              className="flex gap-2 items-center px-4 sm:px-6 py-1.5 sm:py-2 text-sm bg-cyan-200 text-gray-800 rounded-full hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer "
            >
              <img src={assets.creditStar} className="w-5" alt="credit-star" />
              <span className="text-xs sm:text-sm text-gray-600">
                Credits Left: {credits}
              </span>
            </Link>
            <span className="text-xs sm:text-sm text-gray-600 max-sm:hidden ">
              Hii {user}
            </span>
            <div className="relative group cursor-pointer">
              <img
                className="w-10 drop-shadow "
                src={assets.profileIcon}
                alt="profile-icon"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md shadow-2xl text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          //   if user is logged out we will display login and pricing section
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy")}
              className="cursor-pointer font-semibold"
            >
              Pricing
            </p>
            <button className="px-8 py-1 bg-blue-600 hover:scale-105 transition-all ease-in-out duration-500 text-white rounded-2xl cursor-pointer">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
