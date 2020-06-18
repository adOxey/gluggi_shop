import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../../../contexts/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./ProductPage.module.css";
import { Button } from "../../../../shared/components/";

const ProductPage = () => {
  const values = useContext(ProductsContext);
  const { products, addToCart } = values;

  const { container, wrapper, mainImg, iconStyle } = classes;

  let { id } = useParams();

  const iconn = (
    <FontAwesomeIcon icon={faCheckCircle} size="2x" className={iconStyle} />
  );

  return products.map((product, index) => {
    if (id === product.id) {
      return (
        <section className={container} key={product.id}>
          <div className={wrapper}>
            <img src={product.image} alt={product.title} className={mainImg} />
            <h2>{product.title}</h2>
            <h3>Product Information</h3>
            <p>{product.details}</p>
            <h3>Ingredients</h3>
            <p>{product.ingredients}</p>
            <h3>Allergy Advice</h3>
            <p>{product.alergy_advice}</p>
            <div>
              <Button
                handleClick={() => addToCart(index)}
                disabled={product.disabled}
              >
                {product.disabled ? (
                  <>
                    {iconn}
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

export default ProductPage;
