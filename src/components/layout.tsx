import React, { ReactChildren, ReactElement } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import { GlobalStyles } from '../config/GlobalStyles'
import Head from './head'
import Header from './header'

interface Props {
    children: ReactChildren | ReactElement
    title?: string
    desc?: string
    url?: string
}

const Content = styled.main`
  margin-top: 100px;
`

const Layout = ({ children, title, desc, url}: Props) => {
  const meta = {
    title: title ? title : "Topher Young - Software Engineer",
    description: desc ? desc : "Portfolio for Topher Young. A software engineer and designer based in Portland, OR",
    siteUrl: url ? url : "http://www.hellotopher.com",
  }

  return (
    <>
      <Head metadata={meta} />
      <GlobalStyles />
      <Header />
      <Content>
        {children}
      </Content>
    </>
  )
}

export default Layout
