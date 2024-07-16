import React from "react";
import "../../styles/library.css";

export const Library = () => {
  return (
    <div className="library container-fluid">
      <div className="row p-5">
        <h2 className="library-header text-center mb-4">Library</h2>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="https://i.ibb.co/nBwF9qg/sammys-space-adventure.jpg"
            className="library-image img-fluid"
            alt="Sammy's Space Adventures"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h4 className="story-description text-center">
            Sammy builds a rocket ship of cardboard and embarks on an
            intergalactic adventure, meeting friendly aliens and exploring new
            planets.
          </h4>
          <p className=" author text-center">
            <b>Author:</b> Jasmin Inneh
          </p>
          <button type="button" className="btn btn-warning text-center">
            Read More
          </button>
        </div>
      </div>
      <div className="wave">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1565c0" /* Cobalt Blue */
            d="M0,224L40,197.3C80,171,160,117,240,96C320,75,400,85,480,96C560,107,640,117,720,138.7C800,160,880,192,960,197.3C1040,203,1120,181,1200,160C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
          <path
            fill="#fa8702" /* Deep Orange */
            d="M0,128L40,117.3C80,107,160,85,240,85.3C320,85,400,107,480,122.7C560,139,640,149,720,160C800,171,880,181,960,160C1040,139,1120,85,1200,74.7C1280,64,1360,96,1400,112L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
          <path
            fill="#fffd8d" /* Yellow */
            d="M0,224L40,218.7C80,213,160,203,240,176C320,149,400,107,480,106.7C560,107,640,149,720,160C800,171,880,149,960,144C1040,139,1120,149,1200,144C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Library;
