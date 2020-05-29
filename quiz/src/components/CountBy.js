import React, { Component } from "react";
import { render } from "@testing-library/react";

class CountBy extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            step: 0 
        };

        this.handleClick = this.handleClick.bind(this);

    }


    handleClick() {
        let currentStep = this.state.step;

        this.setState({ step: currentStep + this.props.step });
    }
    
    render() {

    return (
        <h2 className="centered" onClick={ this.handleClick }>{ this.state.step }</h2>
    );
  }
}


CountBy.defaultProps = {
    step: 5
    }

export default CountBy;
        
