import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const HedaDetails = () => {
  const heda = useLoaderData();
  const navigate = useNavigate();

  const { hedaId } = useParams();

  const { id, title } = heda;

  console.log(hedaId);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ border: "2px solid red", padding: "20px", margin: "10px" }}>
      <h1>{id}</h1>
      <p>{title}</p>

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default HedaDetails;
