import HeaderNoPrincipal from "../varios/HeaderNoPrincipal"
import Formulario from "./Formulario"
import imagen from "../../assets/img/about4.jpg"

function Contacto() {

    return (
      <div>
        <HeaderNoPrincipal titulo="Contacto" />
        
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 d-none d-lg-block px-3">
              <img src={imagen} alt="imagen" className="w-100" />
            </div>
            <div className="col-12 col-lg-6">
              <Formulario />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contacto