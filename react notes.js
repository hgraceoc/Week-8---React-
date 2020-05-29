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

//to use children as an input

//Header.js
import React from "react";

const Header = ({ children }) => (
<header className="header">
    <h1>{ children }</h1>
</header>
);
//use children in place of text input

Header.defaultProps = {
    children: "Howdy"
  }
//move the default props to the component file, rather than App.js file

export default Header;

//App.js
<Header>Howdy</Header>
//children passed in between the header tags 

//creating a fragment 
//App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stuff from "./components/Stuff";

const App = () => (
  <Stuff />
);

export default App;
//App.js now only links to one file (Stuff.js)

//Stuff.js
import React from 'react';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = () => (
    <div>
        <Header>Howdy</Header>
        <Paragraph>Hello hello hello</Paragraph>
        <Square />
        <People />
  </div>
);

export default Stuff;


//EVENTS

//stateless component = functional component 

//statedriven compoments = class based components

onClick //syntax for event listener

//Header.js
const Header = ({ subTitle, children }) => (
    <header onClick={() => console.log("hi")}>
        <h1 className="alert alert-primary">{children}</h1>
        {subTitle ? <h3>{subTitle}</h3> : null}
    </header>
);

//App.js - alternative implemetation
<Header onClick={() =>console.log("hi")}></Header>



//Header.js
import React, { Component } from "react"; 

class Header extends Component {
    
render() {
    const { subTitle, children } = this.props; //destructuring, for props
    return (
        <header onClick={() => console.log("hi")}>
            <h1>{children}</h1>
        </header>
    );
  }
}

//functionality moved into a method, transforming a functional component into a class based component
import React, { Component } from "react"; 

class Header extends Component {
 //now that it is a class, we can use methods (handleClick)
 handleClick() {
    console.log("hi")
 }    
render() {
    const { subTitle, children } = this.props; //destructuring, for props
    return (
        <header onClick={this.handleCLick}>
            <h1>{children}</h1>
        </header>
    );
  }
}

//State

//react recognises the concept of state, and the concept of props

import React, { Component } from "react"; 

class Header extends Component {
    constructor(props) {
        super(props);
        //passing in props into our constructor, to have access to this.props
        this.state = { counter: 0 };
        //for any data that you want to store, set the state
    }
 
 handleClick() {
    let currentCounter = this.state.counter;
    //this loses its meaning in the method, which calls for binding within the structure (see below)

    this.setState({ counter: currentCounter + 1 });
 }   

render() {
    const { subTitle, children } = this.props; //destructuring, for props
    const { counter } = this.state; //destructuring to access counter - otherwise would locate with - this.state.counter 
    return (
        <header onClick={this.handleCLick}>
            <h1>{children}</h1>
        </header>
    );
  }
}


//method binding
import React, { Component } from "react"; 

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = { counter: 0 };
        
        this.handleClick = this.handleClick.bind(this);
        //binding
        //this would not have to occur if you wrote methods as arrow functions - however this would result in multiple instances of the method
        // handleClick() => {
        //     let currentCounter = this.state.counter;
        
        //     this.setState({ counter: currentCounter + 1 });
        //  }   
    }
 
 handleClick() {
    let currentCounter = this.state.counter;

    this.setState({ counter: currentCounter + 1 });
 }   

render() {
    const { subTitle, children } = this.props;
    const { counter } = this.state; 
    return (
        <header onClick={this.handleCLick}>
            <h1>{children}</h1>
        </header>
    );
  }
}


//FORMS

import React, { Component} from "react";

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "Hello world" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        return (
            <form className="form mb-4">
                <input value={this.state.input} onChange={(e) => this.handleChange(e)} 
                className="form-control" />
                <p>Password Length: {this.state.input.length}</p>
            </form>
            //passing in (e) as an event - an object that exists in the dom
        );
    }

}

//important to access the event to see what the user has typed
export default Input;

import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //event not a key word, but is convention (or e)
        //event.currentTarget - selects the html element, similar to query selector in DOM 
        this.setState({
            input: event.currentTarget.value
        });
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    value={ this.state.input } 
                    onChange={ this.handleChange }>
                </input>
            </form>

            //onChange - listening for an event 
        )
    }
}

export default Form;





//PRE BUILT COMPONENTS

//react bootstrap
//add css style link to index.html
//import component 

//Button.js
import React, { Component } from "react";

import Button from 'react-bootstrap/Button'

class Progress extends Component {
    constructor(props){
        super(props);
    };

render() {

return (
    <Button
        variant="info">Hi
    </Button>
);
}

}

export default Button; 





//DEPLOYMENT

//npm install gh-pages

// in package.json
//"homepage": "https://hgraceoc.github.io/<repo>"

//scripts
//"deploy": "hg-pages -d build"

//in App.js
//change import from Browser Router to Hash Router

//TERMINAL