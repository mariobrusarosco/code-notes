import axios from 'axios'
import { connect } from 'react-redux'

// Api Util
import codeNotesAPI from 'api/code-notes'

// Actions
import { setEditorConstructorAsLoaded } from 'actions'

// Components

class NewNote extends Component {
  constructor(props) {
    super(props)

    this.selectMode = this.selectMode.bind(this)
    this.nodeElem = React.createRef()
  }

  state = {
    description: null,
    body: null,
    mode: 'javascript',
    theme: 'darcula',
    editor: null,
    CodeMirror: null
  }

  handleSaveNote = () => {
    const noteContent = this.state.editor.getValue()

    console.log(noteContent)
  }

  async componentDidMount() {
    // Import CodeMirror Lib and its main StyleSheet and store it into the Component itself
    const { default: CodeMirror } = await import(
      /* webpackChunkName: "code-mirror" */ '../../../static/code-mirror/lib/codemirror'
    )
    const { default: CodeMirrorMainCSS } = await import(
      /* webpackChunkName: "code-mirror-css" */ '../../../static/code-mirror/lib/codemirror.css'
    )

    this.setState({ CodeMirror })

    // const { default: test } = await import(/* webpackChunkName: "code-mirror-load-mode" */ '../../../static/code-mirror/addon/mode/loadmode.js')

    const res = await codeNotesAPI.get(`/modes/javascript`)
    eval(res.data)
  }

  createEditor = async () => {
    const { CodeMirror, mode, theme } = this.state

    const editor = new CodeMirror(this.nodeElem.current, {
      value: `const a = 'red'; .test { color: red;}`,
      mode,
      theme
    })

    this.setState({ editor })

    const res = await codeNotesAPI.get(`/modes/${mode}`)
    console.log(res)
    console.log(this.state)
  }

  async selectMode(event) {
    const { CodeMirror, editor } = this.state

    const mode = event.target.value

    const res = await codeNotesAPI.get(`/modes/${mode}`)
    // console.log(res.data)
    eval(res.data)

    if (editor) {
      editor.setOption('mode', mode)
    }

    this.setState({ mode })

    console.log(this.state)
  }

  render() {
    console.log('render -> ', this.state)
    return (
      <div className="new-note">
        <select
          name="mode-selector"
          id="mode-selector"
          onChange={this.selectMode}
          value={this.state.mode}
        >
          <option value="javascript">javascript</option>
          <option value="css">css</option>
        </select>

        {!this.state.editor ? <button onClick={this.createEditor}>Create</button> : null}

        <label htmlFor="note-description">
          <span>Description</span>
          <input
            id="note-description"
            type="text"
            value={this.props.description}
            readOnly={false}
            // onChange={(e) => console.log(e.target.value)}
          />
        </label>

        <div className="new-note__editor" ref={this.nodeElem} />
        <button onClick={this.handleSaveNote}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    description: state?.editor?.description
  }
}

export default connect(
  mapStateToProps,
  { setEditorConstructorAsLoaded }
)(NewNote)
