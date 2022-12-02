import BookCard from "./BookCard";
import BookData from "../data/book.json";
const BookList = () => {
  return (
    <div>
      <h1>My List Book</h1>
      {BookData.map((item) => {
        return (
          <BookCard
            key={item.isbn}
            title={item.title}
            desc={item.description}
            isbn={item.isbn}
          />
        );
      })}
    </div>
  );
};

export default BookList;
