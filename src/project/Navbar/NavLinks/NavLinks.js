import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { gluggiAuth } from "../../../firebase/firebase";
import classes from "./NavLinks.module.css";
import { AuthContext } from "../../../contexts/AuthContext";

const NavLinks = () => {
  const isLoggedIn = useContext(AuthContext);
  const history = useHistory();

  const handleSignOut = async () => {
    await gluggiAuth
      .signOut()
      .then((res) => {
        history.push("/");
        return res;
      })
      .catch((err) => {
        console.log("Error message", err);
      });
  };

  return (
    <ul className={classes.Navigation}>
      <li>
        <Link to="/products">Products</Link>
      </li>

      {isLoggedIn && (
        <>
          <li>
            <Link to="/addproduct">Add Product</Link>
          </li>
          <li>
            <Link to="/review-us">Review</Link>
          </li>
          <li>
            <a href="/" onClick={handleSignOut}>
              Sign out
            </a>
          </li>
        </>
      )}

      {!isLoggedIn && (
        <>
          <li>
            <Link to="/sign-up">Sign up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign in</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
