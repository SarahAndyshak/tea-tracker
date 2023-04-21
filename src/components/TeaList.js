import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function TeaList(props){
  return(
    <React.Fragment>
      {props.teaList.map((tea) =>
      <Tea
        whenTeaClicked = { props.onTeaSelection }
        name = {tea.name}
        origin = {tea.origin}
        caf = {tea.caf}
        price = {tea.price}
        inventory = {tea.inventory}
        // onBuyTea = {props.onBuyTea}
        // onRestockTea = {props.onRestockTea}
        // onTeaSelect = {props.onTeaSelect}
        id = {tea.id}
        key = {tea.id} />
      )}
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  // onBuyTea: PropTypes.func,
  // onRestockTea: PropTypes.func,
  // onTeaSelct: PropTypes.func,
  onTeaSelection: PropTypes.func
}

export default TeaList;