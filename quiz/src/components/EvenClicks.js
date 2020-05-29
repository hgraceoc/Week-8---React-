import React, { Component } from "react";

class EvenClicks extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            counter: 0 }
            ;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let currentCounter = this.state.counter;

        this.setState({ counter: currentCounter + 1 });
    }

    render() {

        return (
            <h2 className="centered" 
            onClick={this.handleClick}> {((this.state.counter) %2 === 0) ? "Even" : "Odd" }
            </h2>
        );
      }
    }

export default EvenClicks;