import React, { useState } from "react";
import classes from "./SignIn.module.css";
import { gluggiAuth } from "../../../firebase/firebase";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();
    await gluggiAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/products");
        return res;
      })
      .catch((err) => {
        console.log("Err msg:", err);
      });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h2 className={classes.heading}>Sign in</h2>
        <form className={classes.loginForm}>
          <label className={classes.label}>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            required
          />
          <label className={classes.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className={classes.btn} onClick={handleSignIn}>
            Sign in
          </button>
          <p>Forgot password?</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
