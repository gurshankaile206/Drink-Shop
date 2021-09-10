import React from 'react';
import PropTypes from "prop-types";
import Drink from './Drink.js';

function DrinkDetail(props) {
  const { drink } = props; 

  return (
    <React.Fragment>
      <h1>Drink Details</h1>
      <h4>Drink Name: {drink.name}</h4>
      <h4>Drink Brand: {drink.brand}</h4>
      <h4>Drink Price: {drink.price}</h4>
      <h4>Drink Alcohol Content: {drink.alcoholContent}</h4>

    </React.Fragment>
  )
}

export default DrinkDetail;