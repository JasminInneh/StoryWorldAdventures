import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import LibraryBanner from "../component/libraryBanner";
import BookDetails from "../component/BookDetails";
import bookList from "../../styles/bookList.css";

const BooksList = () => {
  const { store, actions } = useContext(Context);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    actions.fetchBooks(query);
  };

  return (
    <>
      <Navbar />
      <LibraryBanner />
      <div className="container mt-4 booklist">
        <div className="row">
          <div className="col">
            <form className="mb-3" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for books"
                />
                <button type="submit" className="btn btn-success">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          {store.books.map((book, index) => (
            <div key={index} className="col-md-6">
              <BookDetails
                title={book.title}
                author={
                  book.author_name
                    ? book.author_name.join(", ")
                    : "Unknown Author"
                }
                cover={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                description={
                  book.first_sentence
                    ? book.first_sentence
                    : "No description available."
                }
                readOnlineUrl={book.read_url}
              />
            </div>
          ))}
        </div>
        <div className="row genre-section m-5">
          <h2 className="text-center mb-3">Genres</h2>
          <div className="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://img.freepik.com/free-photo/3d-kid-dragon-hanging-out_23-2151139338.jpg"
                className="card-img-top fixed-size-img"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Fantasty Tales</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://img.freepik.com/premium-photo/children-s-book-cover-space-adventure_909774-201.jpg"
                class="card-img-top fixed-size-img"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">Space Adventures</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://www.fairy-tales.eu/assets/Files/Images/0.jpg"
                class="card-img-top fixed-size-img"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">Fairy Tales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BooksList;
