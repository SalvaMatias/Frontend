import React from "react";
import Boton from "./Boton";
import FormularioCho from "./FormularioCho";
import "../styles.css";

export default class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ini">
        <b>Texto de información</b>
        <form className="form" id="form"></form>
      </div>
    );
  }
}
