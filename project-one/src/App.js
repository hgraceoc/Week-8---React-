import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Square from "./components/Square";

const App = () => (
  <div>
  <Header />
  <Paragraph />
  <Square />
  </div>
);

Header.defaultProps = {
  text: "Howdy"
}

Paragraph.defaultProps = {
  paragraph: "What a nice day for an ice cream and ice skating"
  }


export default App;
