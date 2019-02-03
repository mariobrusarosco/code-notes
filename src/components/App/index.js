// Fake Data
import faker from 'faker'

// Components
import CommentDetail from 'components/CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.image.avatar()}
        timeAgo={'....'}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.image.avatar()}
        timeAgo={'....'}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.image.avatar()}
        timeAgo={'....'}
      />
    </div>
  )
}

export default App
