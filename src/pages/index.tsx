import React from 'react'
import styled from 'styled-components'

import { GlobalStyles } from '../config/GlobalStyles'
import Layout from '../components/layout'
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


const Hello = () => {
  return (
    <Layout> 
      <h3>Introduction</h3>
      <h1>Topher Young</h1>
      <h2>Software Engineer + Designer</h2>
      <p>
        Hello there, my name is Topher Young and I am a software engineer & UX designer based in Portland, OR who specializes in creating highly usable, unique, and captivating interactive web/native applications and products.
      </p>
      <hr />
      <Social>
        <a href="">
          <img src={Github} alt="Github" />
        </a>
        <a href="">
          <img src={Dribbble} alt="Dribbble" />
        </a>
        <a href="">
          <img src={Linkedin} alt="Linkedin" />
        </a>
      </Social>
    </Layout>
  )
}

export default Hello