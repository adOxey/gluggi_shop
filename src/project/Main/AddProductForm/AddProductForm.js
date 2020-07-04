import React, { useEffect } from "react";
import classes from "./AddProductForm.module.css";
import useForm from "../../../shared/hooks/useForm";
import validation from "./validation";
import { PRODUCTS } from "../../../firebase/firebase";
import useFirestore from "../../../shared/hooks/useFirestore";
import { formReducer } from "../.././../reducers/formReducer";
import { Button, Form, FormInput } from "../../../shared/components";

const AddProductForm = () => {
  const { container, pageBody } = classes;

  const { addToFirestore, handleFirebaseUpload } = useFirestore(PRODUCTS);

  const initialState = {
    productName: "",
    shortDets: "",
    fullDesc: "",
    stock: 0,
    price: 0,
    ingredients: "",
    alergyAdvice: "",
    imageAsFile: "",
    imageAsUrl: "",
    errors: {},
    isTouched: {
      productName: false,
      shortDets: false,
      fullDesc: false,
      stock: false,
      price: false,
      productImage: false,
      imageAsUrl: false,
    },
    completed: false,
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    handleImageAsFile,
    status,
    handleUploadImage,
  } = useForm(initialState, validation, formReducer, handleFirebaseUpload);

  useEffect(() => {
    if (values.completed) {
      addToFirestore(values);
    }
    console.log("UseEffect rerendered");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.completed]);

  return (
    <div className={pageBody}>
      <div className={container}>
        {status.message ? (
          <h1
            style={{
              color: status.isSubmitted ? `#50d890` : `#c02739`,
              margin: "auto",
            }}
          >
            {status.message}
          </h1>
        ) : (
          <h1>Add New Product</h1>
        )}
        <Form onSubmit={handleSubmit}>
          <FormInput
            label="Product name:"
            type="text"
            name="productName"
            onBlur={handleBlur}
            value={values.productName}
            onChange={handleChange}
            error={values.errors.productName}
            isTouched={values.isTouched.productName}
          />
          <FormInput
            label="Short details:"
            type="text"
            name="shortDets"
            onBlur={handleBlur}
            value={values.shortDets}
            onChange={handleChange}
            error={values.errors.shortDets}
            isTouched={values.isTouched.shortDets}
          />
          <FormInput
            label="Full description:"
            type="text"
            name="fullDesc"
            onBlur={handleBlur}
            value={values.fullDesc}
            onChange={handleChange}
            error={values.errors.fullDesc}
            isTouched={values.isTouched.fullDesc}
          />
          <FormInput
            label="Ingredients:"
            type="text"
            name="ingredients"
            onBlur={handleBlur}
            value={values.ingredients}
            onChange={handleChange}
            error={values.errors.ingredients}
            isTouched={values.isTouched.ingredients}
          />
          <FormInput
            label="Alergy Advice:"
            type="text"
            name="alergyAdvice"
            onBlur={handleBlur}
            value={values.alergyAdvice}
            onChange={handleChange}
            error={values.errors.alergyAdvice}
            isTouched={values.isTouched.alergyAdvice}
          />
          <FormInput
            label="Stock:"
            type="number"
            name="stock"
            onBlur={handleBlur}
            value={values.stock}
            onChange={handleChange}
            error={values.errors.stock}
            isTouched={values.isTouched.stock}
          />
          <FormInput
            label="Price:"
            type="number"
            name="price"
            onBlur={handleBlur}
            value={values.price}
            onChange={handleChange}
            error={values.errors.price}
            isTouched={values.isTouched.price}
          />
          <FormInput
            label="Upload product image:"
            type="file"
            name="imageAsUrl"
            onBlur={handleBlur}
            onChange={handleImageAsFile}
            error={values.errors.imageAsUrl}
            isTouched={values.isTouched.imageAsUrl}
            handleUpload={handleUploadImage}
          />
          <br />
          <Button
            handleClick={handleSubmit}
            size={{ width: "100%", fontSize: "16px" }}
          >
            SUBMIT PRODUCT
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProductForm;
