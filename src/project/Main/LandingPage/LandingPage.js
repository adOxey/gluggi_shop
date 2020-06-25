import React from "react";
import classes from "./LandingPage.module.css";
import HeaderImage from "./HeaderImage/HeaderImage";
import Benefits from "./Benefits/Benefits";
import FeaturedReviews from "./FeaturedReviews/FeaturedReviews";

const LandingPage = () => {
  const { wrapper } = classes;

  return (
    <div className={wrapper}>
      <HeaderImage />
      <Benefits />
      <FeaturedReviews />
    </div>
  );
};

export default LandingPage;
