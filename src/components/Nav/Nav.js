import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = () => {
  return (
    <Header>
      <span>Topher Young</span>
      <span>Icon</span>
      <Hamburger />
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
    </Header>
  );
};

export default Nav;
