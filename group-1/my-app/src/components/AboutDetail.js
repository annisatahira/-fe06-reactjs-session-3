import { useNavigate, useParams, Link } from "react-router-dom";

const AboutDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  // console.log(params);
  const handleBackToHome = () => {
    console.log("kembali");
    navigate("/");
  };

  return (
    <div>
      <h1>AboutDetail Component</h1>
      <button onClick={handleBackToHome}>Kembali ke Home</button>
    </div>
  );
};

export default AboutDetail;
