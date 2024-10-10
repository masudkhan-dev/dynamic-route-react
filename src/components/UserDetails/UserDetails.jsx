import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();

  const { id, name, email, username, phone, website } = user;

  return (
    <div
      style={{
        border: "2px solid tomato",
        padding: "15px",
        margin: "0 auto",
        width: "500px",
        textAlign: "center",
        borderRadius: "20px",
      }}
    >
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h2>{username}</h2>
      <h3>{email}</h3>
      <h4> {phone} </h4>
      <h5> {website} </h5>
    </div>
  );
};

export default UserDetails;
