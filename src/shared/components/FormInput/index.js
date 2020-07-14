import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./FormInput.module.css";
import { Spinner } from "../../components";

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
  uploadStatus,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const activateSpinnerAndUpload = (e) => {
    e.preventDefault();
    if (isTouched) {
      setIsLoading(true);
    }
    handleUpload();
  };

  useEffect(() => {
    if (uploadStatus) {
      setIsLoading(false);
    }
  }, [uploadStatus]);

  function showStatus() {
    if (isLoading) {
      return <Spinner size="2x" />;
    }
    if (!isLoading) {
      if (uploadStatus) {
        return "UPLOADED";
      } else {
        return "UPLOAD IMAGE";
      }
    }
  }

  const status = showStatus();

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
        <button
          onClick={activateSpinnerAndUpload}
          className={!uploadStatus ? classes.uploadBtn : classes.disabled}
          disabled={uploadStatus && true}
        >
          <span>{status}</span>
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
  isTouched: false,
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
  uploadStatus: PropTypes.string,
};

export default FormInput;
