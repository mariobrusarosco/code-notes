const initialState = {
  pristine: true,
  inEditMode: false,
  description: 'Display data',
  body: null,
  mode: 'javascript',
  theme: 'darcula',
  editor: null
  // CodeMirror: null
}

const EditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CODE_MIRROR_DATA':
      const { CodeMirror } = action

      return { ...state, CodeMirror }

    case 'UPDATE_NOTE_DESCRIPTION':
      const { description } = action

      return { ...state, description }

    default:
      return state
  }
}

export default EditorReducer
