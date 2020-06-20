import React, { useState } from "react";
import classes from "./CartSummary.module.css";
import { Button } from "../../../../../shared/components";
import {
  isValidCoupon,
  priceWithCoupon,
} from "../../../../../shared/utils/coupons";

const CartSummary = (props) => {
  const { totalCost, productsInCart } = props;
  const { cart_container, products, heading, totals, backBtn } = classes;

  const [coupon, setCoupon] = useState("");
  const [newPrice, setNewPrice] = useState(null);

  const applyCoupon = (e) => {
    e.preventDefault();
    const isValid = isValidCoupon(coupon);
    const applied = priceWithCoupon(isValid, totalCost);
    setNewPrice(applied);
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
          Shipping: <span>00.00$</span> {/* For right now is hard coded! */}
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
          <p style={{ color: "red" }}>
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
      <div className={backBtn}>
        <Button handleClick={applyCoupon}>Apply coupon</Button>
      </div>
    </div>
  );
};

export default CartSummary;
