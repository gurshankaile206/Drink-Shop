
import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const startingPints = props.drink? props.drink.pints : "";
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Drink Name' />
        <input
          type='text'
          name='brand'
          placeholder='brand name' />
        <input
          type='text'
          name='price'
          placeholder='price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='alcohol Content' />
        <input 
          type="string"
          name="pints"
          placeholder="pints"
          defaultValue={startingPints} />
        
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  drink: PropTypes.object
};

export default ReusableForm;