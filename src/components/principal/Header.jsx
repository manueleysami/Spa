// importa el elemento Link de react router dom para navegar las paginas
import { Link } from "react-router-dom";

// se importe estyled de styled components para agregar css
// solo a elementos de este componente
import styled from "styled-components";

import bg_header from "../../assets/img/b3.jpg";
function Header() {
  return (
    <DivHeader>
      <DivHeaderContenido className="d-flex align-items-center text-light">
        <div className="mx-5">
          <h5 className="text-uppercase d-block">Amamos los animales</h5>
          <h1 className="fw-bold d-block" style={{ maxWidth: "500px" }}>
            Sacamos la mejor versión de tus mascotas
          </h1>
          <Link
            to="/servicios"
            className="btn btn-danger btn-lg mt-5 rounded-pill"
          >
            Mas Información
          </Link>
        </div>
      </DivHeaderContenido>
    </DivHeader>
  );
}
// se crean etiquetas con los estilos unicos a utilizar por el componente
const DivHeader = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${bg_header});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    height: 75vh;
  }
`;

const DivHeaderContenido = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Header;
