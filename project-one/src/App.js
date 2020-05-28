import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import Stuff from "./components/Stuff";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Square from "./components/Square";
import People from "./components/People";
import Basket from "./components/Basket";
import Clicked from "./components/Clicked";
import Counter from "./components/Counter";
import StepCounter from "./components/StepCounter";
import Footer from "./components/Footer";
import Length from "./components/Forms/Length";
import PasswordStrength from "./components/Forms/PasswordStrength";
import TempConverter from "./components/Forms/TempConverter";
import List from "./components/Forms/List";

import Progress from "./components/Progress";
import Button from "./components/Button";
import CatchMeIfYouCan from "./components/CatchMeIfYouCan";

import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (
  <Router>
    <Fragment>  
      <Header>Howdy</Header>
      <Clicked></Clicked>
      

      <Route path="/">
      <Paragraph>Life and stuff and stuff and life an that</Paragraph>
      </Route>

      
      <Route exact path="/Square" component ={ Square }/>

      <Route exact path="/People" component ={ People }/>

      <Route exact path="/Basket" component ={ Basket }/>

      <Route exact path="/Counters" component ={ Counter }/>

      <Route exact path="/Counters" component ={ StepCounter }/>

      <Route exact path="/Length" component ={ Length }/>

      <Route exact path="/Password" component ={ PasswordStrength }/>

      <Route exact path="/TempConverter" component ={ TempConverter }/>

      <Route exact path="/Progress" component ={ Progress }/>

      <Route exact path="/CatchMe" component ={ CatchMeIfYouCan }/>

      <Route exact path="/List" component ={ List }/>

      <Stuff />

      <Footer />

    </Fragment>
  </Router>
);

export default App;
