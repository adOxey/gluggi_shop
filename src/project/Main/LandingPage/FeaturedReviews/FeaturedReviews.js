import React from "react";
import classes from "./FeaturedReviews.module.css";
import { Link } from "react-router-dom";
import { ReviewBox, Button, Spinner } from "../../../../shared/components";
import { showCorrectTimestamp } from "../../../../shared/utils/compareTimestamps";

function FeaturedReviews({ reviews, isLoading }) {
  const { Container, TitleWrapper, ReviewsWrapper } = classes;

  const setFeaturedReviews = () => {
    const reviewsCopy = [...reviews];
    const filterReviews = reviewsCopy.filter((review) => {
      if (review.grade >= 4) {
        return review;
      }
      return null;
    });
    filterReviews.length = 4;
    return filterReviews;
  };

  const featuredReviews = setFeaturedReviews();

  return (
    <div className={Container}>
      <div className={TitleWrapper}>
        <h1>
          What <span style={{ color: "#F7697B" }}>Our</span> Customers
        </h1>
        <h1>
          <span style={{ fontWeight: "bold" }}>
            ARE <span style={{ color: "#79BAC1" }}>SAYING</span>
          </span>
        </h1>
      </div>
      <div className={ReviewsWrapper}>
        {isLoading ? (
          <Spinner size="4x" />
        ) : (
          featuredReviews.map((review) => {
            const { id, grade, title, description, author, date } = review;
            return (
              <ReviewBox
                key={id}
                rating={grade}
                title={title}
                description={description}
                author={author}
                date={showCorrectTimestamp(date.toMillis())}
              />
            );
          })
        )}
      </div>
      <Link to="/reviews">
        <Button variant="transparent">SEE ALL REVIEWS</Button>
      </Link>
    </div>
  );
}
export default FeaturedReviews;
