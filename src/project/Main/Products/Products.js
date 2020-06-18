import React, { useContext } from "react";
import classes from "./Products.module.css";
import ProductCard from "./ProductCard/ProductCard";
import { Spinner } from "../../../shared/components/";
import { ProductsContext } from "../../../contexts/ProductsContext";

const Products = () => {
  const { quote, list } = classes;
  const { products, addToCart, loading, removeProduct, searched } = useContext(
    ProductsContext
  );

  const searchResults = (
    <div className={list}>
      {loading ? (
        <Spinner />
      ) : (
        searched.map((product, index) => {
          return (
            <ProductCard
              key={product.item.id}
              id={product.item.id}
              title={product.item.title}
              description={product.item.description}
              price={product.item.price}
              image={product.item.image}
              addToCart={() => addToCart(index)}
              removeProduct={() => removeProduct(product.id)}
              disabled={product.item.disabled}
            />
          );
        })
      )}
    </div>
  );

  const allProducts = (
    <div className={list}>
      {loading ? (
        <Spinner />
      ) : (
        products.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              addToCart={() => addToCart(index)}
              removeProduct={() => removeProduct(product.id)}
              disabled={product.disabled}
            />
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
      {searched.length <= 0 ? allProducts : searchResults}
    </div>
  );
};

export default Products;
