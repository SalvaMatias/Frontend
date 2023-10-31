import React from "react";
import Boton from "./Boton";

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
          <div id="divNotas">
            <label>
              {" "}
              :
              <input />
            </label>
          </div>
        </form>
        <div class="botones">
          <span class="" onclick="()"></span>
          <span class="" onclick="()"></span>
          <span class="" onclick="()">
            {" "}
          </span>
          <span class="" onclick="()">
            {" "}
          </span>
        </div>
      </div>
    );
  }
}
