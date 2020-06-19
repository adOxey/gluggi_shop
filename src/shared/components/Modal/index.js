import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ show, children }) => {
  const { Modal, DisplayBlock, DisplayNone, ModalMain, Heading } = classes;

  const showHideClassName = show
    ? `${Modal} ${DisplayBlock}`
    : `${Modal} ${DisplayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={ModalMain}>
        <h1 className={Heading}>Checkout</h1>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Modal;
