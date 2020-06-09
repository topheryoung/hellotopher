import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import Logo from '../images/ty_logo.svg'

const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 40px;
  }
`

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
       margin: 0 20px;
    }
    a {
      font-size: 14px;
      color: #362D2D;
      text-decoration: none;
      position: relative;
      &:hover {
        color: #FF4200;
        transition: color 150ms ease-in;
        &:after {
          bottom: -10px;
          opacity: 1;
          transition: all 200ms ease-in;
        }
      }
      &:after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: calc(50% - 2.5px);
        height: 5px;
        width: 5px;
        border-radius: 50%;
        background: #FF4200;
        opacity: 0;
        transition: all 200ms ease-in;
      }
    }
  }
`

const Header = () => {
  return (
    <TopBar>
      <img src={Logo} alt="Topher Young logo"/>
      <Navigation>
        <ul>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </Navigation>
    </TopBar>
  )
}

export default Header