import React from "react";
import { Container } from "react-bootstrap";
import hero from "../../styles/hero.css";

export const Hero = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-start">
            <h1>Embark on a Journey of Imagination</h1>
            <p>
              Discover enchanting tales and adventures in our digital library
              designed for young readers.
            </p>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-warning mx-2">
                Start Reading
              </button>
              <button type="button" className="btn btn-success mx-2">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
