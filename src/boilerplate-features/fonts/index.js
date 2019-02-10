import '../../assets/fonts/fonts.css'
import { generateBox } from '../utils'
import './font-support.css'

const markup = `
    <div class='box'>
        <h2>Font Support</h2>
        <p class="font-bold">This text must have a bold Quicksand font</p>
        <p class="font-lighter">This text must have a lighter Quicksand font</p>
    </div>
`
generateBox('fonts-support', markup)
