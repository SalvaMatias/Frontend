import React from "react";
import "../styles.css";

export default class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="header">
        <img src />
        <div class="links">
          <a href="#">Google</a>
          <a href="#">Wiki</a>
          <a href="#">Youtube</a>
        </div>
        <h1>Formulario Materias</h1>
      </div>
    );
  }
}
