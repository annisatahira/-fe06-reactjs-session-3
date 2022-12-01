import { Outlet } from "react-router-dom";
import BookData from "../data/book.json";
import Card from "./Card";

const Book = () => {
  return (
    <div>
      Book Component
      <Outlet />
    </div>
  );
};

export default Book;
