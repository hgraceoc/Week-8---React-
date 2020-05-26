import React, { Component } from "react";

class Paragraph extends Component {
    render() {
    const { children } = this.props;
    return (
        <p>{children ? <p>{ children }</p> : "Hello, world"} </p>
        );
      }
    }

Paragraph.defaultProps = {
    children: "What a nice day for an ice cream and ice skating"
    }

export default Paragraph;