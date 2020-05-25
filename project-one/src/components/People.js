import React from "react";

let people = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];


const People = () => (
    <ul class="thePeople">
        {people.map((value, index) => (
            <li className="person" key={ index }>
                <p className="person-item">{ value }</p>
            </li>
        ))}
    </ul>
);



export default People;  