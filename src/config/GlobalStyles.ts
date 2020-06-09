import { createGlobalStyle } from 'styled-components'
import BG from '../images/bg.png'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    background: #FF9878 url(${BG}) repeat top left;
  }

  body {
    background-color: #EAE7E1;
    user-select: none;
    border-left: 10px solid #362D2D;
    height: 100vh;
    padding: 75px;
    margin: 0;
    font-family: 'Roboto', sans-serif;
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
`

export { GlobalStyles }
