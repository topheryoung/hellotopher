import { createGlobalStyle } from 'styled-components'
import BG from '../images/bg.png'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    background: #FF9E80 url(${BG}) repeat top left;
  }

  body {
    background-color: #EAE7E1;
    border-left: 10px solid #362D2D;
    height: 100vh;
    padding: 75px 100px;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  ::selection {
    background-color: #FF9E80;
    color: #EAE7E1;
  }

  nav, a {
    font-family: 'Roboto Mono', monospace;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  *:focus {
    outline: 0;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    color: #362D2D;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 20px 0 0 0;
  }

  h2 {
    font-family: 'Roboto Mono', monospace;
    font-size: 21px;
    font-weight: normal;
    color: #786666;
    margin: 0;
  }

  h3 {
    font-family: 'Roboto Mono', monospace;
    color: #786666;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.5;
    font-size: 16;
    font-weight: 700;
    margin: 0;
  }

  p {
    max-width: 520px;
    line-height: 30px;
    color: #786666;
    font-size: 18px;
  }

  hr {
    width: 40px;
    border: 1px solid #FF4200;
    margin: 30px 0 20px;
  }

  .text-block {
    max-width: 520px;
    line-height: 30px;
  }
`

export { GlobalStyles }
