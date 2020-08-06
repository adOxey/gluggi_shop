import React, { useState, useRef } from "react";
import classes from "./Accordion.module.css";
import { Chevron } from "../../../assets/svg/Icons/chevron.js";
import PropTypes from "prop-types";

const {
  accordion_section,
  accordion,
  active_cls,
  accordion_title,
  accordion_icon,
  rotate_cls,
  accordion_content,
  accordion_text,
} = classes;

function Accordion({ title, handleClick, children }) {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState(`${accordion_icon}`);

  const content = useRef(null);

  function toggleAccordion(id) {
    handleClick();

    setActive(active === "" ? `${active_cls}` : "");
    setHeight(
      active === `${active_cls}` ? "0px" : `${content.current.scrollHeight}px`
    );

    setRotate(
      active === `${active_cls}`
        ? `${accordion_icon}`
        : `${accordion_icon} ${rotate_cls}`
    );
  }

  return (
    <div className={`${accordion_section}`}>
      <button className={`${accordion} ${active}`} onClick={toggleAccordion}>
        <p className={`${accordion_title}`}>{title}</p>
        <Chevron
          className={`${rotate}`}
          style={{ width: "20px", height: "20px" }}
          fill={"#adb5bd"}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={`${accordion_content}`}
      >
        <div className={`${accordion_text}`}>{children}</div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  children: PropTypes.any,
};

export default Accordion;
