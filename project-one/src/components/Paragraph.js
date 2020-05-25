import React from "react";

const Paragraph = ({ children }) => (
<p>{children ? <p>{ children }</p> : "Hello, world"} </p>
);

Paragraph.defaultProps = {
    children: "What a nice day for an ice cream and ice skating"
    }

export default Paragraph;