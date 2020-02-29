import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="guessed-words" style={{ marginTop: '100px' }}>
      {guessedWords?.length === 0 && (
        <div data-test="guess-intructions">Try to guess a word</div>
      )}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  )
}

export default GuessedWords
