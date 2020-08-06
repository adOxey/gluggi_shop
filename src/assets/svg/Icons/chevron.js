import React from "react";
import PropTypes from "prop-types";

export function Chevron({ fill, className, width, height, style }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-circle-right"
      className={className}
      width={width}
      height={height}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={style}
    >
      <path
        fill={fill}
        d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
      ></path>
    </svg>
  );
}
Chevron.defaultProps = {
  fill: "#000",
  className: "svg-inline--fa fa-chevron-circle-right fa-w-16",
};
Chevron.propTypes = {
  fill: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
