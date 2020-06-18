import React from "react";
import classes from "./Button.module.css";

const Button = ({ handleClick, disabled, variant, children }) => {
  const { btn, btnPrimary, btnRemove, btnInfo } = classes;

  const getVariant = (variant) => {
    switch (variant) {
      case "primary":
        return `${btn} ${btnPrimary}`;
      case "remove":
        return `${btn} ${btnRemove}`;
      case "info":
        return `${btn} ${btnInfo}`;
      default:
        return `${btn} ${btnPrimary}`;
    }
  };

  return (
    <button
      className={getVariant(variant)}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
