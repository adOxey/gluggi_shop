import React, { useContext } from "react";
import classes from "./ProductList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Spinner, Card, Button } from "../../../shared/components";
import { ProductsContext } from "../../../contexts/ProductsContext";
import SearchedProductsList from "./SearchedProductsList/SearchedProductsList";

const ProductList = () => {
  const { quote, list, iconStyle } = classes;
  const { products, addToCart, loading, removeProduct, searched } = useContext(
    ProductsContext
  );

  const checkedIcon = (
    <FontAwesomeIcon icon={faCheckCircle} size="2x" className={iconStyle} />
  );

  const renderProducts = (
    <div className={list}>
      {loading ? (
        <Spinner />
      ) : (
        products.map((product, index) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              removeProduct={() => removeProduct(product.id)}
            >
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
            </Card>
          );
        })
      )}
    </div>
  );

  return (
    <div>
      <h2 className={quote}>
        A Healthy Lifestyle Not Only Changes Your Body, It Changes Your Mind,
        Your Attitude And Your Mood
      </h2>
      {searched.length <= 0 ? (
        renderProducts
      ) : (
        <SearchedProductsList
          searched={searched}
          removeProduct={removeProduct}
          addToCart={addToCart}
          checkedIcon={checkedIcon}
          loading={loading}
        />
      )}
    </div>
  );
};

export default ProductList;
