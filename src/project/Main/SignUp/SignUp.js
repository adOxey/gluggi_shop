import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SignUp.module.css";
import { gluggiAuth } from "../../../firebase/firebase";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await gluggiAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
        res.user.updateProfile({ displayName: name });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Create an Account</h2>
      <form className={classes.loginForm}>
        <label className={classes.label}>Username</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className={classes.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className={classes.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className={classes.btn}
          onClick={(e) => handleSignUp(e)}
        >
          Create an Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
