import { useParams } from "react-router-dom";
import BookData from "../data/book.json";
import { useEffect, useState } from "react";

const BookDetail = () => {
  let param = useParams();
  const [data, setData] = useState({});

  console.log(param);
  useEffect(() => {
    const selectedData = BookData.filter((item) => item.isbn == param.isbn);
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
