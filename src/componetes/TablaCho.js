import React from "react";
import Boton from "./Boton";
import "../styles.css";

export default class TablaCho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Primero</th>
            <th scope="col">Último</th>
            <th scope="col">Manejar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
