import React from "react";
import Boton from "./Boton";
import "../styles.css";

export default class FormularioCho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="formulario" id="formularioDiv">
        <form className="form" id="form">
          <h1> Formulario de Choferes </h1>
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
            Marca del Auto:
            <select>
              <option> </option>
              <option> </option>
              <option> </option>
            </select>
          </label>
          <label>
            {" "}
            Provincia:
            <select>
              <option> </option>
              <option> </option>
              <option> </option>
              <option> </option>
            </select>
          </label>
          <div id="contra">
            <label>
              {" "}
              Contraseña:
              <input type="password" />
            </label>
            <Boton />
          </div>
        </form>
      </div>
    );
  }
}
