import React from "react";
import classes from "./ReviewBox.module.css";

function ReviewBox({ rating, title, author, description, date }) {
  const { Wrapper, Description, Author, NewDate, Infos } = classes;
  const { secondsAgo, minutesAgo, hoursAgo, daysAgo } = date;

  const timeOfReview = () => {
    if (secondsAgo <= 60) {
      return <p className={NewDate}>{Math.floor(secondsAgo)} Seconds Ago</p>;
    } else if (secondsAgo > 60 && minutesAgo < 60) {
      return <p className={NewDate}>{Math.floor(minutesAgo)} Minutes Ago</p>;
    } else if (minutesAgo > 60 && hoursAgo < 24) {
      return <p className={NewDate}>{Math.floor(hoursAgo)} Hours Ago</p>;
    } else {
      return <p className={NewDate}>{Math.floor(daysAgo)} Days Ago</p>;
    }
  };

  const showTimeOfReview = timeOfReview();

  return (
    <div className={Wrapper}>
      <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
      <h2>{title}</h2>
      <p className={Description}>"{description}"</p>
      <div className={Infos}>
        <p className={Author}>{author}</p>
        {showTimeOfReview}
      </div>
    </div>
  );
}

export default ReviewBox;
