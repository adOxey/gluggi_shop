import React, { useEffect, useState } from "react";
import classes from "./ReviewPage.module.css";
import useForm from "../../../shared/hooks/useForm";
import useFirestore from "../../../shared/hooks/useFirestore";
import { REVIEWS, gluggiAuth } from "../../../firebase/firebase";
import { formReducer } from "../../../reducers/formReducer";
import validation from "./validation";
import {
  Button,
  Form,
  FormInput,
  FormTextarea,
} from "../../../shared/components";
import StarRating from "./StarRating/StarRating";

function ReviewForm() {
  useEffect(() => {
    gluggiAuth.onAuthStateChanged((user) => {
      if (user) {
        setAuthor(user.displayName);
      }
    });
  }, []);

  const initialFormState = {
    shortReview: "",
    fullReview: "",
    errors: {},
    isTouched: {
      shortReview: false,
      fullReview: false,
    },
    completed: false,
  };
  const [grade, setGrade] = useState(0);
  const [author, setAuthor] = useState("");

  const { values, handleChange, handleSubmit, handleBlur } = useForm(
    initialFormState,
    validation,
    formReducer
  );

  const { addToFirestore } = useFirestore(REVIEWS);

  useEffect(() => {
    if (values.completed && grade !== 0) {
      addToFirestore({ values, grade, author });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.completed, grade]);

  const saveRating = (items) => {
    const itemList = items.filter((item) => {
      return item.clicked === true;
    });
    setGrade(itemList.length);
  };

  return (
    <div className={classes.wrapper}>
      <h1>Say something about our products...</h1>
      <StarRating saveRating={saveRating} />
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Describe our service in one short sentence:"
          name="shortReview"
          type="text"
          value={values.shortReview}
          onChange={handleChange}
          onBlur={handleBlur}
          error={values.errors.shortReview}
          isTouched={values.isTouched.shortReview}
        />
        <FormTextarea
          label="Provide more details:"
          type="text"
          name="fullReview"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullReview}
          error={values.errors.fullReview}
          isTouched={values.isTouched.fullReview}
        />
        <Button handleClick={handleSubmit}>Send Review</Button>
      </Form>
    </div>
  );
}

export default ReviewForm;
