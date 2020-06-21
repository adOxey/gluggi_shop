import React from "react";
import classes from "./LandingPage.module.css";
import HeaderImage from './HeaderImage/HeaderImage'

const LandinPage = () => {
  const { wrapper } = classes;

  return (
    <div className={wrapper}>
      <HeaderImage />
      {/* <div className={container}>
        <div className={text_container}>
          <h1>
            Don’t let food allergies restrict you from enjoying amazing food.
          </h1>
          <p>
            Our customers come to us because we offer best quality at unbeatable
            low prices. Our products are exceeding expectations - Just can’t
            beat the taste !
          </p>
          <button>SHOP</button>
        </div>
      </div> */}
    </div>
  );
};

export default LandinPage;
