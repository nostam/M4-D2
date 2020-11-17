import History from "../assets/history.json";
import Fantasy from "../assets/fantasy.json";
import Scifi from "../assets/scifi.json";
import Romance from "../assets/romance.json";
import Horror from "../assets/horror.json";

const allBooks = () => {
  let books = [];
  books.push(History);
  books.push(Fantasy);
  books.push(Scifi);
  books.push(Romance);
  books.push(Horror);
  return books;
};

export default allBooks();
