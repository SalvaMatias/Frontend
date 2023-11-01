import React from "react";
import Boton from "./Boton";
import "../styles.css";

export default class Tabla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Materia</th>
          <th>Docente</th>
          <th>Curso</th>
          <th>Horario</th>
          <th>Notas</th>
          <th>Promedio</th>
        </tr>
        <Boton/>
      </thead>
    );
  }
}
