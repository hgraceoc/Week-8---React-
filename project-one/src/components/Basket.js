import React from "react";
import BasketItem from "./BasketItem";

const Basket = ( { items }) => (
    <table className="table">
        <thead>
            <tr>
                <th>Name:</th>
                <th>Price:</th>
            </tr>
        </thead>
        <tbody>
            { items.map((item, index) => (
                <BasketItem key={ index } price={ item.price } name={ item.name }/>
            ))}
        </tbody>
    </table> 
    
);

Basket.defaultProps = {
    items: [
       { name: "Coffee", price: 2.10 },
       { name: "Bananas", price: 3.50 },
       { name: "Milk", price: 250.65 },
       { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
   ]
}


export default Basket;