import React from "react";
import classes from "./HeaderImage.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../../../shared/components";

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
          <Link to="/products">
            <Button
              variant="transparent"
              style={{ margin: "20px 0", width: "155px" }}
            >
              SHOP
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
