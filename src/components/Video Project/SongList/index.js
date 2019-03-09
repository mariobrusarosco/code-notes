
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectSong } from '../../../actions'

class SongList extends Component {
  renderSongs = () => {
    const songs = this.props.songs

    return songs.map((song, i) => {
      return (
        <div key={`song-${i}`} className="item">
          <div className="right floated content">
            <button
              className="ui primary button"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <ul className="ui divided list song-list">
        { this.renderSongs() }
      </ul>
    )
  }
}

const mapStateToProps = ({ songs, selectedSong }) => {
  return { songs, selectedSong }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { selectSong },
  dispatch,
)

export default connect(mapStateToProps,mapDispatchToProps)(SongList)
