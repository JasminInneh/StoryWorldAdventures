// BooksList.js
import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import LibraryBanner from '../component/libraryBanner'; // Import as default
import BookDetails from '../component/BookDetails'; // Import as default

const BooksList = () => {
  const { store, actions } = useContext(Context);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    actions.fetchBooks(query);
  };

  return (
    <>
      <Navbar />
      <LibraryBanner />
      <div className="container mt-4">
        <form className="mb-3" onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for books"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
        <div className="row">
          {store.books.map((book, index) => (
            <div key={index} className="col-md-6">
              <BookDetails
                title={book.title}
                author={book.author}
                cover={book.cover}
                description={book.description}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BooksList;
