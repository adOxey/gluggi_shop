import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../contexts/ProductsContext";
import classes from "./NavbarCart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavbarCart = () => {
  const values = useContext(ProductsContext);

  const { wrapper, incart, cart_icon } = classes;
  return (
    <div className={wrapper}>
      <Link to="/cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="2x"
          className={cart_icon}
        />
      </Link>
      <span className={incart}>{values.cartNumber}</span>
    </div>
  );
};

export default NavbarCart;
