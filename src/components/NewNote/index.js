import { userState, useEffect } from 'react'
import CodeMirror from 'codemirror'


// Import Editor Style
import '../../../node_modules/codemirror/theme/dracula.css'
import '../../../node_modules/codemirror/lib/codemirror.css'


// Api Util
import codeNotesAPI from '../../api/code-notes'

const NewNote = () => {
  const handleSaveNote = () => {
    console.log('saving')

    codeNotesAPI.get()
  }

  useEffect(() => {
    const elemRef = document.querySelector('.new-note__editor')

    const myCodeMirror = CodeMirror(elemRef, {
      value: "const a = 'adsda'",
      mode:  "javascript",
      theme: 'dracula',
    });

    // console.log(myCodeMirror)
  })

  return (
    <div className="new-note">
      <div className="new-note__editor"></div>
      <button onClick={handleSaveNote}>Save</button>
    </div>
  )
}

export default NewNote
