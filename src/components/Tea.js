import React from "react";
import PropTypes from "prop-types";

function Tea(props){

  function handleClick() {
    return props.onBuyTea(props.id);
  }

  function handleSubmit(event) {
    event.preventDefault();
// for use with number form
    // return props.onRestockTea(props.id, parseInt(event.target.inventory.value));
// for use with button only
    return props.onRestockTea(props.id);
  }

  let teaDisplay = null;
  if (props.inventory <= 0) {
    teaDisplay = <h4>{props.name} is <strong>Out of Stock</strong></h4>
  } else {
    teaDisplay = 
    <>
    <h3>Name: {props.name}</h3>
    <h5>Origin: {props.origin}</h5>
    <h5>Caf/Decaf: {props.caf}</h5>
    <h5>Price per oz: ${props.price}</h5>
    <h5>Inventory available in oz: {props.inventory}</h5>
    {/* <button className="btn btn-success" onClick={handleClick}>Buy: 1 oz</button> */}
    {/* moved to fix issue with showing details */}
    </>
  }

  return (
    <React.Fragment>
      <div onClick={() => props.onTeaSelect(props.id)}>
      {teaDisplay}
      </div>
      <button className="btn btn-success" onClick={handleClick}>Buy: 1 oz</button>
      <br /><br />
      <button className="btn btn-success" onClick={handleSubmit}>Restock: 130 oz</button>

{/* For use with form, didn't have the math logic correct */}
      {/* <form onSubmit={handleSubmit}>
        <input type="number" required min="1" max="130" name="inventory" className="form-control" />
        <button className="btn btn-outline-success">Restock: new crate</button>
      </form> */}
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