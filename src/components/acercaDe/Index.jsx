import styled from "styled-components";
import HeaderNoPrincipal from "../varios/HeaderNoPrincipal";

function AcercaDe() {
  return (
    <div>
      <HeaderNoPrincipal titulo="Nosotros" />

      <div className="container mt-5 px-3">
        <h1 className="fw-bold text-center">¿Quienes somos y que hacemos?</h1>

        <p className="fs-5">
          <span className="fs-2 ps-5 fw-bold">C</span>ontribuimos a crear un mundo mejor, ayudando a amar y proteger a sus mascotas. Basados en nuestro equipo de trabajo somos solidarios socialmente, brindando la mayor cantidad de trabajo posible, innovando constantemente y logrando un prestigio que nos haga perdurar en el tiempo. Invirtiendo e innovando en proyectos para ampliar la estructura y seguir creciendo en otras ciudades. Aportando y participando solidariamente para crear una comunidad inclusiva y el cuidado del medio ambiente.
        </p>
        <p className="fs-5">
          <span className="ps-5">Nuestro</span>, objetivo es ser una empresa moderna y sólida, líder en el país y con proyección internacional. Liderada por un equipo con acceso a la más alta calidad de capacitación y con una mirada colaborativa e inclusiva.
        </p>
        <p className="fs-5">
          <span className="ps-5">La</span>, calidad del servicio al cliente es lo que nos distingue de la competencia y constituye un factor del éxito de nuestro negocio. La calidad de servicio se mide en todos los procesos de interacción con el cliente. Es la flexibilidad con la que desarrollamos nuestro negocio y nos adaptamos constantemente a las necesidades y deseos de nuestros clientes.
        </p>
      </div>
    </div>
  );
}

export default AcercaDe;
