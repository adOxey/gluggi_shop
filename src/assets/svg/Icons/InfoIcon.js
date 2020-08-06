import React, { useState } from "react";
import PropTypes from "prop-types";

export default function InfoIcon({ primaryColor, hoveredColor, strokeWidth }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <svg
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 18C14.1944 18 18 14.1944 18 9.5C18 4.80558 14.1944 1 9.5 1C4.80558 1 1 4.80558 1 9.5C1 14.1944 4.80558 18 9.5 18Z"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 5.72223H9.50945"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.55555 9.5H9.49999V13.2778H10.4444"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

InfoIcon.defaultProps = {
  primaryColor: "#E5E5E5",
  hoveredColor: "#FFFFFF",
  strokeWidth: "1.5",
};

InfoIcon.propTypes = {
  primaryColor: PropTypes.string,
  hoveredColor: PropTypes.string,
  strokeWidth: PropTypes.string,
};
