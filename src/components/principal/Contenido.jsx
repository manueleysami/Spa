// importa los iconos de font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBone,
  faPaw,
  faMedkit,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

function Contenido() {
  return (
    <div className="container my-5">
      <div className="row mt-3">
        <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
          <h1 className="d-block fw-bold text-danger">
            Cómo podemos ayudarte?
          </h1>
          <p className="fs-5">
            Nuestra base es poner en valor a las mascotas porque sabemos que,
            sin duda, son el valor más preciado que nuestra empresa puede tener
            y más, cuando la gran parte de los servicios que ofrecemos son de la
            mejor calidad y a los mejores precios.
          </p>
        </div>
        <div className="col-12 col-lg-6 text-center">
          <div className="row">
            <div className="col-12 col-md-6 p-3">
              <h1 className="text-danger">
                <FontAwesomeIcon icon={faMedkit} />
              </h1>
              <p className="fs-4 fw-bold">Cuidados Medicos</p>
              <p className="fs-6">
                Nuestros entrenadores se encargarán de educar a tus perros de la
                mejor manera.
              </p>
            </div>
            <div className="col-12 col-md-6 p-3">
              <h1 className="text-warning">
                <FontAwesomeIcon icon={faMedal} />
              </h1>
              <p className="fs-4 fw-bold">Mejor Calidad</p>
              <p className="fs-6">
                Años de experiencia cuidando mascotas nos han hecho los más
                calificados y certificados.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 p-3">
              <h1 className="text-primary">
                <FontAwesomeIcon icon={faBone} />
              </h1>
              <p className="fs-4 fw-bold">Cría de perros</p>
              <p className="fs-6">
                Los profecionales más destacados en cuanto a la crianza de
                perros con mucho cuidado, cariño y amor.
              </p>
            </div>
            <div className="col-12 col-md-6 p-3">
              <h1 className="text-success">
                <FontAwesomeIcon icon={faPaw} />
              </h1>
              <p className="fs-4 fw-bold">Entrenamiento</p>
              <p className="fs-6">
                Nuestros entrenadores se encargarán de educar a tus perros de la
                mejor manera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
