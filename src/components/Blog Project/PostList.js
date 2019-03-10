import { connect } from 'react-redux'


// Actions
import { fetchPostsAndUsers } from '../../actions'

import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers()
  }

  renderList = () => {
    console.log(this.props.posts)
    return this.props.posts.map(post => {
      return (
        <div key={post.id} className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{ post.title }</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })

  }
  render () {
    if (!this.props.posts) {
      return null
    }

    return (
      <div className="ui relaxed divided list">
        { this.renderList() }
      </div>
    )
  }
}

const mapStateToPros = ({ blog }) => {
  return {
    ...blog
  }
}

export default connect(mapStateToPros, { fetchPostsAndUsers })(PostList)
