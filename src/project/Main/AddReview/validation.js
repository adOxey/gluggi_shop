const validation = (values) => {
  let errors = {};

  if (!values.shortReview) {
    errors.shortReview = "Required";
  } else if (values.shortReview.length >= 33) {
    errors.shortReview = "Maximum 33 characters.";
  }

  if (!values.fullReview) {
    errors.fullReview = "Required";
  }

  return errors;
};

export default validation;
