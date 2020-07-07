import React, { createContext, useState, useEffect } from "react";
import { gluggiAuth } from "../firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    gluggiAuth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          if (idTokenResult.claims.admin) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        });
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const values = {
    isLoggedIn,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
