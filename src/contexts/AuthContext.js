import React, { createContext, useState, useEffect } from "react";
import { gluggiAuth } from "../firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState();

  useEffect(() => {
    gluggiAuth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={isLoggedIn}>
      {props.children}
    </AuthContext.Provider>
  );
};
