import { generateBox } from '../utils'
import string from 'resolving-paths/simple.string.js'

const markup = `
  <div class="box resolving-paths">
    <h2>Resolving Paths</h2>
    <p>The paragraph below was loaded using <strong>import string from 'boilerplate-features/resolving-paths/simple.string'</strong></p>
    <p>${string}</p>
  </div>
`
generateBox('resolving-support', markup)
