import { useState, useEffect } from 'react'

const useFetch = (url: string, intialValue: any) => {
  const [fetchResult, setFetchResult] = useState(intialValue)
  console.log('useFetch Hook', fetchResult)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setFetchResult(data))
  }, [])

  return fetchResult
}

export default useFetch
