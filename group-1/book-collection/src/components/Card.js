import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`/book/${props.isbn}`);
  };
  return (
    <div className="box box-down cyan">
      <h2>{props.title}</h2>
      <p>{props.detail}</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
      <button onClick={handleShowDetail}>Lihat Detail</button>
    </div>
  );
};

export default Card;
