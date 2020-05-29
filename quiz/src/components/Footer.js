import React from "react";

import { Link } from "react-router-dom";

const Footer = () => (
    <ul className="list-group centered">

      <li className="list-group-item">
        <Link to="/">Home</Link>
      </li>

      <li className="list-group-item">
        <Link to="/multiplier">Multiplier</Link>
      </li>

      <li className="list-group-item">
        <Link to="/even-clicks">Even Clicks</Link>
      </li>

      <li className="list-group-item">
        <Link to="/count-by">Count By</Link>
      </li>

      </ul> );

export default Footer;