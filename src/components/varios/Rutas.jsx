// se importan los elementos de react router dom para el manejo de las rutas
import { Routes, Route, useLocation } from "react-router-dom";

// se utilizan los hooks useState y useEffect para manejar las transiciones entre paginas
import { useState, useEffect } from "react";

// se importan los componentes a mostrar en las rutas
import Principal from "../principal";
import Servicios from "../servicios";
import Contacto from "../contacto";
import AcercaDe from "../acercaDe";
import Error404 from "../404/Error404";

function Rutas() {
  /* elementos para manejar las transiciones de las paginas */
  const location = useLocation();
  const [pantallaActual, setPantallaActual] = useState(location);
  const [transicion, setTransicion] = useState("entrar");

  useEffect(() => {
    if (location !== pantallaActual) setTransicion("salir");
  }, [location, pantallaActual]);
  return (
    <div
      className={`${transicion}`}
      onAnimationEnd={() => {
        if (transicion === "salir") {
          setTransicion("entrar");
          setPantallaActual(location);
        }
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={ <Principal /> } />
        <Route path="/servicios" element={ <Servicios /> } />
        <Route path="/contacto" element={  <Contacto /> } />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Rutas;

  