import Enzyme from 'enzyme'
import styled from 'styled-components'

declare global {
  const React: typeof React
  const shallow: typeof Enzyme.shallow
  const styled: typeof styled
  const APP: {}
}
