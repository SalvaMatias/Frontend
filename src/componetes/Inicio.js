import React from "react";
import Boton from "./Boton";
import Formulario from "./Formulario";
import "../styles.css";

export default class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ini">
        <b> texto de informacion </b>
        <form class="form" id="form">
          <Boton
            click={() => alert("ok")}
            className="botoni"
            titulo="formulario chofer"
          />
          <Boton className="botoni" titulo="formulario cliente" />
          <Boton className="botoni" titulo="tabla Provincias" />
          <Boton className="botoni" titulo="tabla autos" />
        </form>
      </div>
    );
  }
}
