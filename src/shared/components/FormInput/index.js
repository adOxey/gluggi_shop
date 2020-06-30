import React from "react";
import PropTypes from "prop-types";
import classes from "./FormInput.module.css";

const FormInput = ({
  name,
  type,
  onChange,
  onBlur,
  className,
  value,
  error,
  label,
  isTouched,
  children,
  handleUpload,
  ...props
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        style={isTouched && error ? { border: "solid 1px red" } : null}
      />
      {type === "file" ? (
        <button onClick={handleUpload} className={classes.uploadBtn}>
          <span>UPLOAD IMAGE</span>
        </button>
      ) : null}
      <div style={{ height: "25px" }}>
        {isTouched && error ? <p style={{ color: "red" }}>{error}</p> : null}
      </div>
    </>
  );
};

FormInput.defaultProps = {
  type: "text",
  className: classes.Input,
  locked: false,
  focussed: false,
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(["text", "number", "password", "file"]),
  ]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  isTouched: PropTypes.bool,
  error: PropTypes.string,
  handleUpload: PropTypes.func,
};

export default FormInput;
