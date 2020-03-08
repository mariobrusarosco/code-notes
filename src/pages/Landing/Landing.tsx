import { useState, useEffect } from 'react'

const Landing: React.FC = () => {
  const start = () => {
    console.log('starting...')
    return 0
  }

  const [test, setTest] = useState(start)

  useEffect(() => {
    console.log('use effect')

    return () => console.log('clean up')
  }, [])

  console.log('render <Landing />')

  return (
    <main>
      Landing Page {test}
      <button onClick={() => setTest(test + 1)}>a</button>
    </main>
  )
}

export default Landing
