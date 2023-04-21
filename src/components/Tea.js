import React from "react";
import PropTypes from "prop-types";
import Toast from 'react-bootstrap/Toast';

function Tea(props){

  function handleClick() {
    return props.onBuyTea(props.id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.inventory.value);
    return props.onRestockTea(props.id, parseInt(event.target.inventory.value));
  }

  let teaDisplay = null;
  if (props.inventory <= 0) {
    teaDisplay = <h4>{props.name} is <strong>Out of Stock</strong></h4>
  } else {
    teaDisplay = 
    <>
    <h3>Name: {props.name}</h3>
    <p>Origin: {props.origin}</p>
    <p>Caf/Decaf: {props.caf}</p>
    <p>Price per oz: ${props.price}</p>
    <p>Inventory available in oz: {props.inventory}</p>
    <button className="btn btn-success" onClick={handleClick}>Buy: 1 oz</button>
    </>
  }

  return (
    <React.Fragment>
      <Toast className="mb-4">
      <Toast.Header closeButton={false}>
      <div onClick={() => props.onTeaSelect(props.id)}>
      {teaDisplay}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="number" min="1" max="130" name="inventory" className="form-control" />
        <button className="btn btn-outline-success">Restock: new crate</button>
      </form>
      </Toast.Header>
      </Toast>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  caf: PropTypes.string,
  price: PropTypes.number,
  inventory: PropTypes.number,
  id: PropTypes.string,
  onBuyTea: PropTypes.func,
  onTeaSelect: PropTypes.func
}

export default Tea;