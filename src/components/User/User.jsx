import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email, phone, website } = user;

  return (
    <div
      style={{
        border: "2px solid tomato",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        width: '600px'
      }}
    >
      <h1>{id}</h1>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <h4>{email}</h4>
      <p>{website}</p>
      <p>{phone}</p>

      <Link to={`/user/${id}`}>
        <button style={{ padding: "10px" }}>Show Details</button>
      </Link>
    </div>
  );
};

export default User;
