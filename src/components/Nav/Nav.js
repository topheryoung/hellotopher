import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";
import Icon from "../../images/topher_icon.svg";

const Header = styled.header`
  position: fixed;
  top: 24px;
  right: 24px;
  left: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// const Title = styled.span`
//   font-family: ${({ theme }) => theme.fonts.sans};
//   text-transform: uppercase;
//   letter-spacing: 2px;
// `;

const Nav = () => {
  return (
    <Header>
      <Link to="/">
        <img src={Icon} alt="Topher Young" />
      </Link>
      <nav>
        <Link to="/work">Experience</Link>
        <Link to="/bio">Bio</Link>
      </nav>
    </Header>
  );
};

export default Nav;
