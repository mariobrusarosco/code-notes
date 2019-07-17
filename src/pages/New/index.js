// Components
import { NewEditor } from 'components/Editor'
import CodeEditor from 'components/CodeEditor'

import { page } from './styles.css'

const New = () => {
  return (
    <div className={page}>
      {/* <NewEditor /> */}
      {/* <Editor /> */}
      <CodeEditor />
    </div>
  )
}

export default New
