// Vendors
import { useState, useEffect } from 'react'

export const useTestHook = () => {
  const [counter, increment] = useState(0)

  useEffect(() => {
    console.log('Just appearing on componentDidMount')

    console.log('initial counter:', counter)
  }, [])

  return [counter, increment]
}

/*  CUSTOM HOOK


Inside the component that will reuse this hook

import { useTestHook } from 'customHooks/Test'

const MyComp = () => {
  const [counter, increment] = useTestHook()

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => increment(counter + 1)}>increment</button>
    </<
  )
}

 IMPORTANT!!!

 you can pass arguments to useTestHook(arg1, arg2)


export const useTestHook = (arg1, arg2) => {
  -- Perform some logic with those arguments an pass for useState()
  const result = ....
  const [counter, increment] = useState(result)

*/
