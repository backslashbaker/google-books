import React, { useEffect, useState } from "react";
import Book from "./Book";
import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getBooks = async query => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
  ).catch(error => {
    console.log(error);
    return;
  });
  const data = await response.json();
  return data;
};

const App = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Light");

  useEffect(() => {
    async function fetchBooks() {
      const data = await getBooks(query);
      setBooks(data.items);
    }
    fetchBooks();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="books">
        {books &&
          books.map(book => (
            <Book
              key={book.id}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              publisher={book.volumeInfo.publisher}
              image={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail
              }
              info={book.volumeInfo.infoLink}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
