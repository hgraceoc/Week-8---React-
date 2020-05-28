import React, { Component } from "react";

import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

class Progress extends Component {
    constructor(props){
        super(props);

        this.state = {
            progress: 0
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        let current = this.state.progress;

        if (this.state.progress <= 100) {

        this.setState({ progress: current + 10});
        }
    }

    render() {


    return (
        <>
        <ProgressBar now={this.state.progress} />
        <Button
        variant="info"
        onClick={ this.handleClick }>More!
        </Button>
        </>
    );
    }

}

Progress.defaultProps = {
    label: "10%"
    }


export default Progress; 