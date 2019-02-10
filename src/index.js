// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

document.body.insertAdjacentHTML(
  'afterbegin',
  `Starting Webpack: ${process.env.NODE_ENV}..............`
)

// CSS support
import 'css'

// Image support
import 'images'

// Font support
import 'fonts'

// Hot Module Replacement support
import 'hmr'

//  Tree Shaking support
import { treeShakingExample } from 'utils/tree-shaking.example'
treeShakingExample()

// React support
import 'react-feature'

// Code Splitting

/* Importing lodash in this entry point to check
 *  if Static Code Splitting optimization is working!!!
 */
import _ from 'lodash'
console.log(_.join(['main', 'entry', 'point, made with lodash!!!!!!']))

import 'boilerplate-features/dynamic-code-splitting'

// Resolving absolute paths
import 'boilerplate-features/resolving-paths'

// Babel Support
import 'boilerplate-features/babel'
