import React from "react";
import PropTypes from "prop-types";
import classes from "./Form.module.css";

function Form({ className, onSubmit, autoComplete, children, ...props }) {
  return (
    <>
      <form
        className={className}
        onSubmit={onSubmit}
        autoComplete={autoComplete}
        noValidate
      >
        {children}
      </form>
    </>
  );
}
Form.defaultProps = {
  className: classes.FormWrapper,
  autoComplete: "off",
};

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  autoComplete: PropTypes.string,
};

export default Form;
