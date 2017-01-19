import React, { Component } from 'react';

class RoundButton extends Component {

    constructor(props){
        super(props);
        console.log("This is the button constructor");
        this.foo = this.foo.bind(this);
        this.state = {
            active: false
        };
        this.showMessage = 'inital state';

        this.style = {
            height: '56px',
            width: '56px',
            zIndex: '20',
            backgroundColor: '#222',
            display: 'inline-block',
            border: 'none',
            borderRadius: '50%',
            boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
            cursor: 'pointer',
            outline: 'none',
            padding: '0',
            position: 'relative',
            WebkitUserDrag: 'none',
            fontWeight: 'bold', 
            color: '#f1f1f1',
            fontSize: '20px',
        };
    }

    componentWillMount(){
        console.log("Button Round mount will be complete");
    }

    componentDidMount(){
        console.log("Button Round mount is complete");
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
            <div className ="container">
                <button style={this.style} onClick={this.foo} className="button" >+</button>
                <h3>{this.showMessage}</h3>
            </div>
        );
    }
}

export default RoundButton
