import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/varios/Footer";
import NavBar from "./components/varios/NavBar";
import Rutas from "./components/varios/Rutas";

function App() {
  return (
    <div className="nunito bg-light">
      <BrowserRouter>
        <NavBar />
        <Rutas />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
