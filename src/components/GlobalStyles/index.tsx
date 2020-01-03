import { createGlobalStyle, css } from 'styled-components'

import resetCSS from '../../styles/reset.css'

// const complexMixin = css`
//   * {
//     color: ${true ? 'white' : 'black'};
//   }
// `
const GlobalStyles = createGlobalStyle`
  ${resetCSS}
`
export default GlobalStyles
