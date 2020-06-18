const validation = (values) => {
  let errors = {};

  if (!values.productName) {
    errors.productName = "Required";
  } else if (values.productName.length <= 5) {
    errors.productName = "Product name must be at least 6 characters long";
  }

  if (!values.shortDets) {
    errors.shortDets = "Required";
  } else if (values.shortDets.length <= 201) {
    errors.shortDets = "Short Details must be at least 201 characters long";
  } else if (values.shortDets.length >= 288) {
    errors.shortDets =
      "You exceded max character limit of 234 fro Short Details";
  }

  if (!values.fullDesc) {
    errors.fullDesc = "Required";
  } else if (values.fullDesc.length <= 35) {
    errors.fullDesc = "Full description must be at least 35 characters";
  }

  if (values.stock <= 0) {
    errors.stock = "Stock cannot be zero";
  }
  if (values.price <= 0) {
    errors.price = "Price cannot be zero";
  }

  if (values.imageAsUrl === "") {
    errors.imageAsUrl = "Image must be uploaded";
  }

  return errors;
};

export default validation;
