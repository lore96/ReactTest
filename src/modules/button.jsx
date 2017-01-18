import React, { Component } from 'react';

const style = {
  background:'#222',
  marginTop:'2px',
  color: 'white',
  fontFamily: 'sans-serif',
  border: 'none',
  padding: '10px 10px'
};


class Button extends Component {
    constructor(props){
      super(props);
      console.log("This is the button constructor");
      this.foo = this.foo.bind(this);
      console.log(style);
      this.state = {
        active: false
      };
      this.showMessage = 'inital state';
    }

  componentWillMount(){
    console.log("Button mount will be complete");
  }

  foo(){
      this.setState((prevState, props) => {
        if(prevState.active === false){
          this.showMessage = 'new state';
        } else {
          this.showMessage = 'initial state';
        }

        return ({active: !prevState.active});
      });

    console.log('Button click', this.state);

  }

  render() {
    return (
      <div>
        <button style={style} onClick={this.foo} >Click</button>
        <h3>{this.showMessage}</h3>
      </div>
    );
  }

  componentDidMount(){
    console.log("Button mount complete");
  }
}


export default Button;
