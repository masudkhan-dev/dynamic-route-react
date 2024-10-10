import { Link } from "react-router-dom";

const Heda = ({ heda }) => {
  const { id, title } = heda;

  return (
    <div style={{ border: "2px solid red", padding: "20px", margin: "10px" }}>
      <h2>{id} </h2>
      <p>{title} </p>
      <Link to={`/heda/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Heda;
