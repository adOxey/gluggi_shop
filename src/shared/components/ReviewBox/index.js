import React from "react";
import classes from "./ReviewBox.module.css";

function ReviewBox({ rating, title, author, description, date }) {
  const { Wrapper, Description, Author, NewDate, Infos } = classes;

  return (
    <div className={Wrapper}>
      <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
      <h2>{title}</h2>
      <p className={Description}>"{description}"</p>
      <div className={Infos}>
        <p className={Author}>{author}</p>
        <p className={NewDate}>{date}</p>
      </div>
    </div>
  );
}

export default ReviewBox;
