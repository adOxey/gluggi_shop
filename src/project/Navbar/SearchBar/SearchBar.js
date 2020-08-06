import React, { useState, useContext, useEffect, useRef } from "react";
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
  const [fetch, setFetch] = useState(false);

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

  const fuse = new Fuse(products, options);
  const searchedProducts = fuse.search(query);

  const isFirstRun = useRef(true);

  // Triggering this effect state var fetch will be changed to true
  // Which will trigger second useEffect for fetching products.
  useEffect(() => {
    if (query) {
      setFetch(true);
    }
  }, [query]);

  // This effect wont run on initial render
  // It will run only when fetch dependency changes.
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const fetchProducts = async () => {
      const data = await gluggiFirestore.collection(PRODUCTS).get();
      const products = data.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
    };

    fetchProducts();
    console.log("SearchBar - useEffect");
  }, [fetch]);

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
