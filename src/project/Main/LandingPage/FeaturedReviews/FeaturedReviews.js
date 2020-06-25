import React, { useState } from "react";
import classes from "./FeaturedReviews.module.css";
import { ReviewBox } from "../../../../shared/components";

function FeaturedReviews() {
  const { Container } = classes;
  const initialState = [
    {
      title: "As good as advertised",
      description: "Amazing food. At a right price.",
      rating: 4,
      reviewer: "Oreo Fluffinghton",
      date: "32 Hours Ago",
      id: 21212,
    },
    {
      title: "Excellent service and good quality",
      description: "Products arrived on time and were exactly as described.",
      rating: 5,
      reviewer: "Mrs. Lisa Decamp",
      date: "125 Hours Ago",
      id: 85481,
    },
    {
      title: "Not good. Not bad.",
      description: "Could be better in some aspects. Overall solid products.",
      rating: 3,
      reviewer: "Josh Bocour",
      date: "12 Hours Ago",
      id: 1444548,
    },
  ];
  const [reviews, setReviews] = useState(initialState);

  return (
    <div className={Container}>
      <h1>
        What Our Customers <br />
        <span>ARE SAYING</span>
      </h1>
      <div>
        {reviews.map((review) => (
          <ReviewBox
            key={review.id}
            rating={review.rating}
            title={review.title}
            description={review.description}
            author={review.reviewer}
            date={review.date}
          />
        ))}
      </div>
    </div>
  );
}
export default FeaturedReviews;
