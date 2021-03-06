// Vendors
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

// Components
import InputText from 'components/Forms/Inputs/InputText'
import SpinnerLoader from 'components/Loaders/Spinner'

// Utils
import { isRequired } from 'utils/fieldsValidators'

class ConfigEditForm extends Component {
  render() {
    return (
      <>
        {this.props.pristine || (this.props.submitting && <SpinnerLoader />)}

        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.props.onSubmitCallback)}
        >
          <div className="field-wrapper">
            <Field
              name="firstname"
              component={InputText}
              label="Your first name"
              type="text"
              validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <Field
              name="lastname"
              component={InputText}
              label="Your last name"
              type="text"
              validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <Field
              name="email"
              component={InputText}
              label="Your current email"
              type="email"
              validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <Field
              name="new_password"
              component={InputText}
              label="Your new password"
              type="password"
              // validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <Field
              name="new_password_confirmation"
              component={InputText}
              label="Repeat your new password"
              type="password"
              // validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <button
              disabled={this.props.submitting || this.props.pristine}
              className="ui button primary"
            >
              Update your info
            </button>
          </div>
        </form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    initialValues: state.authentication.userData
  }
}

const enhancedForm = reduxForm({
  form: 'UserConfig'
})(ConfigEditForm)

export default connect(mapStateToProps)(enhancedForm)
