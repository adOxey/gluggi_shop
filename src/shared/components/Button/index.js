import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = ({ handleClick, disabled, variant, style, children }) => {
  const { btn, Primary, Remove, Info, Transparent } = classes;

  const getVariant = (variant) => {
    switch (variant) {
      case "primary":
        return `${btn} ${Primary}`;
      case "remove":
        return `${btn} ${Remove}`;
      case "info":
        return `${btn} ${Info}`;
      case "transparent":
        return `${Transparent}`;
      default:
        return `${btn} ${Primary}`;
    }
  };

  return (
    <button
      className={getVariant(variant)}
      onClick={handleClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: `${classes.btn} ${classes.Primary}`,
};

Button.propTypes = {
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
