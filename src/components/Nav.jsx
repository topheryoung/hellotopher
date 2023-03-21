import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as TYlogo } from "../assets/ty.svg";
import Light from "../assets/light.svg";
import Dark from "../assets/dark.svg";

const NavContainer = styled.header`
  padding: 36px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  svg {
    .iconbg {
      fill: ${({ theme }) => theme.colors.primary};
    }
    .icontext {
      fill: ${({ theme }) => theme.backgrounds.body};
    }
  }
`;

const Utility = styled.div`
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  margin-right: 24px;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      margin: 0 20px;
    }
    a {
      font-size: 16px;
      font-weight: ${({ theme }) => theme.fonts.weight.normal};
      color: ${({ theme }) => theme.font.nav};
      position: relative;
      text-decoration: none;
      display: inline-block;
      z-index: 3;
      &:before {
        content: "";
        width: 0;
        position: absolute;
        left: 0;
        z-index: -1;
        transition-timing-function: cubic-bezier(0.8, 0.09, 1, 0.44);
        transition-delay: 200ms;
        transition: all 300ms cubic-bezier(1, 0, 0, 1) 0ms;
        background: ${({ theme }) => theme.colors.primary};
        height: 2px;
        top: 20px;
      }
      &:hover {
        &:before {
          content: "";
          width: 100%;
          position: absolute;
          left: 0;
          z-index: -1;
          height: 2px;
          top: 20px;
        }
      }
      > h6 {
        z-index: 4;
      }
      &.active {
        &:before {
          content: "";
          width: 100%;
          position: absolute;
          left: 0;
          z-index: -1;
          height: 2px;
          top: 20px;
        }
      }
    }
  }
`;

const ThemeButton = styled.button`
  background: transparent;
  border-radius: 50%;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.backgrounds.body};
  }
  img {
    height: 18px;
    width: 18px;
  }
`;

const Nav = ({ toggleTheme, isDarkMode }) => {
  return (
    <NavContainer>
      <Link to="/">
        <Icon>
          <TYlogo />
        </Icon>
      </Link>
      <Utility>
        <Navigation>
          <ul>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Work
              </NavLink>
            </li>
          </ul>
        </Navigation>
        <ThemeButton onClick={toggleTheme}>
          {isDarkMode ? (
            <img src={Dark} alt="Enable Light Mode" />
          ) : (
            <img src={Light} alt="Enable Dark Mode" />
          )}
        </ThemeButton>
      </Utility>
    </NavContainer>
  );
};

export default Nav;
