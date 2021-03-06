import React from "react";
import classes from "./LandingPage.module.css";
import HeaderImage from "./HeaderImage/HeaderImage";
import Benefits from "./Benefits/Benefits";
import FeaturedReviews from "./FeaturedReviews/FeaturedReviews";
import Footer from "./Footer/Footer";

const LandingPage = ({ reviews, isLoading, fetchMoreReviews }) => {
  const { wrapper } = classes;

  return (
    <div className={wrapper}>
      <HeaderImage />
      <Benefits />
      <FeaturedReviews
        reviews={reviews}
        isLoading={isLoading}
        fetchMoreReviews={fetchMoreReviews}
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
