import React, { Component } from "react";

class Clicked extends Component {
    constructor(props) {
        super(props);

        this.state = { clicked: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    render() {

        return (
            <p className="centered click_me" onClick={this.handleClick}> {this.state.clicked ? "Clicked!" : "Not Clicked" }
            </p>
        );
      }
    }

export default Clicked;