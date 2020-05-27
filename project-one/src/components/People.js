import React, { Component } from "react";


class People extends Component {
    handleClick() {
    console.log("hello, world")
    }
    render() {
    const { people } = this.props;
        return people ? (
        
        <ul class="people" onClick={this.handleClick}className="thePeople">
            <h2>The People</h2>
            {people.map((value, index) => (
                <li className="person" key={ index }>
                    <p className="person-item">{ value }</p>
                </li>
            ))}
        </ul> ) : <p>Nothing to see here</p>
    ;
  }
}

People.defaultProps = {
    people: ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]
   }


export default People;  

//in this case, people.map - people does not need to be in { braces } because it has already been destructed by passing it in as an initial parameter