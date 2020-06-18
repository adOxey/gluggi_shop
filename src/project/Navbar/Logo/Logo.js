import React from "react";
import ecommerceLogo from "../../../assets/imgs/Logo.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img src={ecommerceLogo} className={classes.SiteLogo} alt="Logo" />
    </div>
  );
};

export default Logo;
