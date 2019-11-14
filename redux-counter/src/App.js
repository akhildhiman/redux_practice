import React, { Component } from 'react';
import './App.css';
import { createStore } from "redux"


function reducer(state = { count: 0 }, action) {
  console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    default:
      return state
  }
}


let store = createStore(reducer)
console.log(store)

class App extends Component {
  constructor() {
    super()
    store.subscribe(() => {
      console.log("subscribing to store")
      console.log(store.getState())
    })
  }

  increment() {
    console.log("inside increment method")
    store.dispatch({ type: "INCREMENT" })
  }

  decrement() {
    console.log("inside decrement method")
    store.dispatch({ type: "DECREMENT" })
  }

  render() {
    return (
      <div className="App" >
        <h1>Redux Counter</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default App;
