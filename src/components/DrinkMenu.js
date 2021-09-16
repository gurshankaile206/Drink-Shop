import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";

function DrinkMenu(props){
  return (
    <React.Fragment>
      <hr/>
      {props.drinkMenu.map((drink) =>
        <Drink
          whenDrinkClicked = { props.onDrinkSelection }
          names={drink.names}
          brand={drink.brand}
          price={drink.price}
          alcoholContent={drink.alcoholContent}
          id={drink.id}
          key={drink.id}/>
      )}
    </React.Fragment>
  );
}

DrinkMenu.propTypes = {
  ticketMenu: PropTypes.array,
  onDrinkSelection: PropTypes.func
};

export default DrinkMenu;