import React from 'react'
import styled from 'styled-components'

import Linkedin from '../images/linkedin.svg'
import Dribbble from '../images/dribbble.svg'
import Github from '../images/github.svg'

const Social = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  a {
    margin-right: 20px;
    &:hover {
      img {
        transition: opacity 150ms ease-in;
        opacity: 0.5;
      }
    }
  }
  img {
    height: 20px;
    opacity: 0.2;
  }
`

const SocialMedia = () => {
  return (
    <Social>
      <a href="https://github.com/topheryoung" target="_blank">
        <img src={Github} alt="Github" />
      </a>
      <a href="https://dribbble.com/topheryoung" target="_blank">
        <img src={Dribbble} alt="Dribbble" />
      </a>
      <a href="https://www.linkedin.com/in/ctopheryoung/" target="_blank">
        <img src={Linkedin} alt="Linkedin" />
      </a>
    </Social>
  )
}

export default SocialMedia
