// Example of useRef
//   const editorRef = useRef()

//   const editor = new CodeMirror(editorRef.current, {
//     value: `const a = 'red'; .test { color: red;}`,
//     mode,
//     theme
//   })

//   <div className="new-note__editor" ref={editorRef} />
// Example of useRef

// Vendors
import { useRef, useEffect, useReducer, useCallback, useMemo, useState } from 'react'
import { memoizeWith, identity } from 'ramda'
// Utils
import history from 'utils/app-history'
import codeNotesAPI from 'api/code-notes'

// Components

// Styles
import { editor } from './styles.css'

export const NewEditor = () => {
  const editorRef = useRef()
  const noteDescriptionInput = useRef()

  // State
  // const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
  //   editor: null,
  //   CodeMirror: null,
  //   mode: 'javascript',
  //   theme: 'darcula'
  // })
  const [core, setCodeMirror] = useState()
  const coreRef = useRef()
  coreRef.current = core

  const [mode, setMode] = useState('javascript')

  const fetchCodeMirror = async () => {
    console.log('fetching codeMirror')
    try {
      // Import CodeMirror Lib and its main StyleSheet and store it into the Component itself
      const { default: CodeMirrorCore } = await import(
        /* webpackChunkName: "code-mirror" */ '../../../static/code-mirror/lib/codemirror'
      )
      // const CodeMirrorMainCSS = await import(
      //   /* webpackChunkName: "code-mirror-css" */ '../../../static/code-mirror/lib/codemirror.css'
      // )

      setCodeMirror(CodeMirrorCore)
    } catch (e) {
      // TODO use a modal in case of error
      console.error('error when fetching a mode')
      console.error(e)
    }
  }

  const mountEditor = async () => {
    try {
      const { mode, theme, CodeMirror } = state

      debugger
      // Create a new Instance of CodeMirror
      const editor = new CodeMirror(editorRef.current, {
        value: `const a = 'red'; .test { color: red;}`,
        mode,
        theme
      })

      setState({ editor })
    } catch (e) {
      // TODO use a modal in case of error
      console.error('error when mounting a editor')
      console.error(e)
    }
  }

  const changeMode = event => {
    console.log('inside changeMode')
    const selectedMode = event.target.value

    setMode(selectedMode)
  }

  const fetchMode = async () => {
    console.log('inside fetchMode', core, coreRef)
    try {
      const { current: CodeMirror } = coreRef
      // Fetch a Code Mirror Mode. 'Mode' is a syntax support for the editor
      const res = await codeNotesAPI.get(`/modes/${mode}`)
      // Load this 'mode' by evaluating the fetched code. The mode is gonna look for a Code Mirror constructor. If it finds a constructor, then it's gonna load itself.
      debugger
      eval(res.data)
    } catch (e) {
      // TODO use a modal in case of error
      console.error('error when fetching a mode')
      console.error(e)
    }
  }

  const handleChangeEditorMode = async event => {
    console.log('setting everytime')

    const { editor } = state

    if (!editor) {
      return null
    }

    try {
      // Fetch the new mode and evaluate it so CodeMirror instance can load into itself
      const res = await codeNotesAPI.get(`/modes/${mode}`)
      eval(res.data)

      // Tell the editor which mode should it display
      editor.setOption('mode', mode)

      console.log(mode)
    } catch (e) {
      console.log({ state })
      // TODO use a modal in case of error
      console.log('Could not fetch this mode', e)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    const description = noteDescriptionInput.current.value

    console.log(state, description)
  }

  const intialize = async () => {
    console.log('before calling fetchMode: ', core)
    // Fetch the CodeMirror Lib via Codesplitting
    // await fetchCodeMirror()
    // await fetchMode()
  }

  // Effects
  useEffect(() => {
    // mountEditor()
    // fetchCodeMirror()
    // intialize()
  }, [])

  console.log('render', { core, mode })

  return (
    <section className={editor}>
      <h2 className="">
        Create a new <strong>Note</strong>
      </h2>

      <p>Current mode: {mode}</p>
      <select name="mode-selector" id="mode-selector" onChange={changeMode} value={mode}>
        <option value="javascript">javascript</option>
        <option value="css">css</option>
      </select>

      <button onClick={intialize}>Create</button>
      {/* {!state.editor ? <button onClick={intialize}>Create</button> : null} */}

      {/* {state.editor ? (
        <div className="field">
          <label htmlFor="note-description">Note Description</label>
          <textarea id="note-description" type="text" ref={noteDescriptionInput} />
        </div>
      ) : null} */}

      {/* <div className="new-note__editor" ref={editorRef} /> */}

      {/* <button className="button" onClick={handleSubmit}>
          save
        </button> */}
    </section>
  )
}

// class Editor extends Component {
//   constructor(props) {
//     super(props)

//     this.handleChangeEditorMode = this.handleChangeEditorMode.bind(this)
//     this.nodeElem = React.createRef()
//   }

//   state = {
//     editor: null,
//     CodeMirror: null
//     // pristine: true
//   }

//   handleSaveNote = async () => {
//     const { user, mode: language, description } = this.props
//     const content = this.state.editor.getValue()

//     console.log(user, language, description, content)

//     const res = await codeNotesAPI.post(`/notes`, {
//       user,
//       language,
//       description,
//       content,
//       relatedNotes: []
//     })

//     console.log(res)
//     history.push('/')
//   }

//   async componentDidMount() {
//     // Import CodeMirror Lib and its main StyleSheet and store it into the Component itself
//     const { default: CodeMirror } = await import(
//       /* webpackChunkName: "code-mirror" */ '../../../static/code-mirror/lib/codemirror'
//     )
//     const { default: CodeMirrorMainCSS } = await import(
//       /* webpackChunkName: "code-mirror-css" */ '../../../static/code-mirror/lib/codemirror.css'
//     )
//     // Store Code Mirror Class into the Component Itself
//     this.setState({ CodeMirror })

//     try {
//       // Fetch a default Code Mirror Mode. 'Mode' is a syntax support for the editor
//       const res = await codeNotesAPI.get(`/modes/${this.props.mode}`)
//       // Load this 'mode' by evaluating the fetched code. The mode is gonna look for a Code Mirror constructor. If it finds a constructor, then it's gonna load itself.
//       eval(res.data)
//     } catch (e) {
//       // TODO use a modal in case of error
//       alert('Could fetch this mode')
//     }
//   }

//   createEditor = async () => {
//     const { CodeMirror } = this.state
//     const { mode, theme } = this.props

//     const editor = new CodeMirror(this.nodeElem.current, {
//       value: `const a = 'red'; .test { color: red;}`,
//       mode,
//       theme
//     })

//     this.setState({ editor })
//   }

//   async handleChangeEditorMode(event) {
//     const { CodeMirror, editor } = this.state

//     if (!editor) {
//       return null
//     }

//     try {
//       // Fetch the new mode and evaluate it so CodeMirror instance can load into itself
//       const mode = event.target.value
//       const res = await codeNotesAPI.get(`/modes/${mode}`)
//       eval(res.data)

//       // Tell the editor which mode should it display
//       editor.setOption('mode', mode)
//       // Update this new mode on store
//       this.props.changeEditorMode(mode)
//     } catch (e) {
//       // TODO use a modal in case of error
//       alert('Could not fetch this mode', e)
//     }
//   }

//   render() {
//     // console.log('render -> ', this.state)
//     return (
//       <div className="editor ui form">
//         {this.props.inEditMode ? (
//           <button className="ui button" onClick={this.handleEditMode}>
//             Edit
//           </button>
//         ) : null}

//         {/* {!this.props.pristine ? ( */}
//         <button className="ui button" onClick={this.handleSaveNote}>
//           Save
//         </button>
//         {/* ) : null} */}

//         <select
//           name="mode-selector"
//           id="mode-selector"
//           onChange={this.handleChangeEditorMode}
//           value={this.state.mode}
//         >
//           <option value="javascript">javascript</option>
//           <option value="css">css</option>
//         </select>

//         {!this.state.editor ? <button onClick={this.createEditor}>Create</button> : null}

//         <label htmlFor="note-description">
//           <span>Description</span>
//           <input
//             id="note-description"
//             type="text"
//             value={this.props.description}
//             onChange={e => this.props.updateNoteDescription(e.target.value)}
//           />
//         </label>

//         <div className="new-note__editor" ref={this.nodeElem} />editorRef
//       </div>
//     )
//   }
// }

// const mapStateToProps = ({ editor, authentication }) => {
//   return {
//     ...editor,
//     user: authentication.userData.id // Refactor with ramda or Elvis Operator
//   }
// }

// const mapDispatchToProps = {
//   updateCodeMirrorData,
//   updateNoteDescription,
//   changeEditorMode
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Editor)
