import React from 'react';
import PropTypes from 'prop-types';

const BookDetails = ({ title, author, cover, description }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={cover} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><small className="text-muted">{author}</small></p>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cover: PropTypes.string,
  description: PropTypes.string
};

export default BookDetails;

