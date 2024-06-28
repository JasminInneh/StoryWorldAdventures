import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import featuredBooks from "../../styles/featuredBooks.css"

export const FeaturedBooks = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide half-width"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ibb.co/NjfC1KV/ellies-enchanted-garden.jpg"
              className="d-block w-100"
              alt="Ellie's Enchanted Garden"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/nBwF9qg/sammys-space-adventure.jpg"
              className="d-block w-100"
              alt="Sammy's Space Adventure"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/1G4vz0W/banner3.jpg"
              className="d-block w-100"
              alt="The Adventurous Book"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
