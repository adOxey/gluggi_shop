import React from "react";
import { Link } from "react-router-dom";
import classes from "./CartProducts.module.css";
import Quantity from "./Quantity/Quantity";
import { Button } from "../../../../shared/components";

const CartProducts = ({
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
    priceStyle,
    total,
    BtnWrapper,
  } = classes;

  return (
    <div className={wrapper}>
      <img className={imageStyle} src={image} alt="Product" />
      <div className={aside}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={desc}>{description}</p>
        <div className={botContainer}>
          <div className={BtnWrapper}>
            <Button handleClick={removeFromCart} variant="remove">
              Remove
            </Button>
            <Link to={`/product/${id}`} className={detailsBtn}>
              <Button variant="info">
                <span>More info</span>
              </Button>
            </Link>
          </div>
          <div>
            <Quantity
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          </div>
          <div className={priceStyle}>
            <span className={total}>Total: </span>$
            {(price * quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
