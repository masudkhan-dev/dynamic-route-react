import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Oops!!!</h1>

      <p>{error.data}</p>

      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
