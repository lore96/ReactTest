import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Button from './modules/button.jsx';
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
        <h3 className="App-intro">
          Hello World
        </h3>
        <img src={logo} className="{startRotation()}" alt="logo" />

        <Button></Button>
      </div>
    );
  }
}


export default App;
