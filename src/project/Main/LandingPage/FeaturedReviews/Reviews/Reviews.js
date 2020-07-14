import React from "react";
import PropTypes from "prop-types";
import classes from "./Reviews.module.css";
import { ReviewBox } from "../../../../../shared/components";
import { showCorrectTimestamp } from "../../../../../shared/utils/compareTimestamps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function Reviews({ reviews }) {
  const { Container, reviewsWrapper } = classes;

  return (
    <div className={Container}>
      <h1>
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          size="2x"
          style={{ color: "#f7697b", marginBottom: "15px" }}
        />
        <br />
        ALL REVIEWS
      </h1>
      <div className={reviewsWrapper}>
        {reviews.map((review) => {
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
        })}
      </div>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
