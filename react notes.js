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

const App = () => (
    <Header />
  );


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

//Funding.js - to be used within Content.js
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

//Pagination.js
let numbers = [1, 2, 3, 4, 5];

const Pagination = () => {
    <ul className="pagination">
        {numbers.map((value, index) => (
            <li className="page-item" key={index}>
                <a className="page-link" href={"/" + value}>
                    {value}
                </a>            
            </li>
        ))}
    </ul>
};

//using { curlies } to pass in jsx 
//this would generate the amount of li's passed into the numbers array, this applies even as the array changes.
//It uses the data to dynamically apply html 

//components with props

const props = {
    alt: "A horse in a hat"
    src: "http://hathorse"
}

const Figure = ({alt, src}) => {
}
<figure className="card">
    <img></img>
</figure>


import Figure from "./components/Figure";

const App = () => {
    return (
    <>
    <Header />;
    <Figure alt="A cat" src="http.." />
    <Figure alt="A hat" src="http.." />
    </>
    )
};

//if a prop isnt passed in, we can leave it out of rendering 
const Header = ({ title, subTitle }) => (
    <header>
        <h1 className="alert alert-primary">{title}</h1>
        {subTitle ? <h3>{subTitle}</h3> : null}
    </header>
);

//default props
//after componenet declaration
//before exports

Figure.defaultProps = {
    alt: "Your caption here",
    src: "http://placeholder.com/350x350px"
}

//header component which can accept text prop
import React from "react";

const Header = ({ text }) => (
<header className="header">
    <h1>{ text }</h1>
</header>
);

export default Header;

//App.js
Header.defaultProps = {
    text: "Howdy"
  }