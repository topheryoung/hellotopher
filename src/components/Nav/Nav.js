import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";
import Icon from "../../images/topher_icon.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Nav = () => {
  return (
    <Header>
      <Title>Topher Young</Title>
      <Link to="/">
        <img src={Icon} alt="Topher Young" />
      </Link>
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
