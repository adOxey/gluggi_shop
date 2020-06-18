import React from "react";

const ErrorRenderer = ({ isTouched, errors }) => {
  return (
    <>
      <span>{isTouched && errors ? <p>{errors}</p> : null}</span>
    </>
  );
};

export default ErrorRenderer;
