import openLibraryService from '../services/openLibraryService';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white"
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white"
        }
      ],
      books: [],
      bookDetails: null
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
          fetch().then().then(data => setStore({ "foo": data.bar }))
        */
      },
      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        setStore({ demo: demo });
      },
      fetchBooks: async (query) => {
        try {
          const books = await openLibraryService.searchBooks(query);
          setStore({ books: books.docs });
        } catch (error) {
          console.error('Error fetching books', error);
        }
      },
      fetchBookDetails: async (bookId) => {
        try {
          const bookDetails = await openLibraryService.getBookDetails(bookId);
          setStore({ bookDetails });
        } catch (error) {
          console.error('Error fetching book details', error);
        }
      }
    }
  };
};

export default getState;
