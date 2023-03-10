// este componente es el header de las paginas distintas a la pricipal
import styled from "styled-components";
import bg_header from "../../assets/img/inner-banner.jpg";

function HeaderNoPrincipal(props) {
  return (
    <div>
      <DivHeader>
        <DivHeaderContenido className="d-flex align-items-center text-light">
          <h1 className="fw-bold d-block mx-5" style={{ maxWidth: "500px" }}>
            {props.titulo}
          </h1>
        </DivHeaderContenido>
      </DivHeader>
    </div>
  );
}

// Estilos unicos del componente
const DivHeader = styled.div`
  height: 50vh;
  width: 100%;
  background-image: url(${bg_header});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

const DivHeaderContenido = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default HeaderNoPrincipal;
