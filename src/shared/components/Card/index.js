import React, { useContext } from "react";
import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const Card = ({
  image,
  title,
  description,
  price,
  id,
  removeProduct,
  children,
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
  } = classes;

  const values = useContext(AuthContext);

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
        <Link
          to={`/product/${id}`}
          style={{ textDecoration: "none", color: "#474747" }}
        >
          {title}
        </Link>
        {values.isAdmin && <button onClick={removeProduct}>x</button>}
      </h2>
      <p className={Desc}>{description}</p>
      <div className={BtnPosition}>{children}</div>
      <p className={Cost}>{price.toFixed(2)} $</p>
    </section>
  );
};

export default Card;
