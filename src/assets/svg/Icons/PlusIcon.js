import React, { useState } from "react";
import PropTypes from "prop-types";
import useResponsiveSvgIcon from "../../../shared/hooks/useResponsiveSvgIcons";

export default function PlusIcon({ primaryColor, hoveredColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const size = useResponsiveSvgIcon();

  return (
    <svg
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16H21"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11V21"
        stroke={isHovered ? hoveredColor : primaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

PlusIcon.defaultProps = {
  primaryColor: "#E5E5E5",
  hoveredColor: "#FFFFFF",
};

PlusIcon.propTypes = {
  primaryColor: PropTypes.string,
  hoveredColor: PropTypes.string,
};
