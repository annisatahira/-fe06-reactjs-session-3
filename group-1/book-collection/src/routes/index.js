import { Route, Routes } from "react-router-dom";
import Book from "../components/Book";
import BookDetail from "../components/BookDetail";
import BookList from "../components/BookList";
import Home from "../components/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* /book */}
      {/* /book/q121213e */}
      <Route path="book" element={<Book />}>
        <Route index element={<BookList />} />
        <Route path=":isbn" element={<BookDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
