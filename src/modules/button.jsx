import React, { Component } from 'react';

class Button extends Component {
    
    constructor(props){
        super(props);
        console.log("This is the button constructor");
        this.foo = this.foo.bind(this);
        this.state = {
            active: false
        };
        this.showMessage = 'inital state';

        this.style = {
            background:'#222',
            marginTop:'2px',
            color: 'white',
            fontFamily: 'sans-serif',
            border: 'none',
            padding: '10px 10px'
        };
    }

    componentWillMount(){
        console.log("Button mount will be complete");
    }

    foo(){
    }

    render() {
        return (
            <div>
                <button style={this.style} onClick={this.foo} >Click</button>
                <h3>{this.showMessage}</h3>
        </div>
        );
    }

    componentDidMount(){
        console.log("Button mount complete");
    }
}

export default Button
