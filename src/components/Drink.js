import React from "react";
import PropTypes from 'prop-types';

function Drink(props) {
  return (
    <React.Fragment>
      <div onClick = { () => props.whenDrinkClicked(props.id)}>
        <h3> Drink: {props.name}</h3>
        <h6> Drink Brand: {props.brand}</h6>
        <h6> Drink Price: {props.price}</h6>
        <h6> Drink Alcohol Content: {props.alcoholContent}</h6>

      </div>
    </React.Fragment>
  );
}

Drink.protoTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
};

export default Drink;