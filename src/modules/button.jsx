import React, { Component } from 'react';

const style = {
  background:'#222',
  marginTop:'2px',
  color: 'white',
  fontFamily: 'sans-serif',
  border: 'none'
};

class Button extends Component {
    constructor(props){
      super(props);
      console.log("This is the button constructor");
      this.foo = this.foo.bind(this);
      console.log(style);
    }
  
  componentDidMount(){
    console.log("Button mount complete");
  }

  componentWillMount(){
    console.log("Button mount will be complete");
  }

  foo(){
    console.log('Button click');
  }

  render() {
    return (
      <button style={style} onClick={this.foo} >Clicca</button>
    );
  }
}


export default Button;
