// Styles
import css from './styles.scss'

// Utils
import support from 'utils/lazyload/support'

const Img = ({ src, alt, lazy }) => {
  return (
    <div className={`${css.imageWrapper} lazy`}>
      <img
        className={css.image}
        alt={alt}
        src={true ? src : ''}
        data-lazy={lazy ? true : false}
        loading={lazy ? 'lazy' : 'false'}
      />
    </div>
  )
}

export default Img
