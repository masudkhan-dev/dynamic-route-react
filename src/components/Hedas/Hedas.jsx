import { useLoaderData } from "react-router-dom";
import Heda from "../Heda/Heda";

const Hedas = () => {
  const hedas = useLoaderData();

  return (
    <div>
      {hedas.map((heda) => (
        <Heda key={heda.id} heda={heda} />
      ))}
    </div>
  );
};

export default Hedas;
