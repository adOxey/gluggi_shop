import React from "react";
import classes from "./Quantity.module.css";

const Quantity = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  const { qty, addRemoveQty, quantityStyle } = classes;

  return (
    <div className={qty}>
      <span>Quantity: </span>
      <button className={addRemoveQty} onClick={increaseQuantity}>
        +
      </button>
      <input
        className={quantityStyle}
        type="text"
        name="quantity"
        placeholder={quantity}
      />
      <button className={addRemoveQty} onClick={decreaseQuantity}>
        -
      </button>
    </div>
  );
};

export default Quantity;
