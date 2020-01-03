// Components
import Counter from './Counter'
// import WW from 'walter-white/dist/walter-white'
import UserWelcomeDisplay from './UserWelcomeDIsplay'
import OkBox from './OkBox.tsx'

// console.log(WW)

const Experimental = () => {
  return (
    <section className="experimental">
      <p>Experimental</p>
      <Counter />
      <UserWelcomeDisplay />
      <OkBox />
    </section>
  )
}

export default Experimental
