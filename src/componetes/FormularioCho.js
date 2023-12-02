import React from "react";
import Boton from "./Boton";
import "../styles.css";

const provi = [
  { id: 1, nombre: "Tierra del fuego" },
  { id: 2, nombre: "hola" },
  { id: 3, nombre: "adios" },
];

const autosModelo = [
  { id: 1, nombre: "Toyota" },
  { id: 2, nombre: "ford" },
  { id: 3, nombre: "honda" },
];

export default class FormularioCho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provin: [],
      autos: [],
      marca: 0,
      provincias: 0,
    };
  }
  componentDidMount() {
    this.getMarcasAuto();
    this.getProvincias();
  }

  getMarcasAuto() {
    //axios.get
    this.setState({ autos: autosModelo });
  }

  getProvincias() {
    this.setState({ provin: provi });
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
            <select
              value={this.state.marca}
              onChange={(e) => this.setState({ marca: e.target.value })}
            >
              {this.state.autos.map((auto) => {
                return (
                  <option key={auto.id} value={auto.id}>
                    {auto.nombre}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            {" "}
            Provincia:
            <select
              value={this.state.provincias}
              onChange={(e) => this.setState({ provincias: e.target.value })}
            >
              {this.state.provin.map((pro) => {
                return (
                  <option key={pro.id} value={pro.id}>
                    {pro.nombre}
                  </option>
                );
              })}
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
