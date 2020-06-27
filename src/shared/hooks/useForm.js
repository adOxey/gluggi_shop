import React, { useState } from "react";
import { formReducer } from "../../reducers/addProductReducer";
import { PRODUCTS } from "../../firebase/firebase";
import useFirestore from "./useFirestore";

const useForm = (initialState, validation) => {
  // Initial state needs to be object
  // Validation needs to return errors object - errors.something = ""
  const [values, dispatch] = React.useReducer(formReducer, initialState);
  const [success, setSuccess] = useState({ submitted: false, message: "" });
  const { addToFirestore, handleFirebaseUpload } = useFirestore(
    PRODUCTS
  );

  const handleBlur = (e) => {
    const checkForErrors = validation(values);
    dispatch({
      type: "VALIDATE",
      payload: checkForErrors,
      name: e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "HANDLE_CHANGE",
      name,
      value,
    });
  };

  const handleUrl = (imgUrl) => {
    console.log("handleURL", imgUrl);
    dispatch({ type: "RETURNED_IMG_URL", payload: imgUrl });
  };

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    dispatch({ type: "HANDLE_CHANGE_IMAGE", payload: image });
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    handleFirebaseUpload(values, handleUrl);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validation(values);
    const noErrors = Object.keys(err).length === 0;

    if (noErrors) {
      addToFirestore(values);
      setSuccess({
        ...success,
        submitted: true,
        message: "Submited Successfully",
      });
      window.scrollTo(0, 0);
    } else {
      dispatch({ type: "ONSUBMIT_VALIDATE", payload: err });
      setSuccess({
        ...success,
        submitted: false,
        message: "Error ! All mandatory fields have to be filled.",
      });
      window.scrollTo(0, 0);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    success,
    handleImageAsFile,
    handleUploadImage,
  };
};

export default useForm;
