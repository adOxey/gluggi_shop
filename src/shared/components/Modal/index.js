import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ show, children }) => {
  const { Modal, DisplayBlock, DisplayNone, ModalMain, Content } = classes;

  const showHideClassName = show
    ? `${Modal} ${DisplayBlock}`
    : `${Modal} ${DisplayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={ModalMain}>
        <div className={Content}>{children}</div>
      </section>
    </div>
  );
};

export default Modal;
