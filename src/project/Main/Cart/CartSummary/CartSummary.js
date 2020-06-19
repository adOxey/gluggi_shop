import React, { useState } from "react";
import classes from "./CartSummary.module.css";
import PaymentForm from "./PaymentForm/PaymentForm";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import { Modal } from "../../../../shared/components";

const CartSummary = ({ sumValue, productsInCart }) => {
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
      <Modal show={show}>
        <CheckoutSummary
          totalCost={sumValue}
          productsInCart={productsInCart}
          handleClose={showHideCheckoutModal}
        />
        <PaymentForm />
      </Modal>
    </div>
  );
};

export default CartSummary;
