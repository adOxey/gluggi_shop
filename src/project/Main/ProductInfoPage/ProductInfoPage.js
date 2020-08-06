import React, { useContext, useEffect, useState, Fragment } from "react";
import classes from "./ProductInfoPage.module.css";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { gluggiFirestore, PRODUCTS } from "../../../firebase/firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, Spinner } from "../../../shared/components";

const { Container, Wrapper, MainImg, IconStyle, Loader } = classes;

const ProductInfoPage = () => {
  const values = useContext(ProductsContext);
  const { addToCart } = values;

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      const data = await gluggiFirestore
        .collection(PRODUCTS)
        .where("id", "==", `${id}`)
        .get();

      const products = data.docs.map((doc) => doc.data());

      const localStorageItems = JSON.parse(localStorage.getItem("cartProduct"));

      localStorageItems &&
        localStorageItems.forEach((item) => {
          products.forEach((product) => {
            if (item.id === product.id) {
              product.disabled = true;
            }
          });
        });
      setProduct([...products]);
      setIsLoading(false);
    };
    console.log("ProductInfo - useEffect");
    getProductById();
  }, [id]);

  const checkedIcon = (
    <FontAwesomeIcon icon={faCheckCircle} size="2x" className={IconStyle} />
  );

  const productInformation = product.map((product) => {
    return (
      <Fragment key={product.id}>
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
            handleClick={() => addToCart(product)}
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
      </Fragment>
    );
  });

  return (
    <section className={Container}>
      {isLoading ? (
        <div className={Loader}>
          <Spinner size="4x" />
        </div>
      ) : (
        <div className={Wrapper}>{productInformation}</div>
      )}
    </section>
  );
};

export default ProductInfoPage;
