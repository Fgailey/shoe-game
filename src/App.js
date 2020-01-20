import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/Navbar';

import Store from './pages/Store'
import Home from './pages/Home'

class App extends Component{

  // state = {
  //   shoes
  // };


  render(){
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
