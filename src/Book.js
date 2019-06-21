import React from 'react';
import style from './book.module.css'


const Book = ({title, authors, publisher, image, info}) => {
    return(
        <div className={style.book}>
            <h2>{title}</h2>
            <ul>
                {authors.map(author =>(
                    <li>{author}</li>
                ))}
            </ul>
            <p>Publisher: {publisher}</p>
            <img src={image} alt=""/>
            <a href={info}>More Info</a>

        </div>
    );
}

export default Book;