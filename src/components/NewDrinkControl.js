import React from 'react';
import NewDrinkForm from './NewDrinkForm';
import DrinkMenu from './DrinkMenu';
import DrinkDetail from './DrinkDetail';
import EditDrinkForm from './EditDrinkForm';


class DrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterDrinkMenu: [],
      selectedDrink: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewDrinkToMenu = (newDrink) => {
    const newMasterDrinkMenu = this.state.masterDrinkMenu.concat(newDrink);
    this.setState({
      masterDrinkMenu: newMasterDrinkMenu,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedDrink = (id) => {
    const selectedDrink = this.state.masterDrinkMenu.filter(drink => drink.id === id)[0];
    this.setState({selectedDrink: selectedDrink});
  }

  handleDeletingDrink = (id) => {
    const newMasterDrinkMenu = this.state.masterDrinkMenu.filter(drink => drink.id !== id);
    this.setState({
      masterDrinkMenu: newMasterDrinkMenu,
      selectedDrink: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingDrinkInMenu = (drinkToEdit) => {
    const editedMasterDrinkMenu = this.state.masterDrinkMenu
      .filter(drink => drink.id !== this.state.selectedDrink.id)
      .concat(drinkToEdit);
    this.setState({
      masterDrinkMenu: editedMasterDrinkMenu,
      editing: false,
      selectedDrink: null
    });
  }

  handleSellPint = (drink) => {
    if(drink.pints > 0) {
      drink.pints--;
    }
    this.setState({
      selectedDrink: drink
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditDrinkForm drink = {this.state.selectedDrink} onEditDrink = {this.handleEditingDrinkInMenu} />
      buttonText = "Return to Drink Menu";

    } else if (this.state.selectedDrink != null) {
      currentlyVisibleState = 
      <DrinkDetail 
        drink = {this.state.selectedDrink} 
        onClickingDelete = {this.handleDeletingDrink} 
        onClickingEdit = {this.handleEditClick}
        onClickSellPint = {this.handleSellPint} />
      buttonText = "Return to Drink Menu";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToMenu}  />;
      buttonText = "Return to Drink Menu";

    } else {
      currentlyVisibleState = 
      <DrinkMenu 
      drinkMenu={this.state.masterDrinkMenu} 
      onDrinkSelection={this.handleChangingSelectedDrink} />
      buttonText = "Add Drink";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default DrinkControl;