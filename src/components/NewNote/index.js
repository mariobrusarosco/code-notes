import { useState, useEffect } from 'react'


// Api Util
import codeNotesAPI from '../../api/code-notes'

const NewNote = () => {
  const handleSaveNote = () => {
    console.log('saving')
  }

  useEffect(() => {
    const elemRef = document.querySelector('.new-note__editor')

    const myCodeMirror = CodeMirror(elemRef, {
      value: "const a = 'adsda'",
      mode:  "javascript",
      theme: 'darcula',
    });

  })

  return (
    <div className="new-note">
      <div className="new-note__editor"></div>
      <button onClick={handleSaveNote}>Save</button>
    </div>
  )
}

export default NewNote
