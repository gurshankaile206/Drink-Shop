import React from "react";
import PropTypes from "prop-types";

function Drink(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenDrinkClicked(props.id)}>
        <h3>{props.brand} - {props.names}</h3>
        <p><em>{props.price}</em></p>
        <p><em>{props.alcoholContent}</em></p>
        <p><em>{props.pints} pints available</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Drink.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pints: PropTypes.string,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func,
};

export default Drink;