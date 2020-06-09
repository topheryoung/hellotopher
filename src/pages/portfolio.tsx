import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

import { client_content } from '../content/clients'

interface ClientProps {
  logo: string
  name: string
  desc: string
  url: string
}

const ClientList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const ClientContainer = styled.div`
  margin: 50px 90px 0 0;
  img {
    height: 100%;
    max-height: 30px;
    width: auto;
    max-width: 125px;
  }
  p {
    max-width: 300px;
    font-size: 14px;
    line-height: 20px;
  }
  a {
    font-family: 'Roboto Mono', monospace;
    color: #362D2D;
    font-size: 14px;
    text-decoration: none;
    &:hover {
      color: #FF4200;
      transition: color 150ms ease-in;
    }
  }
`

const ClientObj = ({logo, name, desc, url}: ClientProps) => {
  return (
    <ClientContainer>
      <img src={logo} alt={name} />
      <p>{desc}</p>
      <a href={url} target="_blank">Website</a>
    </ClientContainer>
  )
}


const Bio = () => {
  return (
    <Layout> 
      <h3>Selected Work</h3>
      <h1>Making kickass things with kickass people</h1>
      <p>
        Over the last 10 years, I have had the privaledge of working with and for these awesome companies. For more detail, view my <a href="#">resume</a>.
      </p>
      <hr />
      <ClientList>
        {client_content.map(client => ClientObj(client))}
      </ClientList>
    </Layout>
  )
}

export default Bio
