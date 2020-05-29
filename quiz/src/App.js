import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Multiplier from "./components/Multiplier";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Fragment>
      <Header>Alright Alright Alright</Header>
      
      <Route exact path="/Multiplier" component ={ Multiplier }/>

      <Route path="/">
        
      </Route>
      <Footer></Footer>
    </Fragment>
  </Router>
);
  

export default App;
