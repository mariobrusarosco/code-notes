import { connect } from 'react-redux'

// Utils
import history from 'utils/app-history'

// Actions
import { fetchNotes } from 'actions'

class Home extends Component {
  renderNotes = () => {
    const { notes } = this.props

    if (!notes) return null

    return (
      <div className="ui list">
        {notes.map(note => {
          return (
            <div className="item" key={note._id}>
              <img className="ui avatar image" alt={note.language} />
              <div className="content">
                <div className="description">{note.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  async componentDidMount() {
    this.props.fetchNotes()
  }

  render() {
    return (
      <div className="home ui container">
        Code Notes
        {this.renderNotes()}
      </div>
    )
  }
}

const mapStateToProps = ({ authentication, app }) => {
  return {
    // Refactor with ramda,
    user: authentication.userData.id,
    notes: app.notes
  }
}

export default connect(
  mapStateToProps,
  { fetchNotes }
)(Home)
