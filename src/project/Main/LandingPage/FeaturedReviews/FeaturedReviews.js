import React, { useState, useEffect } from "react";
import { REVIEWS, gluggiFirestore } from "../../../../firebase/firebase";
import classes from "./FeaturedReviews.module.css";
import { ReviewBox } from "../../../../shared/components";
import { showCorrectTimestamp } from "../../../../shared/utils/compareTimestamps";

function FeaturedReviews() {
  const { Container, TitleWrapper, ReviewsWrapper } = classes;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const unsubscribe = gluggiFirestore
      .collection(REVIEWS)
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          let myReviews = [];
          snapshot.forEach((doc) =>
            myReviews.push({ id: doc.id, ...doc.data() })
          );
          setReviews(myReviews);
        } else {
          console.log("Collection empty or something went wrong");
        }
      });

    return () => {
      unsubscribe();
    };
  }, []);

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
export default FeaturedReviews;
