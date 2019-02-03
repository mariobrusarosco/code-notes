// Fake Data
import faker from 'faker'


const CommentDetail = ({
	author,
	avatar
}) => {
	return (
		<div className="comment">
			<a href="" className="avatar">
				<img src={avatar} alt="avatar" />
			</a>
			<div className="content">
				<a href="" className="author">
					{ author }
				</a>
				<div className="metadata">
					<span className="date"> Today at 6pm</span>
				</div>
				<div className="text">This is some text</div>
			</div>
		</div>
	)
}

export default CommentDetail
