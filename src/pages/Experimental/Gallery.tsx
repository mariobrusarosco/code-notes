import imageOne from '../../assets/images/breaking-bad-01.jpg'
import imageTwo from '../../assets/images/breaking-bad-02.jpg'
import imageThree from '../../assets/images/breaking-bad-03.jpg'
import imageFour from '../../assets/images/breaking-bad-04.jpg'
import imageFive from '../../assets/images/breaking-bad-05.jpg'
import { useEffect } from 'react'

const images = [
  {
    id: 0,
    image: imageOne.src
  },
  {
    id: 1,
    image: imageTwo.src
  },
  {
    id: 2,
    image: imageThree.src
  },
  {
    id: 3,
    image: imageFour.src
  },
  {
    id: 4,
    image: imageFive.src
  }
]

const Gallery: React.FC = () => {
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(lastIndex => (lastIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  console.log(images[index].image)
  return (
    <div className="gallery">
      <img src={images[index].image} alt="gallery" />
    </div>
  )
}

export default Gallery
