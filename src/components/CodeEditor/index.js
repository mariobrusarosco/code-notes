// Vendors
import { path } from 'ramda'
import { useState, useRef } from 'react'
import CodeMirror from 'codemirror/lib/codemirror.js'

const CodeEditor = () => {
  const editorRef = useRef()
  const [mode, setMode] = useState('')

  const changeMode = event => {
    console.log('changing mode')
    const selectedMode = path(['target', 'value'], event)

    setMode(selectedMode)
  }

  const initialize = () => {
    const editor = new CodeMirror(editorRef.current, {
      value: `const a = 'red'; .test { color: red;}`,
      mode,
      theme: 'darcula'
    })

    console.log(editor)
  }

  console.log(CodeMirror)

  return (
    <div className="editor">
      <h2 className="">
        Create a new <strong>Note</strong>
      </h2>

      <select name="mode-selector" id="mode-selector" onChange={changeMode} value={mode}>
        <option value="">Select a mode</option>
        <option value="javascript">javascript</option>
        <option value="css">css</option>
      </select>

      {mode ? <button onClick={initialize}>Create</button> : null}

      {/* { true ? ( */}
      <div className="editor__main" ref={editorRef} />
      {/* ): null} */}
    </div>
  )
}

export default CodeEditor
