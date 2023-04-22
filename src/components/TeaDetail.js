import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Tea Details</h1>
      <h3>Name: {tea.name}</h3>
      <h5>Origin: {tea.origin}</h5>
      <h5>Caf/Decaf: {tea.caf}</h5>
      <h5>Price per oz: ${tea.price}</h5>
      <h5>Inventory available in oz: {tea.inventory}</h5>
      <button className="btn btn-outline-success" onClick={ props.onClickingEdit }>Update inventory</button>
      <br />
      <button className="btn btn-outline-success" onClick={()=> onClickingDelete(tea.id) }>Delete this tea</button>
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