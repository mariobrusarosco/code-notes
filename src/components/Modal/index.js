// Vendors
import { connect } from 'react-redux'
import { createPortal } from 'react-dom'

// Actions
// Actions
import { toggleModal } from 'actions'

const Modal = ({ toggleModal, title, content, history }) => {
  const closeModal = () => toggleModal({ content: '', title: '' })

  return createPortal(
    <div className="app-modal ui dimmer visible active" onClick={closeModal}>
      <div className="ui standard modal visible active">
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">
          <button className="ui button primary">close</button>
        </div>
      </div>
    </div>,
    document.querySelector('#app-modal')
  )
}

const mapStateToProps = ({ app }) => {
  const { globalModal } = app

  return {
    // TODO refactor with Ramda
    content: globalModal?.content,
    title: globalModal?.title
  }
}

export default connect(
  mapStateToProps,
  { toggleModal }
)(Modal)
