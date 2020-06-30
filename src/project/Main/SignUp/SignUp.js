import React, { useEffect } from "react";
import classes from "./SignUp.module.css";
import { useHistory } from "react-router-dom";
import { gluggiAuth } from "../../../firebase/firebase";
import useForm from "../../../shared/hooks/useForm";
import { formReducer } from "../../../reducers/formReducer";
import validation from "./validation";
import { Button, Form, FormInput } from "../../../shared/components";

const SignUp = (props) => {
  const history = useHistory();

  const initialState = {
    username: "",
    password: "",
    email: "",
    errors: {},
    isTouched: {
      username: false,
      password: false,
      email: false,
    },
    completed: false,
  };

  const { values, handleChange, handleSubmit, handleBlur } = useForm(
    initialState,
    validation,
    formReducer
  );

  useEffect(() => {
    const handleSignup = async () => {
      if (values.completed) {
        await gluggiAuth
          .createUserWithEmailAndPassword(values.email, values.password)
          .then((res) => {
            res.user.updateProfile({ displayName: values.username });
            history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    handleSignup();
  }, [values.completed]);

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Create an Account</h2>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Username:"
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={values.errors.username}
          isTouched={values.isTouched.username}
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
        <Button handleClick={handleSubmit} size={{ width: "100%" }}>
          Create an Account
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
