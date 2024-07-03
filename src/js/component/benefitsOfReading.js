import React from "react";
import benefitsOfReading from "../../styles/benefitsOfReading.css";

export const BenefitsOfReading = () => {
  return (
    <div className="benefits-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">
          Benefits of Reading from a Young Age
        </h2>
        <p className="text-center mb-5">
          Reading from a young age has numerous benefits that can positively
          impact your child's development.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <img
                  src="https://friconix.com/jpg/fi-xnluxx-comment.jpg"
                  alt="Benefit 1"
                  className="mb-3"
                  style={{ width: "50px" }}
                />
                <h5 className="card-title">Boosts Vocabulary</h5>
                <p className="card-text">
                  Reading helps children learn new words and understand their
                  meanings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <img
                  src="https://friconix.com/jpg/fi-xtluxx-brain-alt-thin.jpg"
                  alt="Benefit 2"
                  className="mb-3"
                  style={{ width: "50px" }}
                />
                <h5 className="card-title">Improves Concentration</h5>
                <p className="card-text">
                  Regular reading can help improve focus and concentration in
                  children.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <img
                  src="https://friconix.com/jpg/fi-xwluxx-star-wide.jpg"
                  alt="Benefit 3"
                  className="mb-3"
                  style={{ width: "50px" }}
                />
                <h5 className="card-title">Encourages Imagination</h5>
                <p className="card-text">
                  Stories and books encourage children to use their imagination
                  and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-primary">Explore More Benefits</button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfReading;
