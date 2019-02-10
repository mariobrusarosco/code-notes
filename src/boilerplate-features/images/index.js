import '../css/css-support.css'
import Heisenberg from '../images/breaking-bad.jpg'
import { generateBox } from '../utils'

const markup = `
  <div class="box image-via-js">
    <h2>Image Support</h2>
    <h3>This Image was added via JS's 'import'</h3>
    <img id="image-via-js" src="${Heisenberg}" alt="Image Via JS" />
  </div>
  <div class="box image-via-css">
    <h3>This Image was added via CSS's 'url()'</h2>
    <div id="image-via-css" class="test-image-holder"></div>
  </div>
`
generateBox('images-support', markup)
