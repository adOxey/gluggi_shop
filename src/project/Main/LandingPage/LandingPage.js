import React from "react";
import classes from "./LandingPage.module.css";
import HeaderImage from "./HeaderImage/HeaderImage";

const LandinPage = () => {
  const { wrapper } = classes;

  return (
    <div className={wrapper}>
      <HeaderImage />
    </div>
  );
};

export default LandinPage;
