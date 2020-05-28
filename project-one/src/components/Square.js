import React, { Component } from "react";


class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            green: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ green: !this.state.green });
    }

    render() {
        let colour = this.state.green ? "green" : this.props.colour;
            
            return (
                <div className="colour_square"
                    onClick={ this.handleClick}
                    style={{
                        height: 100,
                        width: 100,
                        background: colour,
                    }}>
                </div>   
            );
    }
}

Square.defaultProps = {
    colour: "pink" 
  }

export default Square;  