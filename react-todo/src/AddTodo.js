import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        text: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({text: ""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
                </form>
            </div>

        )
    }
}



export default AddTodo