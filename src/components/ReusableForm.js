import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          placeholder='Tea Name' />

        <input
          type='text'
          name='origin'
          placeholder='Place of Origin' />

        <input
          type='text'
          name='caf'
          placeholder='Caf or Decaf' />

        <input
          type='number'
          name='price'
          placeholder='$1' />

        <input
          type='number'
          name='inventory'
          placeholder='1' />

        <button className="btn btn-light" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;