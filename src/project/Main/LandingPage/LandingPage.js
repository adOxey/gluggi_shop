import React from "react";
import classes from "./LandingPage.module.css";

const LandinPage = () => {
  const { container, text_container, wrapper } = classes;

  return (
    <div className={wrapper}>
      <div className={container}>
        {/* <img src={landingpage} alt="Landing page" className={lndImg} /> */}
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
      </div>
    </div>
  );
};

export default LandinPage;
