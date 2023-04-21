import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return(
    <React.Fragment>
      <h3>Name: {props.name}</h3>
      <p>Origin: {props.origin}</p>
      <p>Caf/Decaf: {props.caf}</p>
      <p>Price: {props.price}</p>
      <p>Inventory: {props.inventory}</p>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  caf: PropTypes.string,
  price: PropTypes.number,
  inventory: PropTypes.number
}

export default Tea;