import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="div-navbar">
      <div className="grupo-botones">
        <Link to="/">
          <button className="boton">Inicio</button>
        </Link>
        <Link to="/favoritos">
          <button className="boton">Personajes Favoritos</button>
        </Link>
        <Link to="/acercaDe">
          <button className="boton">Acerca de</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
