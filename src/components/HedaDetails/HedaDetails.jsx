import { useLoaderData } from "react-router-dom";

const HedaDetails = () => {
  const heda = useLoaderData();
  const { id, title } = heda;

  return (
    <div style={{ border: "2px solid red", padding: "20px", margin: "10px" }}>
      <h1>{id}</h1>
      <p>{title}</p>
    </div>
  );
};

export default HedaDetails;
