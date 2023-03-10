import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderNoPrincipal from "../varios/HeaderNoPrincipal";
import imgPerro from "../../assets/img/about5.jpg";
import {
  faBone,
  faPaw,
  faStethoscope,
  faCartShopping,
  faScissors,
  faMedal,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

function Servicios() {
  return (
    <div>
      <HeaderNoPrincipal titulo="Servicios" />

      <div className="container mt-5">
        <h1 className="text-center fw-bold">Por qué escogernos?</h1>
        <div className="row text-center mt-5">
          <div className="col-12 col-md-6 col-lg-4 px-3 mb-5">
            <h1 className="text-danger">
              <FontAwesomeIcon icon={faStethoscope} />
            </h1>
            <p className="fs-4 fw-bold">Cuidados Medicos</p>
            <p className="fs-5">
              Nuestros entrenadores se encargarán de educar a tus perros de la
              mejor manera.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-3 mb-5">
            <h1 className="text-success">
              <FontAwesomeIcon icon={faPaw} />
            </h1>
            <p className="fs-4 fw-bold">Entrenamiento de Mascotas</p>
            <p className="fs-5">
              Nuestros entrenadores se encargarán de educar a tus perros de la
              mejor manera.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-3 mb-5">
            <h1 className="text-primary">
              <FontAwesomeIcon icon={faScissors} />
            </h1>
            <p className="fs-4 fw-bold">Servicios Estéticos</p>
            <p className="fs-5">
              Contamos con un salón estético con servicio de peluquería e
              higiene para tu mascota.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-3 mb-5">
            <h1 className="text-warning">
              <FontAwesomeIcon icon={faMedal} />
            </h1>
            <p className="fs-4 fw-bold">Mejor Calidad</p>
            <p className="fs-5">
              Años de experiencia cuidando mascotas nos han hecho los más
              calificados y certificados.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-3 mb-5">
            <h1 className="text-muted">
              <FontAwesomeIcon icon={faBone} />
            </h1>
            <p className="fs-4 fw-bold">Nutrición</p>
            <p className="fs-5">
              Tenemos personal encargado de manejar la alimentación de tu
              mascota con comida de la mejor clase.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-3 mb-5">
            <h1 className="text-danger">
              <FontAwesomeIcon icon={faCartShopping} />
            </h1>
            <p className="fs-4 fw-bold">Tienda de productos</p>
            <p className="fs-5">
              En nuestra empresa encontraras los articulos para el cuidado y
              entretenimiento de tu perro.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-6 d-flex align-items-center p-3">
            <img src={imgPerro} alt="perro feliz" className="w-100 rounded-4" />
          </div>
          <div className="col-12 col-md-6 p-3">
            <h1 className="fw-bold mb-5">Haremos felices a sus mascotas</h1>
            <p className="fs-5">
              Somos la mejor empresa del país en cuanto al cuidado de mascotas,
              además de contar con los precios más competitivos. Su mascota y
              usted estarán feliz con nuestros servicios.
            </p>
            <p className="fs-5">
              <FontAwesomeIcon icon={faCheck} className="px-4 text-success" />
              Calidad Certificada.
            </p>
            <p className="fs-5">
              <FontAwesomeIcon icon={faCheck} className="px-4 text-success" />
              Amamos los animales.
            </p>
            <p className="fs-5">
              <FontAwesomeIcon icon={faCheck} className="px-4 text-success" />
              Más de 20 años de experiencia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
