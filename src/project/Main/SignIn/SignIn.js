import React, { useState, useEffect } from "react";
import classes from "./SignIn.module.css";
import { gluggiAuth } from "../../../firebase/firebase";
import useForm from "../../../shared/hooks/useForm";
import { formReducer } from "../../../reducers/formReducer";
import { validation, firebaseAuthErrors } from "./validation";
import { useHistory } from "react-router-dom";
import { Button, Form, FormInput } from "../../../shared/components";

const SignIn = () => {
  const history = useHistory();

  const [authErrors, setAuthErrors] = useState({});
  const authErrorMessage = firebaseAuthErrors(authErrors);

  const initialState = {
    email: "",
    password: "",
    errors: {},
    isTouched: {
      email: false,
      password: false,
    },
    completed: false,
  };

  const { values, handleBlur, handleChange, handleSubmit } = useForm(
    initialState,
    validation,
    formReducer
  );

  useEffect(() => {
    if (values.completed) {
      handleSignIn();
    }
  }, [values.completed]);

  const handleSignIn = async () => {
    await gluggiAuth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        history.push("/products");
        return res;
      })
      .catch((err) => {
        console.log("Err msg:", err);
        setAuthErrors((prevState) => err);
      });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h2 className={classes.heading}>Sign in</h2>
        <Form onClick={handleSubmit}>
          <FormInput
            label="Email:"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={values.errors.email}
            isTouched={values.isTouched.email}
          />
          <FormInput
            label="Password:"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={values.errors.password}
            isTouched={values.isTouched.password}
          />
          <Button handleClick={handleSubmit} size={{ width: "100%" }}>
            Sign in
          </Button>
          <p style={{ color: "red", paddingTop: "10px" }}>{authErrorMessage}</p>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
