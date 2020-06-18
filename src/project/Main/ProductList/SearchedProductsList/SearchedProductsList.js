import React from "react";
import classes from "./SearchedProductsList.module.css";
import { Card, Button, Spinner } from "../../../../shared/components";

function SearchedProductsList({
  searched,
  removeProduct,
  addToCart,
  checkedIcon,
  loading,
}) {
  return (
    <div className={classes.list}>
      {loading ? (
        <Spinner />
      ) : (
        searched.map((product, index) => {
          return (
            <Card
              key={product.item.id}
              id={product.item.id}
              title={product.item.title}
              description={product.item.description}
              price={product.item.price}
              image={product.item.image}
              removeProduct={() => removeProduct(product.item.id)}
            >
              <Button
                handleClick={() => addToCart(index)}
                disabled={product.item.disabled}
              >
                {product.item.disabled ? (
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

export default SearchedProductsList;
