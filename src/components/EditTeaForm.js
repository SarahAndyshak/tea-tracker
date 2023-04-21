import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTeaForm(props){
  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value,
      origin: event.target.origin.value,
      caf: event.target.caf.value,
      price: event.target.price.value,
      inventory: event.target.inventory.value,
      id: tea.id
    });
  }

  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditTeaFormSubmission}
      className="btn btn-outline-success" buttonText="Update Tea Info" />
    </React.Fragment>
  );
}

EditTeaForm.propTypes = {
  onEditTea: PropTypes.func,
  tea: PropTypes.object
}

export default EditTeaForm;