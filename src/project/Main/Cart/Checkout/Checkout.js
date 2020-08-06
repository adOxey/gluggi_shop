import React, { useState } from "react";
import classes from "./Checkout.module.css";

import OrderSummary from "./OrderSummary/OrderSummary";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import { Modal } from "../../../../shared/components";
import { gluggiFunctions } from "../../../../firebase/firebase";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`);

const Checkout = ({ sumValue, productsInCart }) => {
  const [show, setShow] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const {
    CheckoutContainer,
    CheckoutWrapper,
    Totals,
    button_cont,
    btnCheckout,
    sum,
  } = classes;

  const showHideCheckoutModal = () => {
    setShow(!show);

    if (!show) {
      const createPaymentIntent = gluggiFunctions.httpsCallable(
        "createPaymentIntent"
      );

      createPaymentIntent({ amount: sumValue * 100, currency: "USD" })
        .then((res) => setClientSecret(res.data.client_secret))
        .catch((err) => console.log("err", err));
      console.log("Made req to endpoint to create payment intent.");
    }
  };

  return (
    <section className={CheckoutContainer}>
      <div className={CheckoutWrapper}>
        <div className={button_cont}>
          <button className={btnCheckout} onClick={showHideCheckoutModal}>
            <span>Checkout</span>
          </button>
        </div>
        <p className={Totals}>
          Subtotal: <span className={sum}>{sumValue.toFixed(2)} $</span>
        </p>
        <Modal show={show} handleClose={showHideCheckoutModal}>
          <OrderSummary totalCost={sumValue} productsInCart={productsInCart} />
          <Elements stripe={stripePromise}>
            <PaymentDetails
              totalCost={sumValue}
              closeModal={showHideCheckoutModal}
              clientSecret={clientSecret}
            />
          </Elements>
        </Modal>
      </div>
    </section>
  );
};

export default Checkout;
