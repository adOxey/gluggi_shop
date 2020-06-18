import React, { useContext } from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../shared/components/";

const ProductCard = ({
  image,
  title,
  description,
  addToCart,
  disabled,
  price,
  id,
  removeProduct,
}) => {
  const {
    Container,
    ImgContainer,
    ImgWrap,
    Overlay,
    Icon,
    Heading,
    Desc,
    Cost,
    BtnPosition,
    IconStyle,
  } = classes;
  const isLoggedIn = useContext(AuthContext);

  const checkedIcon = (
    <FontAwesomeIcon icon={faCheckCircle} size="2x" className={IconStyle} />
  );

  return (
    <section className={Container}>
      <div className={ImgContainer}>
        <img className={ImgWrap} src={image} alt="Product" />
        <div className={Overlay}>
          <Link to={`/product/${id}`}>
            <FontAwesomeIcon icon={faInfo} size="8x" className={Icon} />
          </Link>
        </div>
      </div>
      <h2 className={Heading}>
        {title}
        {isLoggedIn && <button onClick={removeProduct}>x</button>}
      </h2>
      <p className={Desc}>{description}</p>
      <div className={BtnPosition}>
        <Button handleClick={addToCart} disabled={disabled}>
          {disabled ? (
            <>
              {checkedIcon}
              Item added
            </>
          ) : (
            `ADD TO CART`
          )}
        </Button>
      </div>
      <p className={Cost}>${price.toFixed(2)}</p>
    </section>
  );
};

export default ProductCard;
