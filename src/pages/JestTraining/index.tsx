// Components
import GuessedWords from './GuessedWords/GuessedWords'

const guessedWords = [
  {
    guessedWord: 'mario',
    letterMatchCount: 10
  }
]
const JestTraining = () => {
  return (
    <section className="jest-training">
      <GuessedWords guessedWords={guessedWords} />
    </section>
  )
}

export default JestTraining
