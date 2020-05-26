import React, { Component } from "react";

class Header extends Component {
  render() {
    const { children } = this.props; 
    return (
      <header className="header">
          <h1>{ children }</h1>
      </header>
      );
  }
}

Header.defaultProps = {
    children: "text"
  }

export default Header;


