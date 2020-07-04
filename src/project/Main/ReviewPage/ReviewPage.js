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
  const [grade, setGrade] = useState(0);
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState({ isSubmitted: false, message: "" });

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

  const { values, handleChange, handleSubmit, handleBlur } = useForm(
    initialFormState,
    validation,
    formReducer
  );

  const { addToFirestore } = useFirestore(REVIEWS);

  useEffect(() => {
    if (values.completed) {
      if (grade !== 0) {
        addToFirestore({ values, grade, author });
        setStatus({ isSubmitted: true, message: "Submitted Successfully" });
      } else {
        setStatus({
          isSubmitted: false,
          message: "You need to rate us to submit review",
        });
      }
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
    <div className={classes.Wrapper}>
      <div>
        {status.isSubmitted ? (
          <p className={classes.Success}>{status.message}</p>
        ) : (
          <h1>Say something about our products...</h1>
        )}

        <StarRating saveRating={saveRating} />
        <p className={classes.Error}>{!status.isSubmitted && status.message}</p>
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
    </div>
  );
}

export default ReviewForm;
