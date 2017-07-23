import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  body {
    margin: 0;
  }
  #__next {
    overflow: hidden;
  }
`
