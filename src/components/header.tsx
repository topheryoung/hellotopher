import React from 'react'
import styled from 'styled-components'

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
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    li {
       margin: 0 15px;
    }
  }
`

const Header = () => {
  return (
    <TopBar>
      <img src={Logo} alt="Topher Young logo"/>
      <Navigation>
        <ul>
          <li>Bio</li>
          <li>Portfolio</li>
        </ul>
      </Navigation>
    </TopBar>
  )
}

export default Header