import React from 'react'

import Layout from '../components/layout'
import SocialMedia from '../components/social'

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
      <SocialMedia />
    </Layout>
  )
}

export default Hello
