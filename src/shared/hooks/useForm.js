import React, { useState, useEffect } from "react";

const useForm = (initialState, validation, reducer, handleFirebaseUpload) => {
  const [values, dispatch] = React.useReducer(reducer, initialState);
  const [status, setStatus] = useState({ isSubmitted: false, message: "" });

  useEffect(() => {
    let mounted = true;

    if (values.completed) {
      setTimeout(() => {
        if (mounted) {
          dispatch({ type: "RESET_FORM", payload: initialState });
        }
      }, 1000);
    }

    return () => (mounted = false);
  }, [values.completed, initialState]);

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

  const handleUploadImage = () => {
    // e.preventDefault();
    handleFirebaseUpload(values, getImageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validation(values);
    const noErrors = Object.keys(err).length === 0;

    if (noErrors) {
      dispatch({ type: "SUBMIT_FORM" });
      setStatus({
        ...status,
        isSubmitted: true,
        message: "Submitted Successfully",
      });
      window.scrollTo(0, 0);
    } else {
      dispatch({ type: "VALIDATE_ONSUBMIT", payload: err });
      setStatus({
        ...status,
        isSubmitted: false,
        message: "All mandatory fields must be filled.",
      });
      window.scrollTo(0, 0);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    status,
    handleImageAsFile,
    handleUploadImage,
  };
};

export default useForm;
