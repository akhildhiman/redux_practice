import React, { Component } from 'react';
import Todos from "./Todos"
import AddTodo from "./AddTodo"

class App extends Component {
  state = {
    todos: [
      { id: 1, text: "Buy some milk" },
      { id: 2, text: "Play mario cart" },
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    // console.log(id)
    this.setState({ todos: todos })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    console.log(todo.id)
    let todos = [...this.state.todos, todo]
    // console.log(todos)
    this.setState({ todos: todos })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue text">Todos</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> {/*passing down todos array of objects as props to Todos component*/}
      </div>
    )
  }

}

export default App;
