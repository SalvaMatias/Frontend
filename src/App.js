import { useEffect, useState } from "react";
import TablaAuto from "./componetes/TablaAuto";
import TablaPro from "./componetes/TablaPro";
import FormularioCli from "./componetes/FormularioCli";
import FormularioCho from "./componetes/FormularioCho";
import Head from "./componetes/Head";
import TablaCho from "./componetes/TablaCho";
import Inicio from "./componetes/Inicio";
import Footer from "./componetes/Footer";
import Menu from "./componetes/Menu";

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
      {/* Permite que podomas cambiar de componetes */}
      <Menu irA={(nueva) => setPagina(nueva)} />

      <div className="forma">
        {pagina === "Inicio" && <Inicio />}
        {pagina === "formChofer" && <FormularioCho />}
        {pagina === "tabChofer" && <TablaCho />}
        {pagina === "formCliente" && <FormularioCli />}
        {pagina === "tabProvincia" && <TablaPro />}
        {pagina === "TabAuto" && <TablaAuto />}
      </div>

      <Footer />
    </div>
  );
}
