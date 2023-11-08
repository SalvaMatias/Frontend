import "./styles.css";
import Formulario from "./componetes/Formulario";
import Boton from "./componetes/Boton";
import Head from "./componetes/Head";
import Tabla from "./componetes/Tabla";
import Inicio from "./componetes/Inicio";
import Footer from "./componetes/Footer";

export default function App() {
  return (
    <div className="App">
      <Head />
      <div className="forma">
        <Inicio />
      </div>
      <div className="f">
        <Formulario />
      </div>
      <Footer />
      <Tabla />
    </div>
  );
}
