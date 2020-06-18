import React from "react";
import { Link } from "react-router-dom";
import classes from "./CartProduct.module.css";
import Quantity from "./Quantity/Quantity";
import { Button } from "../../../../shared/components";

const CartProduct = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  image,
  title,
  description,
  removeFromCart,
  price,
  id,
}) => {
  const {
    wrapper,
    imageStyle,
    aside,
    titleStyle,
    desc,
    botContainer,
    detailsBtn,
    removeBtn,
    priceStyle,
    total,
    quantity_price,
    quantity_style,
  } = classes;

  return (
    <div className={wrapper}>
      <img className={imageStyle} src={image} alt="Product" />
      <div className={aside}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={desc}>{description}</p>
        <div className={botContainer}>
          <div>
            <Button handleClick={removeFromCart} variant="remove">
              REMOVE
            </Button>
            <Link to={`/product/${id}`} className={detailsBtn}>
              <Button variant="info">
                <span>PRODUCT DETAILS</span>
              </Button>
            </Link>
          </div>
          <div className={quantity_price}>
            <div className={quantity_style}>
              <Quantity
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            </div>
            <p className={priceStyle}>
              <span className={total}>Total: </span>$
              {(price * quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
