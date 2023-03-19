import { Link } from "react-router-dom";
import styled from "styled-components";
import TYlogo from "../assets/ty.svg";
import Light from "../assets/light.svg";
import Dark from "../assets/dark.svg";

const NavContainer = styled.header`
  padding: 36px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.svg`
  .iconbg {
    fill: ${({ theme }) => theme.colors.primary};
  }
  .icontext {
    fill: ${({ theme }) => theme.backgrounds.body};
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
      color: ${({ theme }) => theme.font.p};
      text-decoration: none;
      position: relative;
      text-decoration: none;
      display: inline-block;
      z-index: 3;
      &:before {
        content: "";
        width: 0;
        position: absolute;
        left: -2px;
        z-index: -1;
        transition-timing-function: cubic-bezier(0.8, 0.09, 1, 0.44);
        transition-delay: 200ms;
        transition: all 300ms cubic-bezier(1, 0, 0, 1) 0ms;
        background: ${({ theme }) => theme.colors.primary};
        height: 6px;
        top: 8px;
        opacity: 0.6;
      }
      &:hover {
        &:before {
          content: "";
          width: 100%;
          position: absolute;
          left: -2px;
          z-index: -1;
          height: 6px;
          top: 8px;
        }
      }
      > h6 {
        z-index: 4;
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
        <Icon
          width="40"
          height="40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#icon)">
            <path d="M40 0H0v40h40V0Z" className="iconbg" fill="#DB8454" />
            <path
              className="icontext"
              d="M21.46 11.92V8.19h-2.92v3.73H8.33v2.93h10.21v3.73h2.92v-3.73h10.21v-2.93H21.46ZM28.75 25h-17.5v-3.73H8.33v5a1.8 1.8 0 0 0 1.79 1.8h8.42v3.73h2.92v-3.72h8.42a1.8 1.8 0 0 0 1.79-1.8v-5h-2.92V25Z"
              fill="#F9F9FC"
            />
          </g>
          <defs>
            <clipPath id="icon">
              <path fill="#fff" d="M0 0h40v40H0z" />
            </clipPath>
          </defs>
        </Icon>
      </Link>
      <Utility>
        <Navigation>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
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
