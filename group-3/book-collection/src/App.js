import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Book from "./components/Book";
import NotFound from "./components/NotFound";
import BookFavorite from "./components/BookFavorite";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <div className="App">
      <h1>My Book Collection</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ul>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book" element={<Book />}>
          <Route index element={<BookList />} />
          <Route path="my-favorite" element={<BookFavorite />} />
          <Route path=":isbn" element={<BookDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
