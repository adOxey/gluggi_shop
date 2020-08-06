import React, { createContext, useState, useEffect } from "react";
import useFirestore from "../shared/hooks/useFirestore";
import { gluggiFirestore, PRODUCTS } from "../firebase/firebase";
import { debounce } from "../shared/utils/debounceFunction";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searched, setSearched] = useState([]);
  const [limit, setLimit] = useState(8);

  const { removeFromFirestore } = useFirestore(PRODUCTS);

  // Fetch products from db and compare to Local Storage.
  useEffect(() => {
    const unsubscribe = gluggiFirestore
      .collection(PRODUCTS)
      .limit(limit)
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          let products = [];
          snapshot.forEach((doc) =>
            products.push({ id: doc.id, ...doc.data() })
          );

          const localStorageItems = JSON.parse(
            localStorage.getItem("cartProduct")
          );

          if (localStorageItems) {
            products.forEach((product) => {
              localStorageItems.forEach((item) => {
                if (item.id === product.id) {
                  product.disabled = true;
                }
              });
            });

            setCartNumber(localStorageItems.length);
            setProductsInCart(localStorageItems);
          }
          setProducts(products);
          setIsLoading(false);
        } else {
          console.log("Collection empty or something went wrong...");
        }
      });
    console.log("ProductsContext - useEffect");
    return () => {
      unsubscribe();
    };
  }, [limit]);

  // Fetch more products from db
  const loadMoreProducts = () => {
    setLimit((prevState) => prevState + 4);
  };

  // Search products using debounce function
  const handleSearch = debounce(function (searchedValue) {
    setIsLoading(true);
    setSearched([...searchedValue]);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, 400);

  // Add product to cart
  const addToCart = (product) => {
    product.disabled = true;

    const unfilteredCart = [...productsInCart, product].map(JSON.stringify);
    const removedDuplicates = new Set(unfilteredCart);
    const updatedCart = Array.from(removedDuplicates).map(JSON.parse);

    setProductsInCart((prevState) => updatedCart);
    handleProductsCount(updatedCart.length);

    localStorage.setItem("cartProduct", JSON.stringify(updatedCart));
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    const copiedCartState = [...productsInCart];
    const productIndex = copiedCartState.findIndex(
      (product) => product.id === id
    );

    const copiedProducts = products.map((prod) => {
      if (prod.id === id) {
        prod.disabled = false;
      }
      return prod;
    });

    copiedCartState.splice(productIndex, 1);
    setProductsInCart([...copiedCartState]);
    handleProductsCount(copiedCartState.length);
    setProducts([...copiedProducts]);

    localStorage.setItem("cartProduct", JSON.stringify(copiedCartState));
    const removeItem = copiedCartState;
    removeItem.length === 0 && localStorage.removeItem("cartProduct");
  };

  // Increase quantity in cart
  const increaseQuantity = (index) => {
    const copiedCartState = [...productsInCart];
    copiedCartState[index].quantity++;
    setProductsInCart([...copiedCartState]);
    localStorage.setItem("cartProduct", JSON.stringify(copiedCartState));
  };

  // Decrease quantity in cart
  const decreaseQuantity = (index) => {
    const copiedCartState = [...productsInCart];
    if (copiedCartState[index].quantity > 1) {
      copiedCartState[index].quantity--;
    }
    setProductsInCart([...copiedCartState]);
    localStorage.setItem("cartProduct", JSON.stringify(copiedCartState));
  };

  // Count products in Cart and show that number in navigation icon
  const handleProductsCount = (inCartLength) => {
    return setCartNumber(inCartLength);
  };

  // Remove product from product list & db
  const removeProduct = (id) => {
    const stateCopy = [...products];
    const productIndex = stateCopy.findIndex((product) => product.id === id);
    const product = stateCopy[productIndex];

    removeFromCart(id);
    removeFromFirestore(product.id);
  };

  const contextValue = {
    products,
    productsInCart,
    cartNumber,
    isLoading,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    handleProductsCount,
    removeProduct,
    handleSearch,
    searched,
    loadMoreProducts,
  };
  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};
