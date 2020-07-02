import React, { useState } from "react";
import { Button, Form, FormInput } from "../../../shared/components";
import classes from "./ReviewForm.module.css";

function ReviewForm() {
  const notVoted = <span>&#9734;</span>;
  const voted = <span>&#9733;</span>;

  const initialState = [
    { rating: 1, isVoted: notVoted.props.children },
    { rating: 2, isVoted: notVoted.props.children },
    { rating: 3, isVoted: notVoted.props.children },
    { rating: 4, isVoted: notVoted.props.children },
    { rating: 5, isVoted: notVoted.props.children },
  ];
  const [ratings, setRatings] = useState(initialState);

  const handleClick = (index) => {
    const ratingsCopy = [...ratings];
    let item = ratingsCopy[index];

    if (item.isVoted === voted) {
      return { ...item, isVoted: notVoted };
    } else if (item.isVoted === notVoted) {
      return { ...item, isVoted: voted };
    }

    const newRatings = ratingsCopy.map((star) => {
      if (item.rating >= star.rating) {
        return { ...star, isVoted: voted };
      }
      if (item.rating <= star.rating) {
        return { ...star, isVoted: notVoted };
      }
      return star;
    });
    console.log("newRatings", newRatings);
    setRatings([...newRatings]);
  };

  return (
    <div className={classes.wrapper}>
      <h1>Say something about our products...</h1>
      <div className={classes.ratings}>
        <h3>Rate us:</h3>
        <div>
          {ratings.map((star, index) => (
            <button
              key={star.rating}
              className={classes.rateBtn}
              onClick={() => handleClick(index)}
            >
              {star.isVoted}
            </button>
          ))}
        </div>
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
