import React from "react";
import style from "./book.module.css";

const Book = ({ title, authors, publisher, image, info }) => {
  let counter = 1;
  return (
    <div className={style.book}>
      <h2 className="title">{title}</h2>
      <ul>
        {authors &&
          authors.map(author => (
            <li key={"myKey" + counter++} className="authors">
              {author}
            </li>
          ))}
      </ul>
      <p className="publisher">Publisher: {publisher && publisher}</p>
      <img src={image} alt="" className="image" />
      <a href={info}>More Info</a>
    </div>
  );
};

export default Book;
