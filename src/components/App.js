import React from 'react';
import GroceryList from './GroceryList'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let groceryData = [
      { id: 1, name: "Oranges" },
      { id: 2, name: "Bananas" },
      { id: 3, name: "Bread" }
    ];
    return(
      <div>
        <h1>Grocery List</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="addItem" name="addItem" defaultValue = "name of grocery"/>
          <input type="submit" id="submit" name="submit" value="Add To List" />
        </form>
          <GroceryList groceries={groceryData} handleButtonClick={ (event) => { alert('Button was clicked')} }/>
      </div>
    );
  }
};


export default App;
