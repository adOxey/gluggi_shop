import React, { useMemo, useState } from "react";
import classes from "./PaymentDetails.module.css";
import PropTypes from "prop-types";

import { LeftArrow } from "../../../../../assets/svg/left_arrow";
import { Spinner } from "../../../../../shared/components/";
import SuccessfulPayment from "../SuccessfulPayment/SuccessfulPayment";
import useResponsiveFontSize from "../../../../../shared/hooks/useResponsiveFontSize";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#79BAC1",
          fontWeight: "600",
          fontFamily: "Raleway, sans-serif",
          "::placeholder": {
            color: "#DBDBDB",
            fontWeight: "500",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const { paymentDetailsContainer, formWrapper, payButton } = classes;

function PaymentDetails({ totalCost, closeModal, clientSecret }) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: e.target.name.value,
        },
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <>
      {succeeded ? (
        <SuccessfulPayment />
      ) : (
        <section className={paymentDetailsContainer}>
          <button onClick={closeModal}>
            <LeftArrow style={{ width: "30px", height: "30px" }} />
            <small>Back to cart</small>
          </button>
          <h1>PAYMENT DETAILS</h1>
          {/* Must find better place for this error and success code bellow */}
          {error && (
            <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>
          )}
          {/* {succeeded ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Payment successful!
        </p>
      ) : null} */}
          <form className={formWrapper} onSubmit={handleSubmit}>
            <label>
              <input
                placeholder="FULL NAME"
                style={{ fontSize: `${options.style.base.fontSize}` }}
                onChange={handleChange}
              />
              NAME ON CARD
            </label>
            <label>
              <CardNumberElement options={options} onChange={handleChange} />
              CARD NUMBER
            </label>

            <aside
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <label style={{ width: "179px" }}>
                <CardExpiryElement options={options} onChange={handleChange} />
                EXPIRATION DATE
              </label>

              <label style={{ width: "179px" }}>
                <CardCvcElement options={options} onChange={handleChange} />
                CVC
              </label>
            </aside>
            <button
              className={payButton}
              disabled={processing || disabled || succeeded}
            >
              <span>
                {processing ? (
                  <Spinner
                    style={{
                      color: "white",
                      width: "25px",
                      height: "25px",
                    }}
                  />
                ) : (
                  "PAY NOW"
                )}
              </span>
            </button>
          </form>
        </section>
      )}
    </>
  );
}

PaymentDetails.propTypes = {
  totalCost: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
  clientSecret: PropTypes.string.isRequired,
};

export default PaymentDetails;
