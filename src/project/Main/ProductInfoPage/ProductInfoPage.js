import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./ProductInfoPage.module.css";
import { Button } from "../../../shared/components";

const ProductInfoPage = () => {
  const values = useContext(ProductsContext);
  const { products, addToCart } = values;

  const { Container, Wrapper, MainImg, IconStyle } = classes;

  let { id } = useParams();

  const checkedIcon = (
    <FontAwesomeIcon icon={faCheckCircle} size="2x" className={IconStyle} />
  );

  return products.map((product, index) => {
    if (id === product.id) {
      return (
        <section className={Container} key={product.id}>
          <div className={Wrapper}>
            <img src={product.image} alt={product.title} className={MainImg} />
            <h2>{product.title}</h2>
            <h3>Product Information</h3>
            <p>{product.details}</p>
            <h3>Ingredients</h3>
            <p>{product.ingredients}</p>
            <h3>Allergy Advice</h3>
            <p>{product.alergy_advice}</p>
            <div style={{ marginTop: "20px" }}>
              <Button
                handleClick={() => addToCart(index)}
                disabled={product.disabled}
              >
                {product.disabled ? (
                  <>
                    {checkedIcon}
                    Item added
                  </>
                ) : (
                  `ADD TO CART`
                )}
              </Button>
            </div>
          </div>
        </section>
      );
    }
    return null;
  });
};

export default ProductInfoPage;
