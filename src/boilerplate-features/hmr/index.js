import { generateBox } from '../utils'

const markup = `
    <div class='box'>
        <h2>Hot Module Replacement Support</h2>
        <h3>This is the original text</h3>
    </div>
`
generateBox('hrm-support', markup)

new Promise((resolve, reject) => {
  setTimeout(() => {
    const newMarkup = `
            <div class='box'>
                <h2>Hot Module Replacement Support</h2>
                <h3>This is the new text</h3>
            </div>
        `
    generateBox('hrm-support', newMarkup)
    resolve()
  }, 2000)
}).then(() => console.log('hrm text was called!'))
