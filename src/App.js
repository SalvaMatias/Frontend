import "./styles.css";
import Formulario from "./componetes/Formulario";
import Boton from "./componetes/Boton";
import Head from "./componetes/Head";
import Tabla from "./componetes/Tabla";
import Inicio from "./componetes/Inicio";

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

      <talba />
    </div>
  );
}
