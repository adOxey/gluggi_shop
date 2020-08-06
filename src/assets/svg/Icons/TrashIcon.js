import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TrashIcon({ primaryColor, hoveredColor, strokeWidth }) {
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
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.77777H16.1111"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66667 8.55556V14.2222"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4445 8.55556V14.2222"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.94446 4.77777L2.8889 16.1111C2.8889 16.6121 3.08791 17.0925 3.44214 17.4467C3.79638 17.801 4.27683 18 4.77779 18H12.3333C12.8343 18 13.3148 17.801 13.669 17.4467C14.0232 17.0925 14.2222 16.6121 14.2222 16.1111L15.1667 4.77777"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.72221 4.77778V1.94444C5.72221 1.69396 5.82172 1.45374 5.99884 1.27662C6.17595 1.0995 6.41618 1 6.66666 1H10.4444C10.6949 1 10.9351 1.0995 11.1123 1.27662C11.2894 1.45374 11.3889 1.69396 11.3889 1.94444V4.77778"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

TrashIcon.defaultProps = {
  primaryColor: "#E5E5E5",
  hoveredColor: "#FFFFFF",
  strokeWidth: "1.5",
};

TrashIcon.propTypes = {
  primaryColor: PropTypes.string,
  hoveredColor: PropTypes.string,
  strokeWidth: PropTypes.string,
};
