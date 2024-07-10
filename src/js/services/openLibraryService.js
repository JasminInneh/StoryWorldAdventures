import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';

const openLibraryService = {
  searchBooks: async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search.json?q=${query}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching books from Open Library API', error);
      throw error;
    }
  },
  getBookDetails: async (bookId) => {
    try {
      const response = await axios.get(`${BASE_URL}/works/${bookId}.json`);
      return response.data;
    } catch (error) {
      console.error('Error fetching book details from Open Library API', error);
      throw error;
    }
  }
};

export default openLibraryService;
