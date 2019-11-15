import React from "react"

const Todos = (props) => {
    const { todos, deleteTodo } = props
    console.log(todos)
    const todoList = todos.length ? todos.map(todo => {
        return (
            <div className="collection-item" key={todo.id}>
                <span onClick={() => { deleteTodo(todo.id) }}>{todo.text}</span>
            </div>
        )
    }) : <p className="center">You have no todos left</p>

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}



export default Todos