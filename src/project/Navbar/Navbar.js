import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import Logo from "./Logo/Logo";
import NavLinks from "./NavLinks/NavLinks";
import SearchBar from "./SearchBar/SearchBar";
import NavbarCart from "./NavbarCart/NavbarCart";
import { gluggiAuth } from "../../firebase/firebase";

const Navbar = () => {
  const [displayName, setDisplayName] = useState("");
  const [displayNav, setDisplayNav] = useState(false);

  useEffect(() => {
    gluggiAuth.onAuthStateChanged((user) => {
      if (user) {
        setDisplayName(user.displayName);
        setDisplayNav(true);
      } else {
        setDisplayNav(true);
      }
    });
  }, []);

  let navigation = (
    <>
      <Logo />
      <NavLinks />
      <SearchBar />
      <div>
        <NavbarCart />
        <p>{displayName && `Welcome ${displayName}!`}</p>
      </div>
    </>
  );

  return <nav className={classes.Navbar}>{displayNav && navigation}</nav>;
};

export default Navbar;
