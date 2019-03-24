import { userState, useEffect } from 'react'
import CodeMirror from 'codemirror'


const New = () => {

  // const [noteContent, ]

  useEffect(() => {
    const elemRef = document.querySelector('.new-note')

    const myCodeMirror = CodeMirror(elemRef, {
      value: "function myScript(){return 100;}\n",
      mode:  "javascript"
    });

    console.log(myCodeMirror)
  })

  return (
    <div className="new-note">
      New Note!
    </div>
  )
}

export default New
