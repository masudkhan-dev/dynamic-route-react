import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Users", path: "/users" },
    { id: 4, name: "Contact", path: "/contact" },
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
              <Link to={nav.path}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
