import React from "react";

const Paragraph = ({ paragraph }) => (
<p>{paragraph ? <p>{ paragraph }</p> : "Hello, world"} </p>
);

export default Paragraph;