import React, { useState, useEffect } from "react";
import classes from "./EditProduct.module.css";
import { gluggiFirestore, PRODUCTS } from "../../../../firebase/firebase";
import validation from "./validation";
import useForm from "../../../../shared/hooks/useForm";
import useFirestore from "../../../../shared/hooks/useFirestore";
import { formReducer } from "../../../../reducers/formReducer";
import {
  Spinner,
  Accordion,
  Form,
  FormInput,
  FormTextarea,
  Button,
} from "../../../../shared/components";

const { pageBody, spinner } = classes;

function EditProduct(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const unsubscribe = gluggiFirestore
      .collection(PRODUCTS)
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          let products = [];
          snapshot.forEach((doc) =>
            products.push({ docName: doc.id, ...doc.data() })
          );
          setProducts(products);
          setIsLoading(false);
        } else {
          console.log("Collection empty or something went wrong");
        }
      });
    console.log("EditProduct - useEffect");
    return () => {
      unsubscribe();
    };
  }, []);

  const collectClickedProductData = (product) => {
    const collectedData = {
      productName: product.title,
      shortDets: product.description,
      fullDesc: product.details,
      stock: product.quantity,
      price: product.price,
      ingredients: product.ingredients,
      alergyAdvice: product.alergy_advice,
      imageAsFile: "",
      imageAsUrl: "",
      docName: product.docName,
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

    populateFormFields(collectedData);
  };

  const { updateProductInfo, handleFirebaseUpload } = useFirestore(PRODUCTS);
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    status,
    handleImageAsFile,
    populateFormFields,
    handleUploadImage,
  } = useForm(initialState, validation, formReducer, handleFirebaseUpload);

  useEffect(() => {
    if (values.completed) {
      updateProductInfo(values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.completed]);

  return (
    <div className={pageBody}>
      <h1>Edit product</h1>
      {isLoading ? (
        <div className={spinner}>
          <Spinner size="6x" />
        </div>
      ) : (
        <>
          {products.map((product) => (
            <Accordion
              key={product.id}
              title={product.title}
              handleClick={() => collectClickedProductData(product)}
            >
              {status.message ? (
                <h1
                  style={{
                    color: status.isSubmitted ? `#50d890` : `#c02739`,
                    margin: "auto",
                  }}
                >
                  {status.message}
                </h1>
              ) : null}
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
                <FormTextarea
                  label="Short details:"
                  type="text"
                  name="shortDets"
                  onBlur={handleBlur}
                  value={values.shortDets}
                  onChange={handleChange}
                  error={values.errors.shortDets}
                  isTouched={values.isTouched.shortDets}
                />
                <FormTextarea
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
                  label="Allergy Advice:"
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
                  uploadStatus={values.imageAsUrl}
                />
                <br />
                <Button
                  handleClick={handleSubmit}
                  style={{ width: "100%", fontSize: "16px" }}
                >
                  SUBMIT PRODUCT
                </Button>
              </Form>
            </Accordion>
          ))}
        </>
      )}
    </div>
  );
}

export default EditProduct;
