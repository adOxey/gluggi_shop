import React, { useContext } from "react";
import classes from "./ProductsPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { ProductsContext } from "../../../contexts/ProductsContext";
import SearchedProductsList from "./SearchedProductsList/SearchedProductsList";
import ProductsList from "./ProductsList/ProductsList";

const ProductList = () => {
  const { quote, iconStyle } = classes;
  const {
    products,
    addToCart,
    isLoading,
    removeProduct,
    searched,
    loadMoreProducts,
  } = useContext(ProductsContext);

  const checkedIcon = (
    <FontAwesomeIcon icon={faCheckCircle} size="2x" className={iconStyle} />
  );

  return (
    <div>
      <h2 className={quote}>
        A Healthy Lifestyle Not Only Changes Your Body, It Changes Your Mind,
        Your Attitude And Your Mood!
      </h2>
      {searched.length <= 0 ? (
        <ProductsList
          products={products}
          isLoading={isLoading}
          removeProduct={removeProduct}
          addToCart={addToCart}
          checkedIcon={checkedIcon}
          loadMore={loadMoreProducts}
        />
      ) : (
        <SearchedProductsList
          searched={searched}
          removeProduct={removeProduct}
          addToCart={addToCart}
          checkedIcon={checkedIcon}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default ProductList;
