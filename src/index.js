import React, { Component } from "react";
import ReactDOM from "react-dom";

function UserFormInput(props) {
  return (
    <form onSubmit={props.submit}>
      <h3>Keep Track of Your Daily Tasks Here</h3>
      <input
        type="text"
        placeholder="type your today here"
        value={props.currenttodo}
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
    // console.log(e.target.value);
    this.setState({
      currentTodo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({
      todos: todosCopy,
      currentTodo: ""
    });
  };

  render() {
    let fullList = this.state.todos.map((item, i) => {
      return <li key={i}>{item}</li>;
    });

    return (
      <div>
        <UserFormInput
          submit={this.handleSubmit}
          todo={this.handleToDo}
          currenttodo={this.state.currentTodo}
        />
        {this.state.todos.length === 0 ? "nottta" : <ul>{fullList}</ul>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
