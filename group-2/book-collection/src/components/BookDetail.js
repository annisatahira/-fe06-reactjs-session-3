import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookData from "../data/book.json";

const BookDetail = () => {
  const param = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const selectedData = BookData.filter((data) => data.isbn == param.isbn);
    setData(selectedData[0]);
    console.log(selectedData);
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default BookDetail;
