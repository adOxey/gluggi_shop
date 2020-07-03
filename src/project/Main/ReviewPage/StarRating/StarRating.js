import React, { useState } from "react";
import classes from "./StarRating.module.css";

function StarRating({ saveRating }) {
  const notVoted = <span>&#9734;</span>;
  const voted = <span>&#9733;</span>;

  const initialRatingState = [
    { rating: 1, clicked: false, isVoted: notVoted.props.children },
    { rating: 2, clicked: false, isVoted: notVoted.props.children },
    { rating: 3, clicked: false, isVoted: notVoted.props.children },
    { rating: 4, clicked: false, isVoted: notVoted.props.children },
    { rating: 5, clicked: false, isVoted: notVoted.props.children },
  ];

  const [ratings, setRatings] = useState(initialRatingState);

  const handleChangeRating = (index) => {
    const ratingsCopy = [...ratings];
    let item = ratingsCopy[index];

    if (item.isVoted === voted) {
      return { ...item, clicked: false, isVoted: notVoted };
    } else if (item.isVoted === notVoted) {
      return { ...item, clicked: true, isVoted: voted };
    }

    const newRatings = ratingsCopy.map((star) => {
      if (item.rating >= star.rating) {
        return { ...star, clicked: true, isVoted: voted };
      }
      if (item.rating <= star.rating) {
        return { ...star, clicked: false, isVoted: notVoted };
      }
      return star;
    });
    setRatings([...newRatings]);
    saveRating(newRatings);
  };

  return (
    <div className={classes.ratings}>
      <h3>Rate us:</h3>
      {ratings.map((star, index) => (
        <button
          key={star.rating}
          className={classes.rateBtn}
          onClick={() => handleChangeRating(index)}
        >
          {star.isVoted}
        </button>
      ))}
    </div>
  );
}

export default StarRating;
