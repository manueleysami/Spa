// este componente es la barra de navegacion de la pagina

// importa el elemento Link de react router dom para navegar las paginas
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldDog } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent position-absolute w-100" style={{zIndex: 10}}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-danger">
          <h1>
            <FontAwesomeIcon icon={faShieldDog} /> PuppyCare
          </h1>
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item">
              <Link to="/" className="nav-link px-3 text-light">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/servicios"} className="nav-link px-3 text-light">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contacto"} className="nav-link px-3 text-light">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/acerca"} className="nav-link px-3 text-light">
                Acerca De
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
