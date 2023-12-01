import React from "react";
import Boton from "./Boton";
import "../styles.css";
//La array "const prov"  hara que yo pueda poner Id y Nombre para tabla
const prov = [
  { id: 1, Nombre: "tierra del fuego" },
  { id: 2, Nombre: "tierra del fuego" },
  { id: 3, Nombre: "tierra del fuego" },
  { id: 3, Nombre: "tierra del fuego" },
];

export default class TablaPro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //esto es  para la D.B
      provincias: [],
    };
  }

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Provincia</th>
          </tr>
        </thead>
        <tbody>
          {/* prov.map hara que se pueda mostrar el Id y provincia atraves de la const prov*/}
          {prov.map((provincia, index) => (
            <tr>
              <td>{provincia.id}</td>
              <td>{provincia.Nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
