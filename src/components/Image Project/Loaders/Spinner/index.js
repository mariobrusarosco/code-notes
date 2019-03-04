import React from 'react'

const Spinner = ({
	message
}) => {
	return (
		<div className="ui active dimmer">
			<p className="ui big text loader">{ message }</p>
		</div>
	)
}

Spinner.defaultProps = {
	message: 'Loading...'
}

export default Spinner
