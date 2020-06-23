import React from "react";
import classes from "./LandingPage.module.css";
import HeaderImage from "./HeaderImage/HeaderImage";
import MiddleSection from "./MiddleSection/MiddleSection";

const LandinPage = () => {
  const { wrapper } = classes;

  return (
    <div className={wrapper}>
      <HeaderImage />
      <MiddleSection />
    </div>
  );
};

export default LandinPage;
