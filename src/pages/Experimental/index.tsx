// Components
import Counter from './Counter'
// import WW from 'walter-white/dist/walter-white'
import UserWelcomeDisplay from './UserWelcomeDIsplay'
import OkBox from './OkBox'
import Stories from './Stories'
import Joke from './Joke'
import GuessedWords from './GuessedWords'

// console.log(WW)

const Experimental = () => {
  return (
    <section className="experimental">
      <p>Experimental</p>
      <Counter />
      <UserWelcomeDisplay />
      <OkBox />
      <Stories />
      <Joke />
      <GuessedWords />
    </section>
  )
}

export default Experimental
