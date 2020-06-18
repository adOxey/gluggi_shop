import React from "react";
import classes from "./CheckoutModal.module.css";

const CheckoutModal = ({ show, handleClose, children }) => {
  const { modal, displayBlock, displayNone, modalMain, heading } = classes;

  const showHideClassName = show
    ? `${modal} ${displayBlock}`
    : `${modal} ${displayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={modalMain}>
        <h1 className={heading}>Checkout</h1>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default CheckoutModal;
