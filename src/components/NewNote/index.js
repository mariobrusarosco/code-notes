import axios from 'axios'
import { connect } from 'react-redux'

// Api Util
import codeNotesAPI from 'api/code-notes'

// Actions
import { setEditorConstructorAsLoaded } from 'actions'
import { compose } from 'redux'

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
    console.log('saving')
    console.log(this.state.editor.getValue())
  }
  // // Include CSS file
  // async addCSS(filename){
  //   const { default: css } = await import(`../../../static/code-mirror/theme/monokai.css`)

  //   const head = document.getElementsByTagName('head')[0];

  //   const style = document.createElement('style');
  //   style.innerHTML = css;

  //   console.log(style)
  //   // style.type = 'text/css';
  //   // style.rel = 'stylesheet';
  //   // head.append(style);
  // }

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

    // console.dir(res.data)
    // CodeMirror.defineMode('javascript', res.data)

    // console.log(CodeMirror.modes)
    // console.log(CodeMirror.resolveMode)

    // const editor = new CodeMirror(this.nodeElem.current, {
    //   value: "const a = 'red';",
    //   mode: this.state.mode,
    //   theme: this.state.theme
    // })

    // console.log(CodeMirror)

    // this.props.setEditorConstructorAsLoaded()

    // this.addCSS('material')

    // this.setState({ instance: myCodeMirror })
    // .then(res => {
    //   // eval(res.data)
    //   CodeMirror = res.default
    //   console.log(CodeMirror)

    // })
  }

  createEditor = async () => {
    const { CodeMirror, mode, theme } = this.state

    const editor = new CodeMirror(this.nodeElem.current, {
      value: `const a = 'red'; .test { color: red;}`,
      mode,
      theme
    })

    this.setState({ editor })

    // debugger
    // const mode = this.state.mode

    const res = await codeNotesAPI.get(`/modes/${mode}`)
    console.log(res)
    console.log(this.state)
  }

  async selectMode(event) {
    const { CodeMirror, editor } = this.state

    const mode = event.target.value

    const res = await codeNotesAPI.get(`/modes/${mode}`)
    console.log(res.data)
    eval(res.data)

    editor.setOption('mode', mode)

    this.setState({ mode })

    console.log(this.state)
    // console.log(CodeMirror.modes)

    // console.log(this.state)
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

        <button onClick={this.createEditor}>Create</button>
        <div className="new-note__editor" ref={this.nodeElem} />
        <button onClick={this.handleSaveNote}>Save</button>
      </div>
    )
  }
}

export default connect(
  null,
  { setEditorConstructorAsLoaded }
)(NewNote)
