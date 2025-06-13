import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Result from "./pages/Result";
import BuyCredits from "./pages/BuyCredits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useAppContext } from "./context/AppContext";

function App() {
  const { showLogin } = useAppContext();
  return (
    <div className="relative border px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-br from-white via-gray-50 to-slate-100 w-full">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:20px_20px] "></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-slate-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute top-1/2 left-1/5 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/5 right-1/5 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute bottom-1/5 left-2/5 w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        {showLogin && <Login />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredits />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
