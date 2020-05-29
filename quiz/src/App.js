import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Multiplier from "./components/Multiplier";
import MultiplierBasic from "./components/MultiplierBasic";
import EvenClicks from "./components/EvenClicks";
import CountBy from "./components/CountBy";
import HideMe from "./components/HideMe";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Fragment>
      <Header>Alright Alright Alright</Header>
      
      <Route exact path="/multiplier" component ={ Multiplier }/>
      <Route exact path="/multiplier" component ={ MultiplierBasic }/>
      <Route exact path="/even-clicks" component ={ EvenClicks }/>
      <Route exact path="/count-by" component ={ CountBy }/>
      <Route exact path="/hide-me" component ={ HideMe }/>

      <Route path="/">
        
      </Route>
      <Footer></Footer>
    </Fragment>
  </Router>
);
  

export default App;
