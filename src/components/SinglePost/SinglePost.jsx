import { useLoaderData } from "react-router-dom";

const SinglePost = () => {
  const postDetails = useLoaderData();
  const { id, title, body } = postDetails;

  return (
    <div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default SinglePost;
