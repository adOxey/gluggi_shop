export const validation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!values.email.includes("@")) {
    errors.email = "Please enter valid email adress.";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export const firebaseAuthErrors = (authErrors) => {
  let errorMessage = "";

  if (authErrors.code === "auth/user-not-found") {
    errorMessage =
      "There is no user registered with that email address or password. Note that both fields are case-sensitive ";
  } else if (authErrors.code === "auth/wrong-password") {
    errorMessage =
      "Entered password is invalid. Note that password field is case-sensitive.";
  } else if (authErrors.code === "auth/invalid-email") {
    errorMessage =
      "Email address is invalid. Note that email field is case-sensitive.";
  }

  return errorMessage;
};

export default validation;
