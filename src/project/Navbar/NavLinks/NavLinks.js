import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { gluggiAuth } from "../../../firebase/firebase";
import classes from "./NavLinks.module.css";
import { AuthContext } from "../../../contexts/AuthContext";

const NavLinks = () => {
  const values = useContext(AuthContext);
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

      {values.isLoggedIn && (
        <>
          <li>
            <Link to="/rate-us">Rate us</Link>
          </li>
          <li>
            <a href="/" onClick={handleSignOut}>
              Sign out
            </a>
          </li>
          {values.isAdmin && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </>
      )}

      {!values.isLoggedIn && (
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
