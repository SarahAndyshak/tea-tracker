import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewTeaForm(props){
  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      caf: event.target.caf.value,
      price: event.target.price.value,
      inventory: event.target.inventory.value,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTeaFormSubmission}
        className="btn btn-light" buttonText="Add Tea" />
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;