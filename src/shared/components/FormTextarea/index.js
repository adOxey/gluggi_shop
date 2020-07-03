import React from "react";
import classes from "./FormTextarea.module.css";
import PropTypes from "prop-types";

function FormTextarea({
  name,
  type,
  onChange,
  onBlur,
  className,
  value,
  label,
  error,
  isTouched,
  children,
  ...props
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={className}
        style={isTouched && error ? { border: "solid 1px red" } : null}
      />
      <div style={{ height: "25px" }}>
        {isTouched && error ? <p style={{ color: "red" }}>{error}</p> : null}
      </div>
    </>
  );
}

FormTextarea.defaultProps = {
  type: "text",
  className: classes.Textarea,
  isTouched: false,
};

FormTextarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};

export default FormTextarea;
