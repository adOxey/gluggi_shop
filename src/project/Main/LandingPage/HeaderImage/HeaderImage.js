import React from "react";
import classes from "./HeaderImage.module.css";

const HeaderImage = () => {
  const { container, text_container, ImgContainer } = classes;
  return (
    <div className={container}>
      <div className={ImgContainer}>
        <div className={text_container}>
          <h1>
            Eat <span style={{ color: "#79bac1" }}>healthy</span> and <br />
            feel <span>amazing</span>.
          </h1>
          <p>
            We are proud of keeping our customers healthy. <br />
            Buy best quality products at unbeatable low prices.
          </p>
          <button>SHOP</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
