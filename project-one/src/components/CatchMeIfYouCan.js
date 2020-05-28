import React, { Component } from "react";

import Button from 'react-bootstrap/Button'

class CatchMeIfYouCan extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        let newPosition = this.state.location;

        this.setState({ location: newPosition +  this.props.jump,
      });
        
    }

    render() {

        return (
            <Button
                style = {{position: "absolute", top: this.state.location}}
                variant="info"
                onClick={ this.handleClick }>Tehe!
            </Button>
        );
    }
}

CatchMeIfYouCan.defaultProps = {
    jump: 100
}



export default CatchMeIfYouCan; 