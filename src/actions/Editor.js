// export const updateDescription
export const updateNoteDescription = description => {
  return {
    type: 'UPDATE_NOTE_DESCRIPTION',
    description
  }
}

export const changeEditorMode = mode => {
  return {
    type: 'CHANGE_EDITOR_MODE',
    mode
  }
}

export const updateCodeMirrorData = ({ CodeMirror }) => {
  return {
    type: 'UPDATE_CODE_MIRROR_DATA',
    CodeMirror
  }
}
