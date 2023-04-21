import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Tea Details</h1>
      <h3>Name: {props.name}</h3>
      <p>Origin: {props.origin}</p>
      <p>Caf/Decaf: {props.caf}</p>
      <p>Price: {props.price}</p>
      <p>Inventory: {props.inventory}</p>
      <button class="btn btn-light" onClick={ props.onClickingEdit }>Update inventory</button>
      <br />
      <button class="btn btn-light" onClick={()=> onClickingDelete(tea.id) }>Delete this tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default TeaDetail;