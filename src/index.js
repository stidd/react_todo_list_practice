import React, { Component } from "react";
import ReactDOM from "react-dom";

function UserFormInput(props) {
  return (
    <form onSubmit={props.submit}>
      <h3>Keep Track of Your Daily Tasks Here</h3>
      <input
        type="text"
        placeholder="type your today here"
        onChange={props.todo}
      />
      <button>Submit</button>
    </form>
  );
}

class App extends Component {
  state = {
    todos: [],
    currentTodo: ""
  };

  handleToDo = e => {
    console.log(e.target.value);
    this.setState({
      currentTodo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

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
        <UserFormInput submit={this.handleSubmit} todo={this.handleToDo} />
        {this.state.todos.length === 0 ? "notta" : "something"}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
