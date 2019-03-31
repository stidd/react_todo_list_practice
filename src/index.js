import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    todos: [],
    currentTodo: ""
  };

  handleToDo = e => {
    this.setState({
      currentTodo: e.target.value
    });
  };

  handleSubmit = () => {
    let todosCopy = this.state.todos.slice();
    let newTodo = todosCopy.push(this.state.currentTodo);
    this.setState({
      todos: newTodo,
      currentTodo: " "
    });
  };

  render() {
    return (
      <div>
        <h3>Keep Track of Your Daily Tasks Here</h3>
        <input
          type="text"
          placeholder="type your today here"
          onChange={this.handleToDo}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <br />
        {this.state.todos.length === 0 ? "no stuff" : "stuff"}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
