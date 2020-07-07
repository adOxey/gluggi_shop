import React from "react";
import PropTypes from "prop-types";
import classes from "./Form.module.css";

function Form({
  className,
  onSubmit,
  autoComplete,
  style,
  children,
  ...props
}) {
  return (
    <>
      <form
        className={className}
        onSubmit={onSubmit}
        autoComplete={autoComplete}
        noValidate
        style={style}
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
  style: PropTypes.object,
};

export default Form;
