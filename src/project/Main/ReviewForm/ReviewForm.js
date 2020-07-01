import React, { useState } from "react";
import { Button, Form, FormInput } from "../../../shared/components";
import classes from "./ReviewForm.module.css";

function ReviewForm() {
  const initialState = [
    { star: "one", clicked: false, id: 1 },
    { star: "two", clicked: false, id: 2 },
    { star: "three", clicked: false, id: 3 },
    { star: "four", clicked: false, id: 4 },
    { star: "five", clicked: false, id: 5 },
  ];
  const [ratings, setRatings] = useState(initialState);

  const handleClick = () => {};

  return (
    <div className={classes.wrapper}>
      <h1>Say something about our products...</h1>
      <div className={classes.ratings}>
        <h3>Rate us:</h3>
        <ul>
          {ratings.map((star) => (
            <li key={star.id} onClick={(star, id) => handleClick(star.id)}>
              &#9734;
            </li>
          ))}
          {/* <li onMouseOver={}>&#9734;</li>
          <li onMouseOver={}>&#9734;</li>
          <li onMouseOver={}>&#9734;</li>
          <li onMouseOver={}>&#9734;</li>
          <li onMouseOver={}>&#9734;</li> */}
        </ul>
      </div>
      <Form>
        <FormInput label="Title:" />
        <FormInput label="Description:" />
        <Button>Send Review</Button>
      </Form>
    </div>
  );
}

export default ReviewForm;
