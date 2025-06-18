import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setShowLogin, loginUser, signupUser } = useAppContext();

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "Login") {
      if (formData.email === "" || formData.password === "") {
        toast.error("All Fields are required", { id: "error-toast" });
      } else {
        loginUser({
          email: formData.email,
          password: formData.password,
        });
      }
    } else {
      if (
        formData.name === "" ||
        formData.email === "" ||
        formData.password === ""
      ) {
        toast.error("All Fields are required", { id: "error-toast" });
      } else {
        signupUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full backdrop-blur-sm flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col justify-evenly items-center p-10 space-y-4 rounded-xl bg-white shadow-2xl"
      >
        <h1 className="text-lg md:text-2xl font-semibold">{state}</h1>
        <p className="text-sm text-gray-600">
          Please {state === "Login" ? "login" : "signup"} to continue
        </p>
        {state !== "Login" && (
          <div className="border border-gray-300 w-full py-2 rounded-full pl-3 flex items-center gap-2">
            <img src={assets.email_icon} alt="lock_icon" />
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              className="text-sm outline-none text-gray-600"
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="border border-gray-300 w-full py-2 rounded-full pl-3 flex items-center gap-2">
          <img src={assets.email_icon} alt="lock_icon" />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="text"
            className="text-sm outline-none text-gray-600"
            placeholder="Email"
            required
          />
        </div>
        <div className="border border-gray-300 w-full py-2 rounded-full pl-3 flex items-center gap-2">
          <img src={assets.lock_icon} alt="lock_icon" />
          <input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            className="text-sm outline-none text-gray-600 "
            placeholder="Password"
            required
          />
        </div>

        {state === "Login" ? (
          <Link className="text-blue-500 text-xs underline cursor-pointer text-left w-full">
            Forgot Password?
          </Link>
        ) : null}
        <button className="w-full py-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full text-white cursor-pointer">
          {state}
        </button>
        {state === "Login" ? (
          <p className="text-sm ">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Signup")}
              className="text-blue-500 underline cursor-pointer"
            >
              Signup
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-500 underline cursor-pointer "
            >
              Login
            </span>
          </p>
        )}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="cross_icon"
          className="absolute top-5 right-5 cursor-pointer"
        />
      </form>
    </motion.div>
  );
};

export default Login;
