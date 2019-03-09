import { connect } from 'react-redux'

const SongDetails = ({
  song
}) => {

  return (
    <div className="">
      Song Detail:
      { song && <h3>Title: { song.title } </h3> }
      { song && <h3>Duration: { song.duration } </h3> }
    </div>
  )
}

const mapStateToProps = ({ selectedSong: song }) => {
  return {
    song
  }
}

export default connect(mapStateToProps)(SongDetails)
