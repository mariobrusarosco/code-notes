// Components
import GuessedWords from './GuessedWords/GuessedWords'
import Counter from './Counter'

const guessedWords = [
  {
    guessedWord: 'mario',
    letterMatchCount: 10
  }
]
const JestTraining = () => {
  return (
    <section className="jest-training">
      <Counter />
      <GuessedWords guessedWords={guessedWords} />
    </section>
  )
}

export default JestTraining
