import { createGlobalStyle } from 'styled-components'

import resetCSS from '../reset.scss'
import variables from '../variables.scss'

const GlobalStyles = createGlobalStyle`
  ${resetCSS}
  ${variables}
`
export default GlobalStyles
