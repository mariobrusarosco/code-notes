import { connect } from 'react-redux'


// Actions
import { fetchPosts } from '../../actions'


class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render () {
    return (
      <div className="">
        Post List
      </div>
    )
  }
}

const mapStateToPros = ({ posts }) => {
  return {
    posts
  }
}

export default connect(mapStateToPros, { fetchPosts })(PostList)
