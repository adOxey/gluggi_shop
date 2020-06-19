import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ show, handleClose, children }) => {
  const {
    Modal,
    DisplayBlock,
    DisplayNone,
    ModalMain,
    Title,
    Content,
    Header,
  } = classes;

  const showHideClassName = show
    ? `${Modal} ${DisplayBlock}`
    : `${Modal} ${DisplayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={ModalMain}>
        <div className={Header}>
          <h1 className={Title}>Checkout</h1>
          <button onClick={handleClose}>&times;</button>
        </div>

        <div className={Content}>{children}</div>
      </section>
    </div>
  );
};

export default Modal;
