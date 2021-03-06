import React from "react";
import classes from "./ProductsList.module.css";
import { Spinner, Card, Button, ItemCard } from "../../../../shared/components";

const { list, loadMoreWrapper } = classes;

function ProductsList({
  products,
  isLoading,
  removeProduct,
  addToCart,
  checkedIcon,
  loadMore,
}) {
  return (
    <>
      <div className={list}>
        {isLoading ? (
          <Spinner size="4x" style={{ marginTop: "100px" }} />
        ) : (
          products.map((product) => {
            return (
              // <Card
              //   key={product.id}
              //   id={product.id}
              //   title={product.title}
              //   description={product.description}
              //   price={product.price}
              //   image={product.image}
              //   removeProduct={() => removeProduct(product.id)}
              // >
              //   <Button
              //     handleClick={() => addToCart(product)}
              //     disabled={product.disabled}
              //   >
              //     {product.disabled ? (
              //       <>
              //         {checkedIcon}
              //         Item added
              //       </>
              //     ) : (
              //       `ADD TO CART`
              //     )}
              //   </Button>
              // </Card>
              <ItemCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                removeProduct={() => removeProduct(product.id)}
              />
            );
          })
        )}
      </div>
      {!isLoading && (
        <div className={loadMoreWrapper}>
          <Button
            handleClick={loadMore}
            variant="info"
            style={{ width: "50vw" }}
          >
            Load more...
          </Button>
        </div>
      )}
    </>
  );
}

export default ProductsList;
