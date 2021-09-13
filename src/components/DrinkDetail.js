import React from 'react';
import PropTypes from "prop-types";
import Drink from './Drink.js';
import Button from 'react-bootstrap/Button';

function DrinkDetail(props) {
  const { drink, onClickingDelete} = props; 

  return (
    <React.Fragment>
      <h1>Drink Details</h1>
      <h4>Drink Name: {drink.name}</h4>
      <h4>Drink Brand: {drink.brand}</h4>
      <h4>Drink Price: {drink.price}</h4>
      <h4>Drink Alcohol Content: {drink.alcoholContent}</h4>
      <Button variant="outline-warning" size="sm" onClick = {props.onClickingEdit}>Update Drink</Button>
      <Button variant="outline-danger" size="sm" onClick = {() => props.onClickingDelete(drink.id) }>Remove Drink</Button>
      <hr/>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default DrinkDetail;