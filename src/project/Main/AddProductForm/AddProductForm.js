import React from "react";
import classes from "./AddProductForm.module.css";
import useForm from "../../../shared/hooks/useForm";
import validation from "./validation";
import ErrorRenderer from "./ErrorRederer";

const AddProductForm = () => {
  const { container, formWrapper, Btn, Errors, pageBody, uploadBtn } = classes;

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
      imageAsUrl: true,
    },
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    handleImageAsFile,
    success,
    handleUploadImage,
  } = useForm(initialState, validation);

  const styleBorder = (err, touched) => {
    if (err && touched) {
      return { border: "1px solid red" };
    }
  };

  return (
    <div className={pageBody}>
      <div className={container}>
        {success.submitted ? (
          <h1
            style={{
              color: success.submitted ? `#50d890` : "#c02739",
              margin: "auto",
            }}
          >
            {success.message}
          </h1>
        ) : (
          <h1>Add New Product</h1>
        )}
        <form className={formWrapper} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="productName">
              Product Name: <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              onBlur={handleBlur}
              value={values.productName}
              onChange={handleChange}
              style={styleBorder(
                values.errors.productName,
                values.isTouched.productName
              )}
            />
            <div className={Errors}>
              <ErrorRenderer
                isTouched={values.isTouched.productName}
                errors={values.errors.productName}
              />
            </div>
          </div>
          <div>
            <label htmlFor="shortDets">
              Short Details: <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              type="text"
              name="shortDets"
              id="shortDets"
              onBlur={handleBlur}
              value={values.shortDets}
              onChange={handleChange}
              style={styleBorder(
                values.errors.shortDets,
                values.isTouched.shortDets
              )}
            />
            <div className={Errors}>
              <ErrorRenderer
                isTouched={values.isTouched.shortDets}
                errors={values.errors.shortDets}
              />
            </div>
          </div>
          <div>
            <label htmlFor="fullDesc">
              Full Description: <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              type="text"
              name="fullDesc"
              id="fullDesc"
              onBlur={handleBlur}
              value={values.fullDesc}
              onChange={handleChange}
              style={styleBorder(
                values.errors.fullDesc,
                values.isTouched.fullDesc
              )}
            />
            <div className={Errors}>
              <ErrorRenderer
                isTouched={values.isTouched.fullDesc}
                errors={values.errors.fullDesc}
              />
            </div>
          </div>
          <div>
            <label htmlFor="ingredients">Ingredients:</label>
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              onBlur={handleBlur}
              value={values.ingredients}
              onChange={handleChange}
              style={styleBorder(
                values.errors.ingredients,
                values.isTouched.ingredients
              )}
            />
            <div className={Errors}>
              <ErrorRenderer
                isTouched={values.isTouched.ingredients}
                errors={values.errors.ingredients}
              />
            </div>
          </div>
          <div>
            <label htmlFor="alergyAdvice">Alergy Advice:</label>
            <input
              type="text"
              name="alergyAdvice"
              id="alergyAdvice"
              onBlur={handleBlur}
              value={values.alergyAdvice}
              onChange={handleChange}
              style={styleBorder(
                values.errors.alergyAdvice,
                values.isTouched.alergyAdvice
              )}
            />
            <div className={Errors}>
              <ErrorRenderer
                isTouched={values.isTouched.alergyAdvice}
                errors={values.errors.alergyAdvice}
              />
            </div>
          </div>
          <section>
            <div>
              <label htmlFor="stock">
                In Stock: <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                value={values.stock}
                onChange={handleChange}
                onBlur={handleBlur}
                style={styleBorder(values.errors.stock, values.isTouched.stock)}
              />
              <div className={Errors}>
                <ErrorRenderer
                  isTouched={values.isTouched.stock}
                  errors={values.errors.stock}
                />
              </div>
            </div>
            <div>
              <label htmlFor="price">
                Price: <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={values.price}
                onBlur={handleBlur}
                onChange={handleChange}
                style={styleBorder(values.errors.price, values.isTouched.price)}
              />
              <div className={Errors}>
                <ErrorRenderer
                  isTouched={values.isTouched.price}
                  errors={values.errors.price}
                />
              </div>
            </div>
          </section>
          <div>
            <label htmlFor="imageAsUrl">
              Product Image: <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="file"
              name="imageAsUrl"
              id="imageAsUrl"
              onBlur={handleBlur}
              onChange={handleImageAsFile}
              style={styleBorder(
                values.errors.imageAsUrl,
                values.isTouched.imageAsUrl
              )}
            />
            <button onClick={handleUploadImage} className={uploadBtn}>
              <span>UPLOAD IMAGE</span>
            </button>
            <div className={Errors}>
              <ErrorRenderer
                isTouched={values.isTouched.imageAsUrl}
                errors={values.errors.imageAsUrl}
              />
            </div>
          </div>
          <br />
          <button onSubmit={handleSubmit} className={Btn}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
