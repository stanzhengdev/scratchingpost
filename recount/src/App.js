import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("INCREMENT");
      return state + 1;
    case "DECREMENT":
      console.log("DECREMENT");
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(counter);

class Counter extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentDidUnMount() {
    this.unsubscribe();
  }

  render() {
    const state = store.getState();
    return (
      <h1>
        {state}
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.increment}>+</button>
      </h1>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter
          increment={() => {
            store.dispatch({
              type: "INCREMENT"
            });
          }}
          decrement={() => {
            store.dispatch({
              type: "DECREMENT"
            });
          }}
        />
      </div>
    );
  }
}

export default App;
