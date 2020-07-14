import React, { useState, useContext, useEffect } from "react";
import Fuse from "fuse.js";
import classes from "./SearchBar.module.css";
import { gluggiFirestore, PRODUCTS } from "../../../firebase/firebase";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { useHistory } from "react-router-dom";

const { search_bar } = classes;

const SearchBar = () => {
  const { handleSearch } = useContext(ProductsContext);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const history = useHistory();

  const options = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    includeMatches: false,
    findAllMatches: false,
    location: 0,
    threshold: 0.5,
    distance: 100,
    useExtendedSearch: false,
    minMatchCharLength: 3,
    keys: ["title", "ingredients"],
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await gluggiFirestore.collection(PRODUCTS).get();
      const products = data.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const fuse = new Fuse(products, options);
  let searchedProducts = fuse.search(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchedProducts);
    setTimeout(() => {
      history.push("/products?");
    }, 500);
  };

  return (
    <div className={search_bar}>
      <form
        onKeyUp={() => handleSearch(searchedProducts)}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search by title or ingredients"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
