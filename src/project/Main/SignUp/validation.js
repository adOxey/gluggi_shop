const pwRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

const validation = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length <= 5) {
    errors.username = "Username name must be at least 6 characters long";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!values.password.match(pwRegex)) {
    errors.password =
      "Password must be at least 6 characters long, at least 1 uppercase letter, 1 lowercase letter and 1 number. Without spaces.";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!values.email.includes("@")) {
    errors.email = "Please enter valid email adress.";
  }

  return errors;
};

export default validation;
