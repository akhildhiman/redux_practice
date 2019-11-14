import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"
import DisplayForm from './components/DisplayForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/displayform" component={DisplayForm} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
