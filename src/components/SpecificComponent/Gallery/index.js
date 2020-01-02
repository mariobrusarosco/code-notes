// Vendor
import Slider from 'react-slick'
// Components
import Image from 'components/Image'

// Slider Settings
import settings from './settings'
// Style
import css from './styles.scss'
import 'styles/carrousel.scss'

const Gallery = ({ images, onThumbnailClick }) => {
  const handleThumbClick = src => () => onThumbnailClick(src)

  return (
    <div className={css.gallery}>
      <p className={css.title}>Clique na imagem para visualizá-la</p>

      <div className={css.listWrapper}>
        <ul className={css.list}>
          <Slider {...settings}>
            {images.map((src, i) => (
              <li className={css.thumbnail} onClick={handleThumbClick(src)} key={i}>
                <Image src={src} alt="" key={i} fixedSize="" />
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  )
}

export default Gallery
