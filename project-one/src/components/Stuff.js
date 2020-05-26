import React from 'react';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Basket from "./Basket";
import BasketItem from "./BasketItem";
import Clicked from "./Clicked";

const Stuff = () => (
    <div>
        <Header>Howdy</Header>
        <Paragraph>Hello hello hello</Paragraph>
        <Square />
        <People />
        <Basket />
        <BasketItem />
        <Clicked />
  </div>
);

Basket.defaultProps = {
 items: [
    { name: "Coffee", price: 2.10 },
    { name: "Bananas", price: 3.50 },
    { name: "Milk", price: 250.65 },
    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
]

}

export default Stuff;