// Components
import Editor, { NewEditor } from 'components/Editor'

import { page } from './styles.css'

const New = () => {
  return (
    <div className={`ui container ${page}`}>
      <NewEditor />
      <Editor />
    </div>
  )
}

export default New
