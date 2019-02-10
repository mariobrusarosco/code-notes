import { generateBox } from '../utils'

const markup = `
	<div class='box'>
		<h2>Dynamic Code Splitting</h2>
		<button type='button'>Import a chunk</button>
	</div>
`

const insertChunckContent = () =>
  import('./just-a-chunk.js').then(data => {
    const { text } = data
    const p = document.createElement('p')
    p.textContent = text

    document.querySelector('.dynamic-code-splitting-support .box').appendChild(p)
  })

new Promise((resolve, reject) => {
  generateBox('dynamic-code-splitting-support', markup)
  resolve()
}).then(() => {
  const btn = document.querySelector('.dynamic-code-splitting-support button')
  btn.addEventListener('click', insertChunckContent)
})
