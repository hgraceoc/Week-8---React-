import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: 50 };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClick() {
        let currentCounter = this.state.counter;

        if (this.state.counter < this.props.max ) {
            this.setState({ counter: currentCounter + 1 });
        }
    }

    handleClickMinus() {
        let currentCounter = this.state.counter;

        if (this.state.counter > 0) {
            this.setState({ counter: currentCounter - 1 });
        }
    }

    render() {
        
    return (
        <div className="centered">
            <p>{ this.state.counter }</p>
            <button onClick={this.handleClick}>+</button>
            <button onClick={this.handleClickMinus}>-</button>
        </div>
    );
}
}

Counter.defaultProps = {
    initial: 50,
    max: 100
    }


export default Counter;