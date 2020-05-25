//JAVASCRIPT RECAP

//COMMON DATA TYPE 
//boolean - comonly used to store yes/no or on/off values
//array
let numbers = [1, 2, 3, 4]

//COMMON METHODS
//map - new array, same function on each item in the array and returns a new array 
numbers.map(val => val * 2)
//filter - new array with filtered results based on the conditions you set 
numbers.filter(val => val %2 === 0 )
//reduce - returns a single value 
numbers.reduce((acc, val) => acc + val, [])

//OBJECTS 
//each key value pair is an object property 
let dog = {
    name'Retro', age: 12, faveFood: ['biscuits, banana'], isCute: true}
}
//declaring an object

dog 

dog.isCute = true

const { name, age, faveFood, isCute } = dog

//FUNCTIONS
const sum = (x, y) => x * y
//set function

sum(2, 3)
//prints 6

//CLASSES
const y = class {}

class Cat {
    constructor(name, colour) {
        //setting properties to pass values in when creating new instances of the class
        this.legs = 4;
        //setting default values
        this.name = name;
        this.colour = colour;
    }
    meow() {
        return 'mewo purr';
    }
}
const cathead = new Cat('cathead', 'yellow' );
//setting a new instance of the class
cathead.meow()
//prints 'mewo purr'



//REACT

//camel case is used rather than border_bottom -> borderBottom
//inline styling in react


const App = () => {
    let sentence = "Hiya";
    return <h1 className="alert alert-primary" style={{color: red}}></h1>
}


//Example of creating new component


//src -> componentents
//Headers.js

import React from "react";

const Header = () => <h1 className="header">Hello World</h1>;

export default Header;

//then in App.js
import Header from "./components/Header";

const App = () => {
    return <Header />;
};


//Content.js
const Content = () => {
    <main>
        <p className="lead">Great app i reckon</p>
        <img className="img" alt="a picture" src="http/" />
    </main>
}

export default Content;


import Header from "./components/Header";
import Content from "./components/Content"

const App = () => {
    return <Header />;
    return <Content />;
};


//adding additional js functionality to components
//Content.js
const Content = () => {
    let valuation = 45000;
    let formattedValue = valuation.toLocaleString("en-GB", {
        style: "currency",
        currency: "USD"
    });
    <main>
        <p className="lead">Great app i reckon</p>
        <img className="img" alt="a picture" src="http/" />
        <p>Our company is worth {formattedValue}</p>
    </main>
}
