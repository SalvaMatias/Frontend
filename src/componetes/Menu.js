import React from "react";
import Boton from "./Boton";
import "../styles.css";

export default function Menu({ irA }) {
  return (
    <div>
      <Boton
        click={() => irA("formChofer")}
        className="botoni"
        titulo="Formulario Chofer"
      />

      <Boton className="botoni" titulo="Inicio" click={() => irA("Inicio")} />

      <Boton
        className="botoni"
        titulo="Formulario Cliente"
        click={() => irA("formCliente")}
      />
      <Boton
        className="botoni"
        titulo="Tabla Choferes"
        click={() => irA("tabChofer")}
      />
      <Boton
        className="botoni"
        titulo="Tabla Provincia"
        click={() => irA("tabProvincia")}
      />
      <Boton
        className="botoni"
        titulo="Tabla Auto"
        click={() => irA("TabAuto")}
      />
      <Boton
        className="botoni"
        titulo="Registro"
        click={() => irA("RegistroCh")}
      />
    </div>
  );
}
