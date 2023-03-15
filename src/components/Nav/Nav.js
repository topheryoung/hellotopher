import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <span>Topher Young</span>
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
    </header>
  );
};

export default Nav;
