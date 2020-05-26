import React, { Component } from "react";

class StepCounter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: 0 };

        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
    }

    handleClickUp() {
        let currentCounter = this.state.counter;

        if (this.state.counter < this.props.max ) {
            this.setState({ counter: currentCounter + this.props.step });
        }
    }

    handleClickDown() {
        let currentCounter = this.state.counter;

        if (this.state.counter > 0) {
            this.setState({ counter: currentCounter - this.props.step });
        }
    }

    render() {
        const { step, max} = this.props;
        const { counter } = this.state;
    return (
        <div>
            <p>{ this.state.counter }</p>
            <button onClick={this.handleClickUp}>+</button>
            <button onClick={this.handleClickDown}>-</button>
        </div>
    );
}
}

StepCounter.defaultProps = {
    max: 100,
    step: 5
    }


export default StepCounter;