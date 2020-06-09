import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SocialMedai from '../components/social'
import SocialMedia from '../components/social'

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


const Bio = () => {
  return (
    <Layout> 
      <h3>About me</h3>
      <h1>Rockin' this thing since '88</h1>
      <p>
        First off, Topher is short for Christopher. I currently reside in beautiful, damp Portland, OR. In my freetime, I am a multi-instrumentalist musician, soccer fanatic, beer connoisseur, and nature freak.
      </p>
      <p>
        I am currently taking on contracting work so if you are interested in making magic together, contact me at <a href="mailto:topher@hellotopher.com">topher@hellotopher.com</a>.
      </p>
      <hr />
      <a href="#" target="_blank">View my resume</a>
      <SocialMedia />
    </Layout>
  )
}

export default Bio