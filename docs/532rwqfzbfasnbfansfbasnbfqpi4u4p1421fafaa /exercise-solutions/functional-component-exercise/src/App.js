import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

class MyList extends Component {
    constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  clearList (e) {
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange (e) {
    this.setState({
      newItem: e.target.value
    });
  }


  addItem (e) {
    e.preventDefault();
    const toDos = this.state.toDoItemArray;
    toDos.push(this.state.newItem);
    this.setState({toDoItemArray: toDos, newItem: ''});
  }

  render() {
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        
        <ToDoList toDoItemArray={this.state.toDoItemArray} />
        
        <form>
          <input type="text"
           placeholder="Type an item here"
           onChange={(e) => this.newItemChange(e)}
           value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    );
  }
}

export default MyList;
