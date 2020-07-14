import React, { useState } from "react";
import classes from "./CartSummary.module.css";
import { Button } from "../../../../../shared/components";
import {
  isValidCoupon,
  getPriceWithCoupon,
} from "../../../../../shared/utils/coupons";

const CartSummary = (props) => {
  const { totalCost, productsInCart } = props;
  const { cart_container, products, heading, totals, backBtn } = classes;

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
    <div className={cart_container}>
      <div className={heading}>
        <h1>Cart Summary</h1>
      </div>
      <div className={products}>
        <ul>
          {productsInCart.map((product) => (
            <li key={product.id}>
              <span>{product.quantity}x</span> {product.title}
              <p>{(product.price * product.quantity).toFixed(2)}$</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={totals}>
        <p>
          Subtotal: <span>{totalCost.toFixed(2)}$</span>
        </p>
        <p>
          Shipping: <span>00.00$</span> {/* Hard coded for now */}
        </p>
        <p>
          Total:
          <span
            style={
              !newPrice
                ? { fontWeight: "bold" }
                : { textDecoration: "line-through" }
            }
          >
            {totalCost.toFixed(2)}$
          </span>
        </p>
        {!newPrice ? null : (
          <p style={{ color: "#79bac1" }}>
            New total:
            <span style={{ fontWeight: "bold" }}>{newPrice.toFixed(2)}$</span>
          </p>
        )}
      </div>
      <form onSubmit={applyCoupon}>
        <input
          type="text"
          placeholder="Have a discount code?"
          onChange={(e) => setCoupon(e.target.value)}
          value={coupon}
        />
      </form>
      <p style={{ color: "red" }}>{couponError && couponError}</p>
      <div className={backBtn}>
        <Button handleClick={applyCoupon}>Apply coupon</Button>
      </div>
    </div>
  );
};

export default CartSummary;
