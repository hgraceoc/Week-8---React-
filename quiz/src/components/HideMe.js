import React, { Component } from "react";
import { render } from "@testing-library/react";

class HideMe extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState({ clicked: true });
    }
    
    render() {
        const { children } = this.props;

        return (
            <div className="centered">
                <h2 className="centered" 
                        onClick={ this.handleClick }>Hide Me</h2>
                            {this.state.clicked ? 
                            <p style={{display:"none"}}>{ children }</p> :
                            <p>{ children }</p>}
                </div>
            
        );
  }
}


HideMe.defaultProps = {
    children: "Hello Yellow"
    }

export default HideMe;