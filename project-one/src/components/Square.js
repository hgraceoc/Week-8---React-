import React from "react";

const Square = ({ colour }) => (
    <div className="square" 
        style={{
            backgroundColor: colour, 
            width: '100px', 
            height: '100px'}}>
    </div>
);

export default Square;  