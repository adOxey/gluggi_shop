import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";
import classes from "./Cart.module.css";
import Checkout from "./Checkout/Checkout";
import CartItems from "./CartItems/CartItems";

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
        <p>Your shopping cart is empty.</p>
      </div>
    );
  }

  return (
    <>
      <h1 className={classes.Title}>Shopping Cart</h1>
      {productsInCart.map((product, index) => (
        <CartItems
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
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
