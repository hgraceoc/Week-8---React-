import React, { Fragment } from 'react';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Basket from "./Basket";
import BasketItem from "./BasketItem";
import Clicked from "./Clicked";
import Counter from "./Counter";
import StepCounter from "./StepCounter";

const Stuff = () => (
    <Fragment>
        <Header>Howdy</Header>
        <Paragraph>Life and stuff and stuff and life an that</Paragraph>
        <Square />
        <People />
        <Basket />
        <BasketItem />
        <Clicked />
        <Counter />
        <StepCounter />
  </Fragment>
);


export default Stuff;