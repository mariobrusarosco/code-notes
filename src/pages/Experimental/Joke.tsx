import { useState, useEffect } from 'react'
import useFetch from '../../customHooks/useFetch'

const Joke = () => {
  const joke = useFetch('https://official-joke-api.appspot.com/jokes/random', {})

  const { setup, punchline } = joke

  return (
    <div className="joke">
      <h1>Joke</h1>
      {setup ? (
        <>
          <h2>{setup}</h2>
          <h3>{punchline}</h3>
        </>
      ) : (
        'loading a joke'
      )}
    </div>
  )
}

export default Joke
