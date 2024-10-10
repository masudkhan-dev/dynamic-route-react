import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Users", path: "/users" },
    { id: 4, name: "Posts", path: "/posts" },
    { id: 5, name: "Hedas", path: "/hedas" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <div>
        <h2>Logo</h2>
      </div>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "10px",
            listStyle: "none",
            fontSize: "18px",
          }}
        >
          {navItems.map((nav) => (
            <li key={nav.id}>
              <NavLink to={nav.path}>{nav.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
