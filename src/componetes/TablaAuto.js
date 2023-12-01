import React from "react";
import "../styles.css";
//La array "const prov"  hara que yo pueda poner Id y Nombre para tabla
const auto = [
  { id: 1, Nombre: " Toyota Corolla Cross " },
  { id: 2, Nombre: " Toyota Corolla Cross " },
  { id: 3, Nombre: " Toyota Corolla Cross " },
  { id: 3, Nombre: " Toyota Corolla Cross " },
];

export default class TablaAuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //esto es  para la D.B
      autos: [],
    };
  }

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marca</th>
          </tr>
        </thead>
        <tbody>
          {/* prov.map hara que se pueda mostrar el Id y Auto atraves de la const prov*/}
          {auto.map((auto, index) => (
            <tr>
              <td>{auto.id}</td>
              <td>{auto.Nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
