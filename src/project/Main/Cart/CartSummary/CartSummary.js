import React, { useState } from "react";
import classes from "./CartSummary.module.css";
import CheckoutModal from "./CheckoutModal/CheckoutModal";
import PaymentForm from "./PaymentForm/PaymentForm";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

const CartSummary = ({ sumValue, productsInCart }) => {
  const { container, button_cont, btnCheckout, sum } = classes;

  const [show, setShow] = useState(false);

  const showCheckoutModal = () => {
    setShow(true);
  };

  const hideCheckoutModal = () => {
    setShow(false);
  };

  return (
    <div className={container}>
      <div className={button_cont}>
        <button className={btnCheckout} onClick={showCheckoutModal}>
          <span>Checkout</span>
        </button>
      </div>
      <p>
        Subtotal: <span className={sum}>${sumValue.toFixed(2)} </span>
      </p>
      <CheckoutModal show={show} handleClose={hideCheckoutModal}>
        <CheckoutSummary
          totalCost={sumValue}
          productsInCart={productsInCart}
          handleClose={hideCheckoutModal}
        />
        <PaymentForm />
      </CheckoutModal>
    </div>
  );
};

export default CartSummary;
