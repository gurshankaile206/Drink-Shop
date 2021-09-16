
import React from "react";
import PropTypes from "prop-types";

function DrinkDetail(props){
  const { drink, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Drink Detail</h1>
      <h3>{drink.brand} - {drink.names}</h3>
      <p><em>{drink.price}</em></p>
      <p><em>{drink.alcoholContent}</em></p>
      <button onClick={ props.onClickingEdit }>Update Drink</button>
      <button onClick={()=> onClickingDelete(drink.id) }>Close Drink</button>
      <hr/>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default DrinkDetail;