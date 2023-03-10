import { useState } from "react";

function Formulario() {
    // estado local del componente
    const [datos, SetDatos] = useState({
    nombre: "",
    correo: "",
    comentario: "",
  });
  const [mensaje, setMensaje] = useState({
    tipo: "",
    contenido: "",
    estatus: false,
  });

//   funcion que valida el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // si los campos estan vacios envia un mensaje de error
    if (
      datos.correo.trim() == "" ||
      datos.nombre.trim() == "" ||
      datos.comentario.trim() == ""
    ) {
      setMensaje({
        tipo: "error",
        contenido: "Error. Debe de completar todos los campos.",
        estatus: true,
      });
      return;
    }
    // si todo esta bien envia un mensaje de exito
    setMensaje({
      tipo: "exito",
      contenido: "Gracias por enviar su comentario.",
      estatus: true,
    });
  };

  return (
    <div className="d-flex align-items-center h-100">
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="form-floating mb-3 pb-3">
          <input
            type="email"
            value={datos.correo}
            className="form-control"
            placeholder="Ingrese su correo electrónico."
            onChange={(e) => SetDatos({ ...datos, correo: e.target.value })}
          />
          <label for="floatingInput">Correo Electrónico</label>
        </div>
        <div className="form-floating mb-3 pb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su nombre completo"
            value={datos.nombre}
            onChange={(e) => SetDatos({ ...datos, nombre: e.target.value })}
          />
          <label for="floatingPassword">Nombres</label>
        </div>

        <div className="form-floating  mb-3 pb-3">
          <textarea
            className="form-control"
            placeholder="Ingrese su comentario"
            style={{ height: "200px", maxHeight: "250px", minHeight: "150px" }}
            value={datos.comentario}
            onChange={(e) => SetDatos({ ...datos, comentario: e.target.value })}
          ></textarea>
          <label for="floatingTextarea">Comentario</label>
        </div>

        <button type="submit" className="btn btn-danger w-100">
          Enviar comentario
        </button>

        {mensaje.estatus ? (
          <div
            className={`mt-3 alert alert-${
              mensaje.tipo == "error" ? "danger" : "success"
            }`}
            role="alert"
          >
            {mensaje.contenido}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default Formulario;
