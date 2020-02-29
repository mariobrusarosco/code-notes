import { useEffect, useRef } from 'react'

interface Test {
  counter: number
  title: string
}

export const Display = ({ counter, title }: Test) => {
  const componentIsMounted = useRef(false)

  const doSomeStuff = () => console.log('Just doing some stuff')

  useEffect(() => {
    if (componentIsMounted.current) {
      doSomeStuff()
    } else {
      componentIsMounted.current = true
    }
  }, [counter])

  return (
    <div data-test="counter-display" className="counter-display">
      {counter}
      <span className="display-title" data-test="display-title">
        {title}
      </span>
    </div>
  )
}

export default Display
