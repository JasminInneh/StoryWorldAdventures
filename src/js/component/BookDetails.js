import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { store, actions } = useContext(Context);
  const { bookId } = useParams();

  useEffect(() => {
    actions.fetchBookDetails(bookId);
  }, [bookId]);

  if (!store.bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{store.bookDetails.title}</h1>
      <p>{store.bookDetails.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetails;
