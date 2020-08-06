import React from "react";
import classes from "./SearchedProductsList.module.css";
import { Card, Button, Spinner } from "../../../../shared/components";

function SearchedProductsList({
  searched,
  removeProduct,
  addToCart,
  checkedIcon,
  isLoading,
}) {
  return (
    <div className={classes.list}>
      {isLoading ? (
        <Spinner size="4x" style={{ marginTop: "100px" }} />
      ) : (
        searched.map((product) => {
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
                handleClick={() => addToCart(product.item)}
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
