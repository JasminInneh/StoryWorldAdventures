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
        <div className="booklist-svg-wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ff5500"
              fill-opacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="row genre-section m-5">
          <h2 className="text-center mb-3">Genres</h2>
          <div className="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://media.istockphoto.com/id/1364557568/vector/cartoon-beautiful-unicorn-head-is-on-the-cloud-with-beautiful-flowers.jpg?s=612x612&w=0&k=20&c=SbeqG1k6Y1swx_GAmKYbz7mx9DnBJYH1eNDLi4ZCN0Y="
                className="card-img-top img-fluid fixed-size-img"
                alt="..."
              />
              <div className="card-body">
                <a
                  href="#"
                  class="btn btn-success d-flex justify-content-center"
                >
                  Fantasy Tale
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://img.freepik.com/premium-photo/children-s-book-cover-space-adventure_909774-201.jpg"
                class="card-img-top img-fluid fixed-size-img"
                alt="..."
              />
              <div class="card-body">
                <a
                  href="#"
                  class="btn btn-success d-flex justify-content-center"
                >
                  Space Adventures
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://www.fairy-tales.eu/assets/Files/Images/0.jpg"
                class="card-img-top img-fluid fixed-size-img"
                alt="..."
              />
              <div class="card-body">
                <a
                  href="#"
                  class="btn btn-success d-flex justify-content-center"
                >
                  Fairy Tales
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row genre-section me-5 ms-5 mb-5">
          <div className="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://st2.depositphotos.com/2945617/9575/v/450/depositphotos_95756690-stock-illustration-cute-baby-elephant-cartoon-sitting.jpg"
                className="card-img-top img-fluid fixed-size-img"
                alt="..."
              />
              <div className="card-body">
                <a
                  href="#"
                  class="btn btn-success d-flex justify-content-center"
                >
                  Early Readers
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://images.playground.com/e9b1ca68021c487bb662989aa7e10fbc.jpeg"
                class="card-img-top img-fluid fixed-size-img"
                alt="..."
              />
              <div class="card-body">
                <a
                  href="#"
                  class="btn btn-success d-flex justify-content-center"
                >
                  Chapter Books
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://cdn.theatlantic.com/thumbor/jR9r4oiyzd-TU272-hcuxcqSkI8=/0x0:2000x1125/960x540/media/img/mt/2024/02/graphic_novels/original.jpg"
                class="card-img-top img-fluid fixed-size-img"
                alt="..."
              />
              <div class="card-body">
                <a
                  href="#"
                  class="btn btn-success d-flex justify-content-center"
                >
                  Graphic Novels
                </a>
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
