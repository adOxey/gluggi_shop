import React from "react";
import classes from "./CartItems.module.css";
import PropTypes from "prop-types";

import {
  TrashIcon,
  InfoIcon,
  PlusIcon,
  MinusIcon,
} from "../../../../assets/svg";

import { Link } from "react-router-dom";

function CartItems({
  title,
  description,
  price,
  image,
  id,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  quantity,
}) {
  const {
    ProductContainer,
    ItemImage,
    MiddleSection,
    MiddleBottom,
    ItemQuantity,
  } = classes;

  return (
    <div className={ProductContainer}>
      <img src={image} alt={title} className={ItemImage} />
      <div className={MiddleSection}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={MiddleBottom}>
          <small>{(price * quantity).toFixed(2)} $</small>
          <div>
            <button onClick={removeFromCart}>
              <TrashIcon primaryColor="#E5E5E5" hoveredColor="#FFFFFF" />
              REMOVE
            </button>
            <Link to={`/product/${id}`}>
              <button>
                <InfoIcon primaryColor="#E5E5E5" hoveredColor="#FFFFFF" />
                MORE INFO
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={ItemQuantity}>
        <button onClick={increaseQuantity}>
          <PlusIcon primaryColor="#F7697B" hoveredColor="#FFA7B2" />
        </button>
        <small>{quantity}</small>
        <button onClick={decreaseQuantity}>
          <MinusIcon primaryColor="#F7697B" hoveredColor="#FFA7B2" />
        </button>
      </div>
    </div>
  );
}

CartItems.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.any,
  id: PropTypes.string,
  removeFromCart: PropTypes.func,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
  quantity: PropTypes.number,
};

export default CartItems;
