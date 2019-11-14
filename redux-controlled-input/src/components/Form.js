import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Form extends Component {


    handleSubmit = () => {
        console.log("inside handlesubmit")


    }


    handleChange = (event) => {
        console.log("inside handlechange")
        // console.log(this.props)
        const { name, value } = event.target
        this.props.dispatch({ type: name, payload: value })
    }

    render() {
        // console.log(this.props)
        return (
            <>
                <label>Username:</label>
                <input type="text"
                    placeholder="Enter your username"
                    name="username"
                    onChange={this.handleChange}
                />
                <br></br>

                <label>Email:</label>
                <input type="text"
                    placeholder="Enter your email"
                    name="email"
                    onChange={this.handleChange}
                />
                <br></br>

                <Link to="/displayform">Submit</Link>

            </>
        )
    }

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Form)