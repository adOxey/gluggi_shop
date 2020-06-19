import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";
import CartProducts from "./CartProducts/CartProducts";
import classes from "./Cart.module.css";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
  const values = useContext(ProductsContext);
  const {
    productsInCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = values;

  const sumOfProducts = productsInCart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  if (productsInCart.length === 0) {
    return (
      <div className={classes.noItems}>
        <p>There is no products in your cart.</p>
      </div>
    );
  }

  return (
    <>
      {productsInCart.map((product, index) => (
        <CartProducts
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          key={product.id}
          id={product.id}
          removeFromCart={() => removeFromCart(product.id)}
          increaseQuantity={() => increaseQuantity(index)}
          decreaseQuantity={() => decreaseQuantity(index)}
          quantity={product.quantity}
        />
      ))}
      <Checkout sumValue={sumOfProducts} productsInCart={productsInCart} />
    </>
  );
};

export default Cart;
