import { createGlobalStyle } from 'styled-components'
import './fonts.css'

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

body {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: calc((100vw - 320px) / (1920 - 320) * (22 - 14) + 14px);
  color: #ffffff;
  font-weight: 400;
  font-style: normal;
  background-color: #0b0b0a;
}
`