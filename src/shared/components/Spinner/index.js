import React from "react";
import classes from "./Spinner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = () => {
  return (
    <div className={classes.Loader}>
      <FontAwesomeIcon
        icon={faSpinner}
        size="4x"
        color="#f7697b"
        spin
        style={{ marginTop: "100px" }}
      />
    </div>
  );
};

export default Spinner;
