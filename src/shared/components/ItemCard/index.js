import React, { useContext } from "react";
import classes from "./ItemCard.module.css";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

function ItemCard({
  id,
  title,
  description,
  price,
  image,
  removeProduct,
  children,
}) {
  const {
    Card,
    CardFooter,
    ButtonContainer,
    ImageContainer,
    ImageOverlay,
    MoreInfoIcon,
    ProductTitle,
  } = classes;

  const values = useContext(AuthContext);

  return (
    <section className={Card}>
      <div className={ImageContainer}>
        <img src={image} alt={title} />
        <div className={ImageOverlay}>
          <Link to={`/product/${id}`}>
            <FontAwesomeIcon icon={faInfo} size="8x" className={MoreInfoIcon} />
          </Link>
        </div>
      </div>
      <h1 className={ProductTitle}>
        <Link to={`/product/${id}`}>{title}</Link>
        {values.isAdmin && <button onClick={removeProduct}></button>}
      </h1>
      <p>{description}</p>
      <div className={CardFooter}>
        <div className={ButtonContainer}>{children}</div>
        <small>{price.toFixed(2)} $</small>
      </div>
    </section>
  );
}

ItemCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  removeProduct: PropTypes.func,
};

export default ItemCard;
