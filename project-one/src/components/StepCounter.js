import React, { Component } from "react";

class StepCounter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: 0 };
        //setting initial state of the counter to 0
        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
        //two different methos for incrementing and decrementing 
    }

    handleClickUp() {
        let currentCounter = this.state.counter;

        if (this.state.counter < this.props.max ) {
            //if the counter is less than the maximum number
            this.setState({ counter: currentCounter + this.props.step });
            //then run the increment function
        }
    }

    handleClickDown() {
        let currentCounter = this.state.counter;

        if (this.state.counter > 0) {
            this.setState({ counter: currentCounter - this.props.step });
        }
    }

    render() {
   
    return (
        <div className="centered">
            <p>{ this.state.counter }</p>
            <button onClick={this.handleClickUp}>+</button>
            <button onClick={this.handleClickDown}>-</button>
        </div>
        //the two buttons call the count up and count down methods
    );
}
}

StepCounter.defaultProps = {
    max: 100,
    step: 5
    }


export default StepCounter;

//to do this with one method 
//render() {
    //pass in an argument to the method for plus or minus 