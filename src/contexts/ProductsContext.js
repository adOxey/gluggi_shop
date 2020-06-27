import React, { createContext, useState, useEffect } from "react";
import useFirestore from "../shared/hooks/useFirestore";
import { gluggiFirestore, PRODUCTS } from "../firebase/firebase";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState([]);

  const { removeFromFirestore, changedProducts } = useFirestore(
    PRODUCTS
  );

  // Compare products from Firestore and Local Storage on mount.

  useEffect(() => {
    const fetchData = async () => {
      const localStorageKeyValue = JSON.parse(
        localStorage.getItem("cartProduct")
      );

      const getCollection = await gluggiFirestore
        .collection(PRODUCTS)
        .get();

      let getData = getCollection.docs.map((doc) => ({
        ...doc.data(),
      }));
      getData.sort((a, b) => (a.title > b.title ? 1 : -1));

      if (!localStorageKeyValue) {
        setProducts([...getData]);
      } else {
        const filteredProducts = getData.filter(
          (elem) => !localStorageKeyValue.find((el) => elem.id === el.id)
        );
        const updatedProducts = [...filteredProducts, ...localStorageKeyValue];
        setCartNumber(localStorageKeyValue.length);
        setProductsInCart([...localStorageKeyValue]);
        setProducts([
          ...updatedProducts.sort((a, b) => (a.title > b.title ? 1 : -1)),
        ]);
      }
      setLoading(false);
    };

    fetchData();
  }, [changedProducts]);

  // Search products
  const handleSearch = (searchedValue) => {
    setSearched([...searchedValue]);
    setLoading(false);
  };
  const handleReload = () => {
    setLoading(true);
  };

  // Adds product to our Cart
  const addToCart = (index) => {
    const copiedProducts = [...products];
    const clickedProduct = copiedProducts[index];

    copiedProducts[index].disabled = true;
    const unfilteredCart = [...productsInCart, clickedProduct].map(
      JSON.stringify
    );
    const removedDuplicates = new Set(unfilteredCart);
    const updatedCart = Array.from(removedDuplicates).map(JSON.parse);

    setProductsInCart((prevState) => updatedCart);
    handleProductsCount(updatedCart.length);

    // Storing product in localStorage
    localStorage.setItem("cartProduct", JSON.stringify(updatedCart));
  };

  // Removes product from  Cart
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

    // Updating product in localStorage
    localStorage.setItem("cartProduct", JSON.stringify(copiedCartState));
    const removeItem = copiedCartState;
    removeItem.length === 0 && localStorage.removeItem("cartProduct");
  };

  // Increase quantity of product in cart
  const increaseQuantity = (index) => {
    const copiedCartState = [...productsInCart];
    copiedCartState[index].quantity++;
    setProductsInCart([...copiedCartState]);
  };

  // Decrease quantity of product in cart
  const decreaseQuantity = (index) => {
    const copiedCartState = [...productsInCart];
    if (copiedCartState[index].quantity > 1) {
      copiedCartState[index].quantity--;
    }
    setProductsInCart([...copiedCartState]);
  };

  // Count products in Cart and show that number in Navbar icon
  const handleProductsCount = (inCartLength) => {
    return setCartNumber(inCartLength);
  };

  // Remove product
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
    loading,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    handleProductsCount,
    removeProduct,
    handleSearch,
    handleReload,
    searched,
  };
  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};
