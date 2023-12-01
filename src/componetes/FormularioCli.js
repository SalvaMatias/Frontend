import React from "react";
import Boton from "./Boton";
import Menu from "./Menu";
import "../styles.css";

export default class FormularioCli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="formulario" id="formularioDiv">
        <form className="form" id="form">
          <h1> Formulario Cliente </h1>
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
            Provincia:
            <input />
          </label>
          <div id="contra">
            <label>
              {" "}
              Contraseña:
              <input type="password" />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
