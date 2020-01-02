// Vendors
import { useSelector, useDispatch } from 'react-redux'
import { pathOr } from 'ramda'
import { useEffect } from 'react'

// Actions
import { toggleLightbox } from 'actions'

// Styles
import css from './styles.scss'

const LightBox = () => {
  // Redux / Store
  const dispatch = useDispatch()
  const lightbox = useSelector(({ lightbox }) => lightbox)

  const closeOnEsc = () => dispatch(toggleLightbox({ active: false }))

  // Lifecycle
  useEffect(() => {
    document.addEventListener('keydown', closeOnEsc)

    return () => document.removeEventListener('keydown', closeOnEsc)
  })

  // Props
  const active = pathOr('', ['active'], lightbox)
  const src = pathOr('', ['src'], lightbox)
  const alt = pathOr('', ['alt'], lightbox)

  // Methods
  const handleToggleLightbox = () => dispatch(toggleLightbox({ active: false }))

  if (!active) return null

  return (
    <div className={css.lightbox} data-id="123" onClick={handleToggleLightbox}>
      <picture className={css.picture}>
        <img className={css.image} alt={alt} src={src} />
      </picture>
    </div>
  )
}

export default LightBox
