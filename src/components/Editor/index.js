import { connect } from 'react-redux'

// Api Util
import codeNotesAPI from 'api/code-notes'

// Actions
import { updateCodeMirrorData, updateNoteDescription } from 'actions/Editor'

// Components

class Editor extends Component {
  constructor(props) {
    super(props)

    this.selectMode = this.selectMode.bind(this)
    this.nodeElem = React.createRef()
  }

  state = {
    // description: null,
    // body: null,
    // mode: 'javascript',
    // theme: 'darcula',
    // editor: null,
    CodeMirror: null
    // pristine: true
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

    // this.props.updateCodeMirrorData({ CodeMirror })

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

    // console.log(this.state)
  }

  render() {
    // console.log('render -> ', this.state)
    return (
      <div className="editor ui form">
        {this.props.inEditMode ? (
          <button className="ui button" onClick={this.handleEditMode}>
            Edit
          </button>
        ) : null}

        {!this.props.pristine ? (
          <button className="ui button" onClick={this.handleSaveNote}>
            Save
          </button>
        ) : null}

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
            onChange={e => this.props.updateNoteDescription(e.target.value)}
          />
        </label>

        <div className="new-note__editor" ref={this.nodeElem} />
      </div>
    )
  }
}

const mapStateToProps = ({ editor }) => {
  return { ...editor }
}

const mapDispatchToProps = {
  updateCodeMirrorData,
  updateNoteDescription
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
