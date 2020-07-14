import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import classes from "./PaymentForm.module.css";
import { Button } from "../../../../../shared/components";

const PaymentForm = () => {
  const {
    container,
    gridContainer,
    CardNumber,
    Name,
    Expiry,
    Cvc,
    btnPurchase,
    btnReset,
  } = classes;

  const initialState = { cvc: "", expiry: "", name: "", number: "" };

  const [fields, setFields] = useState(initialState);

  const [focus, setFocus] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFields({ ...fields, [name]: value });
  };

  const handlePayment = () => {
    alert("Thank you for your purchase!");
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFields(initialState);
    document.paymentForm.reset();
  };

  return (
    <div id="PaymentForm" className={container}>
      <Cards
        cvc={fields.cvc}
        expiry={fields.expiry}
        focused={focus}
        name={fields.name}
        number={fields.number}
        placeholders={{ name: "Your name" }}
      />

      <form name="paymentForm" className={gridContainer}>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className={CardNumber}
        />
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className={Name}
        />
        <input
          name="expiry"
          type="text"
          pattern="\d\d/\d\d"
          placeholder="MMYY"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className={Expiry}
        />
        <input
          name="cvc"
          type="tel"
          pattern="\d{3,4}"
          placeholder="CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className={Cvc}
        />
        <div className={btnPurchase}>
          <Button
            handleClick={handlePayment}
            style={{ height: "45px", width: "130px" }}
          >
            Purchase
          </Button>
        </div>
        <div className={btnReset}>
          <Button
            handleClick={handleReset}
            variant="info"
            style={{ height: "45px", width: "130px" }}
          >
            Reset
          </Button>
        </div>
        {/* <button className={btnPurchase} onClick={handlePayment}>
          Purchase
        </button>
        <button className={btnReset} onClick={handleReset}>
          Reset
        </button> */}
      </form>
    </div>
  );
};

export default PaymentForm;
