import React from 'react';

class Grocery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <li>
          {this.props.name}
          <button type="button" onClick={this.props.handleButtonClick}>Delete</button>
        </li>
      </div>
    )
  }
}

export default Grocery;
