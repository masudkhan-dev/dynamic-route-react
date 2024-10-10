import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const user = useLoaderData();

  return (
    <div>
      {user.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
