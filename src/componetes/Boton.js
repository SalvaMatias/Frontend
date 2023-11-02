import React from "react";
import "../styles.css";

export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { titulo, image, className, id } = this.props;
    return (
      <button className={className} id={id}>
        {titulo}
        {image}
      </button>
    );
  }
}