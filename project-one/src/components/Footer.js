import React from "react";

import { Link } from "react-router-dom";

const Footer = () => (
  <ul className="list-group">
    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/">Home</Link>
    </li>

    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/Square">Square</Link>
    </li>

    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/People">People</Link>
    </li>

    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/Basket">Basket</Link>
    </li>

    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/Counters">Counters</Link>
    </li>

    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/Length">Input Length</Link>
    </li>

    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/Password">Password</Link>
    </li>

    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/TempConverter">Temp Converter</Link>
    </li>

    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/List">List</Link>
    </li>

    <li className="list-group-item">
      { /* use Link instead of <a> */ }
      <Link to="/CatchMe">Catch Me</Link>
    </li>

</ul> );


export default Footer;