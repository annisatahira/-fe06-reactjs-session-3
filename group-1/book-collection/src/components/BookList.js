import { Outlet } from "react-router-dom";
import BookData from "../data/book.json";
import Card from "./Card";

const BookList = () => {
  return (
    <div>
      {BookData.map((item) => {
        return (
          <Card
            key={item.isbn}
            title={item.title}
            detail={item.description}
            isbn={item.isbn}
          />
        );
      })}
    </div>
  );
};

export default BookList;
