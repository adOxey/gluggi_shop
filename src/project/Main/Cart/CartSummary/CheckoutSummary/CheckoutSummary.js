import React from "react";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => {
  const { totalCost, productsInCart, handleClose } = props;
  const { cart_container, products, heading, totals, backBtn } = classes;

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
          <span style={{ fontWeight: "bold" }}>{totalCost.toFixed(2)}$</span>
        </p>
      </div>
      <form>
        <input type="text" placeholder="Have a discount code?" />
      </form>
      <button onClick={handleClose} className={backBtn}>
        Back To Cart
      </button>
    </div>
  );
};

export default CheckoutSummary;
