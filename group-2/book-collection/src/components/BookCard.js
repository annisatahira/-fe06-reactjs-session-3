import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
  const navigate = useNavigate();

  const moveToDetailPage = () => {
    navigate(`/book/${props.isbn}`);
  };
  return (
    <div className="book-card">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <p>{props.isbn}</p>
      <button onClick={moveToDetailPage}>Lihat Detail Book</button>
    </div>
  );
};

export default BookCard;
