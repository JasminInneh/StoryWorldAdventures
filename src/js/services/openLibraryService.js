// import axios from "axios";

// const BASE_URL = "https://openlibrary.org";

// const openLibraryService = {
//   searchBooks: async (query) => {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/search.json?q=${query}&limit=10&offset=0`
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching books from Open Library API", error);
//       throw error;
//     }
//   },
//   getBookDetails: async (bookId) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/works/${bookId}.json`);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching book details from Open Library API", error);
//       throw error;
//     }
//   },
// };

// export default openLibraryService;
import axios from "axios";

const BASE_URL = "https://openlibrary.org";

const openLibraryService = {
  searchBooks: async (query) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/search.json?q=${query}&limit=10&offset=0`
      );
      // Added read_url to each book
      const booksWithReadUrl = response.data.docs.map((book) => ({
        ...book,
        read_url: book.cover_edition_key
          ? `https://openlibrary.org/works/${book.cover_edition_key}`
          : null,
      }));
      return { ...response.data, docs: booksWithReadUrl };
    } catch (error) {
      console.error("Error fetching books from Open Library API", error);
      throw error;
    }
  },
  getBookDetails: async (bookId) => {
    try {
      const response = await axios.get(`${BASE_URL}/works/${bookId}.json`);
      return response.data;
    } catch (error) {
      console.error("Error fetching book details from Open Library API", error);
      throw error;
    }
  },
};

export default openLibraryService;
