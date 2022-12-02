import BookCard from "./BookCard";
import bookData from "../data/book.json";

const BookList = () => {
  return (
    <>
      <h1>My List Favorite Book</h1>
      {bookData.map((item) => {
        return (
          <BookCard
            key={item.isbn}
            title={item.title}
            desc={item.description}
            isbn={item.isbn}
          />
        );
      })}
    </>
  );
};

export default BookList;
