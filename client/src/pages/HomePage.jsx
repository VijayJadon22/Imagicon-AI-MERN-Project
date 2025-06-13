import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Details from "../components/Details";
import Testimonials from "../components/Testimonials";
import GenerateBtn from "../components/GenerateBtn";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Steps />
      <Details />
      <Testimonials />
      <GenerateBtn/>
    </div>
  );
};

export default HomePage;
