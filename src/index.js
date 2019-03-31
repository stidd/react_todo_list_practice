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

function MakeList(props) {
  let fullList = props.todos.map((item, i) => {
    return (
      <li key={i}>
        {item}
        <button onClick={() => props.handleDelete(i)}>X</button>
      </li>
    );
  });

  return <ul>{fullList}</ul>;
}

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

  handleSubmit = e => {
    e.preventDefault();

    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({
      todos: todosCopy,
      currentTodo: ""
    });
  };

  handleDelete = i => {
    let copyTodos = this.state.todos.slice();
    copyTodos.splice(i, 1);
    this.setState({
      todos: copyTodos
    });
  };

  render() {
    return (
      <div>
        <UserFormInput
          submit={this.handleSubmit}
          todo={this.handleToDo}
          currenttodo={this.state.currentTodo}
        />
        <MakeList todos={this.state.todos} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
