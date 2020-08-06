import React from "react";
import PropTypes from "prop-types";

export function LeftArrow({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-left-circle"
      fill="none"
      style={style}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#DBDBDB"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="12" cy="12" r="9" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="12" x2="12" y2="16" />
      <line x1="8" y1="12" x2="12" y2="8" />
    </svg>
  );
}

LeftArrow.defaultProps = {};

LeftArrow.propTypes = {
  style: PropTypes.object,
};
