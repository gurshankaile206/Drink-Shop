import React from 'react';
import NewDrinkForm from './NewDrinkForm';
import DrinkMenu from './DrinkMenu';
import DrinkDetail from './DrinkDetail';
import EditDrinkForm from './EditDrinkForm';
import Drink from './Drink';
import Button from 'react-bootstrap/Button';

class NewDrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterDrinkMenu: [],
      selectedDrink: null,
      editing: false
    };
  }

  handleAddingNewDrinkToMenu = (newDrink) => {
    const newMasterDrinkMenu = this.state.masterDrinkMenu.concat(newDrink);
    this.setState({masterDrinkMenu: newMasterDrinkMenu, formVisibleOnPage:false });
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
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
    this.setState({
      editing: true
    });
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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditDrinkForm 
        drink = {this.state.selectedDrink} 
        onEditDrink = {this.handleEditingDrinkInMenu} />
      buttonText = "Return to Menu";
    }
    else if(this.state.selectedDrink !== null) {
      currentlyVisibleState = <DrinkDetail
        drink = {this.state.selectedDrink}
        onClickingDelete = {this.handleDeletingDrink}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Menu";
    }
    else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation = {this.handleAddingNewDrinkToMenu}/>;
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <DrinkMenu drinkMenu = {this.state.masterDrinkMenu} onDrinkSelection = {this.handleChangingSelectedDrink} />;
      buttonText = "Add Drink"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="outline-secondary" size="md" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

export default NewDrinkControl;