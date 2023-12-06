import { useEffect, useState } from "react";
import Head from "./componetes/Head";
import Inicio from "./componetes/Inicio";
import Menu from "./componetes/Menu";
import TablaAuto from "./componetes/TablaAuto";
import TablaPro from "./componetes/TablaPro";
import FormularioCli from "./componetes/FormularioCli";
import FormularioCho from "./componetes/FormularioCho";
import TablaCho from "./componetes/TablaCho";
import Registro from "./componetes/Registro";
import Footer from "./componetes/Footer";
import "./styles.css";

export default function App() {
  const [pagina, setPagina] = useState("Inicio");

  //Ejemplo de useEffect de marquitos aurelio
  useEffect(() => {
    console.log("pagina ha cambiado a: ", pagina);
  }, [pagina]);

  return (
    <div className="App">
      <Head />
      {/* Permite que podomas viajar a otros componetes */}
      <Menu irA={(nueva) => setPagina(nueva)} />

      <div className="forma">
        {pagina === "Inicio" && <Inicio />}
        {pagina === "formChofer" && <FormularioCho />}
        {pagina === "tabChofer" && <TablaCho />}
        {pagina === "formCliente" && <FormularioCli />}
        {pagina === "tabProvincia" && <TablaPro />}
        {pagina === "TabAuto" && <TablaAuto />}
        {pagina === "RegistroCh" && <Registro />}
      </div>

      <Footer />
    </div>
  );
}
