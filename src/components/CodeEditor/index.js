import { path } from 'ramda'
import { useState } from 'react'

const CodeEditor = () => {
  const [mode, setMode] = useState('javascript')

  const changeMode = event => {
    console.log('changing mode')
    const selectedMode = path(['target', 'value'], event)

    setMode(selectedMode)
  }

  return (
    <div className="editor">
      <h2 className="">
        Create a new <strong>Note</strong>
      </h2>

      <select name="mode-selector" id="mode-selector" onChange={changeMode} value={mode}>
        <option value="javascript">javascript</option>
        <option value="css">css</option>
      </select>
    </div>
  )
}

export default CodeEditor
