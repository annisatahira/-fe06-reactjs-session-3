import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookData from "../data/book.json";

const BookDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const selectedData = BookData.filter((item) => item.isbn == params.isbn);
    setData(selectedData[0]);
  }, []);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default BookDetail;
