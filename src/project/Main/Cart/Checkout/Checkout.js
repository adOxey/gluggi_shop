import React, { useState } from "react";
import classes from "./Checkout.module.css";
import PaymentForm from "./PaymentForm/PaymentForm";
import CartSummary from "./CartSummary/CartSummary";
import { Modal } from "../../../../shared/components";

const Checkout = ({ sumValue, productsInCart }) => {
  const { container, button_cont, btnCheckout, sum } = classes;

  const [show, setShow] = useState(false);

  const showHideCheckoutModal = () => {
    setShow(!show);
  };

  return (
    <div className={container}>
      <div className={button_cont}>
        <button className={btnCheckout} onClick={showHideCheckoutModal}>
          <span>Checkout</span>
        </button>
      </div>
      <p>
        Subtotal: <span className={sum}>${sumValue.toFixed(2)} </span>
      </p>
      <Modal show={show} handleClose={showHideCheckoutModal}>
        <CartSummary
          totalCost={sumValue}
          productsInCart={productsInCart}
          handleClose={showHideCheckoutModal}
        />
        <PaymentForm />
      </Modal>
    </div>
  );
};

export default Checkout;
