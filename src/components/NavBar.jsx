import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
      <Link to="/">
        <h2>Daniel Shop</h2>
      </Link>
      <div>
        <NavLink to="/" style={{ margin: "0 10px" }}>Inicio</NavLink>
        <NavLink to="/category/remeras" style={{ margin: "0 10px" }}>Remeras</NavLink>
        <NavLink to="/category/pantalones" style={{ margin: "0 10px" }}>Pantalones</NavLink>
        <NavLink to="/category/zapatillas" style={{ margin: "0 10px" }}>Zapatillas</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
