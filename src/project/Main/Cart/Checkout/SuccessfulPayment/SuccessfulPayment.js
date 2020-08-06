import React from "react";
import classes from "./SuccessfulPayment.module.css";
import Check from "../../../../../assets/svg/Check.svg";
import { Link } from "react-router-dom";

export default function SuccessfulPayment() {
  const { Container } = classes;

  return (
    <div className={Container}>
      <h1>Payment done</h1>
      <p>Your transaction was successful!</p>
      <img src={Check} alt="Check" />
      <p>Thank you for choosing our products!</p>
      <p>Refresh the page to pay again.</p>
      <small>
        <Link to="/products">Return to store</Link>
      </small>
    </div>
  );
}
