import React, { useState, useContext } from "react";
import Fuse from "fuse.js";
import classes from "./SearchBar.module.css";

import { ProductsContext } from "../../../contexts/ProductsContext";

const SearchBar = () => {
  const { search_bar } = classes;
  const { products, handleSearch, handleReload } = useContext(ProductsContext);
  const [query, setQuery] = useState("");

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
  let searchedProducts = fuse.search(query);

  const handleChange = (e) => {
    e.preventDefault();
    handleSearch(searchedProducts);
  };

  return (
    <div className={search_bar}>
      <form onKeyUp={handleChange} onKeyDown={handleReload}>
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
