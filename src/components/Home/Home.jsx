import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <Header />

      {navigation.state === "loading" ? <p>Loading........</p> : <Outlet />}
    </div>
  );
};

export default Home;
