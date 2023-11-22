import React from "react";
import "../styles.css";

export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { titulo, image, className, id,click } = this.props;
    return <input 
    onClick={()=>click()}
      type="button" 
      className={className}   
      id={id} 
      value={titulo} 
    />;
  }
}
