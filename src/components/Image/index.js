// Styles
import css from './styles.scss'

const Image = ({ alt, src }) => {
  return <img className={css.image} alt={alt} src={src} />
}

export default Image
