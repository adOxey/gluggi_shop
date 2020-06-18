import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import classes from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../shared/components/";

const ProductCard = (props) => {
  const isLoggedIn = useContext(AuthContext);
  const {
    image,
    title,
    description,
    addToCart,
    disabled,
    price,
    id,
    removeProduct,
  } = props;

  const {
    product_container,
    img_container,
    img_wrap,
    overlay,
    icon,
    heading,
    desc,
    cost,
    btnPosition,
    iconStyle,
  } = classes;

  const iconn = (
    <FontAwesomeIcon icon={faCheckCircle} size="2x" className={iconStyle} />
  );

  return (
    <section className={product_container}>
      <div className={img_container}>
        <img className={img_wrap} src={image} alt="Product" />
        <div className={overlay}>
          <Link to={`/product/${id}`}>
            <FontAwesomeIcon icon={faInfo} size="8x" className={icon} />
          </Link>
        </div>
      </div>
      <h2 className={heading}>
        {title}
        {isLoggedIn && <button onClick={removeProduct}>x</button>}
      </h2>
      <p className={desc}>{description}</p>
      <div className={btnPosition}>
        <Button handleClick={addToCart} disabled={disabled}>
          {disabled ? (
            <>
              {iconn}
              Item added
            </>
          ) : (
            `ADD TO CART`
          )}
        </Button>
      </div>
      <p className={cost}>${price.toFixed(2)}</p>
    </section>
  );
};

export default ProductCard;
