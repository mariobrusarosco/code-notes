import { useState, useEffect } from 'react'

const Stories: React.FC = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    fetch('https://news-proxy-server.appspot.com/topstories')
      .then(response => response.json())
      .then(json => setStories(json))
  }, [])

  return (
    <div>
      <h2>Stories</h2>
      {stories.map(story => {
        const { id, by, time, title, url } = story

        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              {by} - {new Date(time * 1000).toLocaleString()}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Stories
