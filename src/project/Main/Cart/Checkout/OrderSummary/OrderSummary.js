import React, { useState } from "react";
import classes from "./OrderSummary.module.css";
import PropTypes from "prop-types";

import {
  isValidCoupon,
  getPriceWithCoupon,
} from "../../../../../shared/utils/coupons";

const {
  summaryContainer,
  productList,
  contentWrapper,
  productDetails,
  productPrice,
  imageContainer,
  totals,
  totalAmount,
  couponSection,
  newTotal,
} = classes;

function OrderSummary({ totalCost, productsInCart }) {
  const [coupon, setCoupon] = useState("");
  const [newPrice, setNewPrice] = useState(null);
  const [couponError, setCouponError] = useState("");

  const applyCoupon = (e) => {
    e.preventDefault();
    const isValid = isValidCoupon(coupon);
    const priceWithCoupon = getPriceWithCoupon(isValid, totalCost);
    setNewPrice(priceWithCoupon);

    if (!isValid) {
      setCouponError("Invalid coupon!");
    }
    if (isValid) {
      setCouponError("");
    }
  };

  return (
    <div className={summaryContainer}>
      <div className={contentWrapper}>
        <h1>ORDER SUMMARY</h1>
        <ul className={productList}>
          {productsInCart.map((product) => (
            <li key={product.id}>
              <div className={imageContainer}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={productDetails}>
                <small>{product.quantity}x</small>
                <p>{product.title}</p>
              </div>
              <div className={productPrice}>
                <small>{(product.price * product.quantity).toFixed(2)} $</small>
              </div>
            </li>
          ))}
        </ul>
        <div className={totals}>
          <p>
            Subtotal: <span>{totalCost.toFixed(2)} $</span>
          </p>
          <p>
            Shipping: <span>00.00 $</span>
          </p>
          <p
            style={
              newPrice && {
                textDecoration: "line-through",
                color: "#939daa",
                fontWeight: "500",
              }
            }
          >
            <small>Total:</small>
            <span className={totalAmount}>{totalCost.toFixed(2)} $</span>
          </p>
          {!newPrice ? null : (
            <p className={newTotal}>
              New total:
              <span>{newPrice.toFixed(2)}$</span>
            </p>
          )}
        </div>
        {couponError && <p style={{ color: "white" }}>{couponError}</p>}
        <div className={couponSection}>
          <input
            placeholder="HAVE A DISCOUNT CODE?"
            onChange={(e) => setCoupon(e.target.value)}
            value={coupon}
          />
          <button onClick={applyCoupon}>APPLY COUPON</button>
        </div>
        <label
          style={{ fontSize: "12px", fontWeight: "bold", paddingBottom: "5px" }}
        >
          TEST COUPON: 20%off
        </label>
      </div>
    </div>
  );
}

OrderSummary.propTypes = {
  totalCost: PropTypes.number,
  productsInCart: PropTypes.array,
};

export default OrderSummary;
