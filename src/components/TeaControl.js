import React from "react";
import NewTeaForm from "./NewTeaForm";
import EditTeaForm from "./EditTeaForm";
import TeaList from "./TeaList";
import TeaDetail from "./TeaDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

class TeaControl extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTeaList: [],
      selectedTea: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingTea = (id) => {
    const newMainTeaList = this.state.mainTeaList.filter(tea => tea.id !== id);
    this.setState({
      mainTeaList: newMainTeaList,
      selectedTea: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTeaInList = (teaToEdit) => {
    const editedMainTeaList = this.state.mainTeaList
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(teaToEdit);
    this.setState({
      mainTeaList: editedMainTeaList,
      editing: false,
      selectedTea: null
    })
  }

  handleAddingNewTeaToList = (newTea) => {
    console.log("Adding Tea reached");
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({mainTeaList: newMainTeaList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedTea = (id) => {
    let selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: selectedTea});
  }

  //logic to decrement inventory
  handleBuyClick = (id) => {
    let selectedTea = this.state.mainTeaList.find(item => item.id === id);
    selectedTea.inventory -=1;
    const newMainTeaList = this.state.mainTeaList.map((tea) => {return tea.id === id ? selectedTea : tea});
    console.log(selectedTea.inventory);
    this.setState({mainTeaList: newMainTeaList});
  }

  //logic to add to inventory
  handleRestockClick = (id, stock) => {
    let selectedTea = this.state.mainTeaList.find(tea => tea.id === id);
    selectedTea.inventory += stock;
    const newMainTeaList = this.state.mainTeaList.map((tea => {return tea.id === id ? selectedTea : tea}));
    this.setState({mainTeaList: newMainTeaList});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTeaForm tea = {this.state.selectedTea} 
      onEditTea = {this.handleEditingTeaInList} />
      buttonText = "Return to list of Teas";
    } else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail tea = {this.state.selectedTea}
      onClickingDelete={this.handleDeletingTea}
      onClickingEdit={this.handleEditClick} />
      buttonText = "Return to list of Teas";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList} />;
      buttonText = "Return to list of Teas";
    } else { 
      currentlyVisibleState = <TeaList 
      tea = {this.state.selectedTea}
      teaList = {this.state.mainTeaList}
      onBuyItem = {this.handleBuyClick}
      onRestockTea = {this.handleRestockClick}
      onTeaSelect = {this.handleChangingSelectedTea} />;
      buttonText = "Add Item";
    }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button class="btn btn-secondary" onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
  }
}

export default TeaControl;