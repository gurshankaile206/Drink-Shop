import React from 'react';
import Drink from './Drink';
import PropTypes from 'prop-types';

function DrinkMenu(props) {
  return (
    <React.Fragment>
      <hr />
      {props.menu.map((drink) =>
      <Drink
        whenDrinkClicked = { props.onDrinkSelection }
        name = {drink.name}
        brand = {drink.brand}
        price = {drink.price}
        alcoholContent = {drink.alcoholContent} 
        id = {drink.id}
        key = {drink.id}/>
        )}
    </React.Fragment>
  );
}

DrinkMenu.propTypes = {
  menu: PropTypes.array,
  onDrinkSelection: PropTypes.func,
}; 

export default DrinkMenu;