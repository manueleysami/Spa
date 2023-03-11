function Error404() {
    return (
      <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-danger">Error 404!</h1>
        <h4>Pagina no encontrada</h4>
        <p>Por favor vuelva al <a href="/">INICIO</a> </p>
      </div>
    );
  }
  
  export default Error404;
  