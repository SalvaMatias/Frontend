import React from "react";
import Boton from "./Boton";
import "../styles.css";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="formulario" id="formularioDiv">
        <form class="form" id="form">
          <label>
            {" "}
            Nombre:
            <input />
          </label>
          <label>
            {" "}
            Apellido:
            <input />
          </label>
          <label>
            {" "}
            Telefono:
            <input />
          </label>
          <label>
            {" "}
            Ciudad:
            <input />
          </label>
          <div id="contra">
            <label>
              {" "}
              contraseña:
              <input />
            </label>
          </div>
          <Boton className="botonf" titulo="formulario chofer" />
          <Boton className="botonf" titulo="formulario cliente" />
          <Boton className="botonf" titulo="tabla Provincias" />
          <Boton className="botonf" titulo="tabla autos" />
        </form>
      </div>
    );
  }
}
