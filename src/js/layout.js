// Layout.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';
import { Home } from './views/home';
import { Single } from './views/single';
import { AboutUs } from './component/aboutUs';
import injectContext from './store/appContext';

// Add imports for BooksList and BookDetails
import BooksList from './component/BooksList';
import BookDetails from './component/BookDetails';

const Layout = () => {
  const basename = process.env.BASENAME || '';

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/single/:theid" element={<Single />} />
            {/* Add routes for BooksList and BookDetails */}
            <Route path="/books" element={<BooksList />} />
            <Route path="/book/:bookId" element={<BookDetails />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

