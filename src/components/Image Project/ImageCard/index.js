import React, { Component }  from 'react'


class ImageCard extends Component {
  imageRef = React.createRef()
  state = {
    spans: 0
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)

    this.setState({ spans })
  }

  componentDidMount = () => {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  render() {
    const { description, urls } = this.props.image

    return (
      <img
        ref={this.imageRef}
        src={urls.regular}
        alt={description}
        style={{ gridRowEnd: `span ${this.state.spans}`}}
      />
    )
  }
}

export default ImageCard
