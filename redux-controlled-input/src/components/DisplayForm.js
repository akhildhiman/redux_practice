import React, { Component } from "react"
import { connect } from "react-redux"

class DisplayForm extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Welcome</h1>
                <h2>Your name is {this.props.username}</h2>
                <h2>Your email is {this.props.email}</h2>
            </div>)
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(DisplayForm)