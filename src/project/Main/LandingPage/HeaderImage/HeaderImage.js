import React from "react";
import classes from "./HeaderImage.module.css";

const HeaderImage = () => {
  const { container, text_container } = classes;
  return (
    <div className={container}>
      <div className={text_container}>
        <h1>
          Don’t let food allergies restrict you from enjoying amazing food.
        </h1>
        <p>
          Our customers come to us because we offer best quality at unbeatable
          low prices. We are proud that our products are exceeding customers
          expectations.
        </p>
        <button>SHOP</button>
      </div>
    </div>
  );
};

export default HeaderImage;
