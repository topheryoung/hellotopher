import React, { ReactChildren, ReactElement } from 'react'
import styled from 'styled-components'

import { GlobalStyles } from '../config/GlobalStyles'

import Header from './header'

interface Props {
    children: ReactChildren | ReactElement
}

const Layout = ({ children }: Props) => {
  return(
    <>
      <GlobalStyles />
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
