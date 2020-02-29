// Components
import Counter from './Counter'
import WW from 'walter-white'
// import './walter-white.js'
import UserWelcomeDisplay from './UserWelcomeDIsplay'
import OkBox from './OkBox'
import Stories from './Stories'
import Joke from './Joke'
import Gallery from './Gallery'

// console.log(WW)

const Experimental = () => {
  const [showGallery, setShowGallery] = React.useState(true)

  return (
    <section className="experimental">
      <p>Experimental</p>
      <Counter />
      <UserWelcomeDisplay />
      <OkBox />
      <Stories />
      <Joke />
      <button onClick={() => setShowGallery(!showGallery)}>toggle gallery</button>
      {showGallery && <Gallery />}
    </section>
  )
}

export default Experimental
