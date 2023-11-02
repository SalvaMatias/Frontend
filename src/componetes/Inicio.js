import React from "react";
import Boton from "./Boton";
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
          <Boton className="botoni" titulo="formulario chofer" />
          <Boton className="botoni" titulo="formulario cliente" />
          <Boton className="botoni" titulo="tabla Provincias" />
          <Boton className="botoni" titulo="tabla autos" />
        </form>
      </div>
    );
  }
}
