import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
      <h2>{id} </h2>
      <h4>{title}</h4>
      <p>{body}</p>

      <Link to={`/post/${id}`}>
        <button>Show Detail</button>
      </Link>
    </div>
  );
};

export default Post;
