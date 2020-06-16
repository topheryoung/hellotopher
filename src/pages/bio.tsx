import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SocialMedia from '../components/social'
import Topher from '../images/topher.jpg'

const Flex = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`

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

const Profile = styled.div`
  height: 250px;
  width: auto;
  position: relative;
  margin-bottom: 50px; 
  img {
    height: 100%;
    width: auto;
  }
  &:after {
    content: '';
    position: absolute;
    border: 1px solid #FF4200;
    top: 15px;
    left: 15px;
    height: 100%;
    width: 100%;
  }
  @media only screen and (min-width: 769px) {
    margin-bottom: 0;
    height: 400px;
  }
`


const Bio = () => {
  return (
    <Layout> 
      <Flex>
        <div>
          <h3>About me</h3>
          <h1>Rockin' this thing since '88</h1>
          <p>
            Hi, I'm Topher (short for Christopher). I currently reside in beautiful, damp Portland, OR. In my freetime, I am a multi-instrumentalist musician, soccer fanatic, beer connoisseur, and nature freak.
          </p>
          <p>
            I am currently taking on contracting work so if you are interested in making something awesome together, contact me at <a href="mailto:topher@hellotopher.com">topher@hellotopher.com</a>.
          </p>
          <hr />
          <a href="/assets/topherYoungResume.pdf" target="_blank">View my resume</a>
          <SocialMedia />
        </div>
        <Profile>
          <img src={Topher} alt="Topher Young" />
        </Profile>
      </Flex>
    </Layout>
  )
}

export default Bio