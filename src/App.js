import "./styles.css";
import Formulario from "./componetes/Formulario";
import Boton from "./componetes/Boton";
import Head from "./componetes/Head";

export default function App() {
  return (
    <div className="App">
      <Head />
      <Formulario />
      <Boton />
    </div>
  );
}
