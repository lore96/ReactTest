import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      console.log("This is the constructor");
      //this.state = {
      //  b:2
      //}
    }
  
  componentDidMount(){
    console.log("Mount complete");
    //let newState = Object.assign({}, this.state, {b:1});
    //this.setState(newState);
  }

  componentWillMount(){
    console.log("Mount will be complete");
    //let newState = Object.assign({}, this.state, {b:1});
    //this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redact</h2>
        </div>
        <p className="App-intro">
          Hello World
        </p>
        <img src={logo} className="{startRotation()}" alt="logo" />
      </div>
    );
  }
}


export default App;
