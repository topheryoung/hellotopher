import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ isOpen }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
