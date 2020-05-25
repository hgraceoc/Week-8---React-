import React from "react";



const People = ({ people }) => (
    <ul className="thePeople">
        {people.map((value, index) => (
            <li className="person" key={ index }>
                <p className="person-item">{ value }</p>
            </li>
        ))}
    </ul>
);



export default People;  

//in this case, people.map - people does not need to be in { braces } because it has already been destructed by passing it in as an initial parameter