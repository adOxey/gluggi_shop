import React from "react";
import classes from "./Spinner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = ({ size, style }) => {
  return (
    <div className={classes.Loader}>
      <FontAwesomeIcon
        icon={faSpinner}
        size={size}
        color="#f7697b"
        style={style}
        spin
      />
    </div>
  );
};

export default Spinner;
