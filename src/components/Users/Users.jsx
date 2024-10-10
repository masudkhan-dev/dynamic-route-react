import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const user = useLoaderData();

  return (
    <div>
      <div>
        <h2>Users:{user.length} </h2>

        {user.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
