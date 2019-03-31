import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <h3>Keep Track of Your Daily Tasks Here</h3>
        <form type="submit">
          <input type="text" placeholder="type your today here" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
