import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2>Daniel Shop</h2>
      </Link>
      <div>
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/category/remeras" className={({isActive}) => isActive ? "active" : ""}>Remeras</NavLink>
        <NavLink to="/category/pantalones" className={({isActive}) => isActive ? "active" : ""}>Pantalones</NavLink>
        <NavLink to="/category/zapatillas" className={({isActive}) => isActive ? "active" : ""}>Zapatillas</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
