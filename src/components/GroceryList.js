import React from 'react';
import Grocery from './Grocery';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let groceries = this.props.groceries.map((grocery) => {
      return (
        <Grocery
        key={grocery.id}
        name={grocery.name}
        handleButtonClick={this.props.handleButtonClick}
        />
      );
    });

    return(
      <ul>
        {groceries}
      </ul>

    )
  }
}



export default GroceryList;
