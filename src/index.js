import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>hey</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
