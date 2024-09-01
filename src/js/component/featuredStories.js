import React from "react";
import { Container } from "react-bootstrap";
import featuredStories from "../../styles/featuredStories.css";

export const FeaturedStories = () => {
  return (
    <div className="featured container-fluid p-5">
      <div className="featured-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,144C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <h2 className="featured-header">Featured Stories</h2>
      <div className="row row-cols-4">
        <div className="col">
          <div className="card-wrapper">
            <div className="card">
              <img
                src="https://i.pinimg.com/736x/ac/16/92/ac169260ec89a74eb92eb49fbeb80837.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-wrapper">
            <div className="card">
              <img
                src="https://i.pinimg.com/736x/ac/16/92/ac169260ec89a74eb92eb49fbeb80837.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-wrapper">
            <div className="card">
              <img
                src="https://i.pinimg.com/736x/ac/16/92/ac169260ec89a74eb92eb49fbeb80837.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-wrapper">
            <div className="card">
              <img
                src="https://i.pinimg.com/736x/ac/16/92/ac169260ec89a74eb92eb49fbeb80837.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStories;
