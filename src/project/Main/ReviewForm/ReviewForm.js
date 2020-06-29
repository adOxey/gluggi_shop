import React from "react";
import { Button, Form, FormInput } from "../../../shared/components";
import classes from "./ReviewForm.module.css";

function ReviewForm() {
  return (
    <div className={classes.wrapper}>
      <h1>Say something about our products...</h1>
      <Form>
        <FormInput label="Title:" />
        <FormInput label="Description:" />
        <FormInput label="About you:" />
        <FormInput label="Interests:" />
        <Button>Send Review</Button>
      </Form>
    </div>
  );
}

export default ReviewForm;
