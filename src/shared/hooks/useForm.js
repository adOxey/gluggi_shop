import React, { useState } from "react";

const useForm = (initialState, validation, reducer, handleFirebaseUpload) => {
  const [values, dispatch] = React.useReducer(reducer, initialState);
  const [success, setSuccess] = useState({ submitted: false, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "HANDLE_CHANGE",
      name,
      value,
    });
  };

  const handleBlur = (e) => {
    const checkForErrors = validation(values);
    dispatch({
      type: "VALIDATE_ONBLUR",
      payload: checkForErrors,
      name: e.target.name,
    });
  };

  const getImageUrl = (imgUrl) => {
    console.log("getImageUrl", imgUrl);
    dispatch({ type: "RETURN_IMG_URL", payload: imgUrl });
  };

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    dispatch({ type: "HANDLE_IMAGE_AS_FILE", payload: image });
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    handleFirebaseUpload(values, getImageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validation(values);
    const noErrors = Object.keys(err).length === 0;

    if (noErrors) {
      dispatch({ type: "SUBMIT_FORM" });
      setSuccess({
        ...success,
        submitted: true,
        message: "Submited Successfully",
      });
      setTimeout(() => {
        dispatch({ type: "RESET_FORM", payload: initialState });
      }, 1500);
      window.scrollTo(0, 0);
    } else {
      dispatch({ type: "VALIDATE_ONSUBMIT", payload: err });
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
