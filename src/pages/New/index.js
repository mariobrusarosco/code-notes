// Components
import Editor, { NewEditor } from 'components/Editor'

import { page } from './styles.scss'

const New = () => {
  return (
    <div className={`ui container ${page}`}>
      <NewEditor />
      <Editor />
    </div>
  )
}

export default New
