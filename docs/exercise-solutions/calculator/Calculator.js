import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sum: 0
    }
  };

  add() {
    var sum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0);

    this.setState({
      sum: sum
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" ref="val1" onKeyUp={this.add.bind(this)} />
          <span>+</span>
          <input type="text" ref="val2" onKeyUp={this.add.bind(this)} />
          <span>=</span>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
