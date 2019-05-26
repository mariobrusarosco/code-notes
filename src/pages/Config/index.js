// Components
import ConfigEditForm from 'components/Forms/ConfigEditForm'

// Utils
import codeNotesAPI from 'api/code-notes'

class Config extends Component {
  onSubmitCallback = async data => {
    try {
      const { id, firstname } = data

      const response = await codeNotesAPI.patch(`/users/${id}`, {
        firstname
      })

      const message = response && response.data

      alert(message)
      // this.props.history.push('/')
    } catch (err) {
      const message = err && err.response && err.response.data
      alert(message)
    }
  }

  render() {
    return (
      <div className="config ui segment">
        <ConfigEditForm onSubmitCallback={this.onSubmitCallback} />
      </div>
    )
  }
}

export default Config
