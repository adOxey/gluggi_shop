import React from "react";
import gluggiLogo from "../../../assets/imgs/Logo.png";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={gluggiLogo} className={classes.SiteLogo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
