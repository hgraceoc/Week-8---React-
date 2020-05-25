import React from "react";



const People = ({ people }) => (
    people ? (
    <ul className="thePeople">
        {people.map((value, index) => (
            <li className="person" key={ index }>
                <p className="person-item">{ value }</p>
            </li>
        ))}
    </ul>
    ) : <p>Nothing to see here</p>
    
);

People.defaultProps = {
    people: ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]
   }


export default People;  

//in this case, people.map - people does not need to be in { braces } because it has already been destructed by passing it in as an initial parameter