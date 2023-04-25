import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          required='required'
          placeholder='Tea Name' />

        <input
          type='text'
          name='origin'
          required='required'
          placeholder='Place of Origin' />

        <input
          type='text'
          name='caf'
          required='required'
          placeholder='Caf or Decaf' />

        <input
          type='number'
          name='price'
          required='required'
          placeholder='1' />

        <input
          type='number'
          name='inventory'
          required='required'
          placeholder='1' />

        <button className="btn btn-outline-success" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;