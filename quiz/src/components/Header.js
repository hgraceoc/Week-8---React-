import React, { Component } from "react";
import Container from 'react-bootstrap/Container'

class Header extends Component {
  render() {
    const { children } = this.props; 
    return (
        <Container fluid>
        <header className="centered">
            <h1>{ children }</h1>
            <h4>This be the Friday quiz</h4>
        </header>
      </Container>
      );
  }
}

Header.defaultProps = {
    children: "text"
  }

export default Header;