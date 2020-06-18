import React from "react";
import classes from "./ProductsList.module.css";
import { Spinner, Card, Button } from "../../../../shared/components";

function ProductsList({
  products,
  loading,
  removeProduct,
  addToCart,
  checkedIcon,
}) {
  return (
    <div className={classes.list}>
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
}

export default ProductsList;
