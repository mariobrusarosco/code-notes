// Vendors
import { useEffect, useState, useRef } from 'react'

// Styles
import css from './styles.scss'
// import css2 from './styles2.scss'

// Utils
import lazyloadSupport from 'utils/lazyload/support'
const { native } = lazyloadSupport

// Components
import Pulse from 'components/Loaders/Pulse'

const LazyImg = ({ src, alt }) => {
  useEffect(() => {
    document.dispatchEvent(new Event('updateLazyLoadWatcher'))
  }, [src])

  const target = Math.round(Math.random()) ? `${src}&h=90` : src

  return (
    <div className={css.ratio}>
      <picture className={css.picture}>
        <img
          className={css.image}
          alt={alt}
          src={native ? target : ''}
          loading={native ? 'lazy' : undefined}
          data-src={!native ? target : ''}
        />
      </picture>
      <div className={css.pulseWrapper}>
        <Pulse />
      </div>
    </div>
  )
}

const Img = ({ src, alt }) => {
  const [imgHeight, setImgHeight] = useState(0)
  const [imgWidth, setImgWidth] = useState(0)
  const [test, setGridRowEnd] = useState(0)
  const imgRef = useRef(null)

  useEffect(() => {
    // console.log(typeof imgRef, imgRef)
    imgRef.current.onload = function() {
      const height = this.clientHeight
      const spans = Math.ceil(height / 10)

      setGridRowEnd(spans)
    }
    // document.dispatchEvent(new Event('updateLazyLoadWatcher'))
  }, [imgHeight])

  console.log(imgHeight)
  const target = `${src}`

  return (
    <div className={css2.ratio} style={{ gridRowEnd: `span ${test}` }}>
      <picture className={css2.picture}>
        <img
          className={css2.image}
          alt={alt}
          src={target}
          ref={imgRef}
          // src={native ? target : ''}
          // loading={native ? 'lazy' : undefined}
          // data-src={!native ? target : ''}
        />
      </picture>
      {/* <div className={css2.pulseWrapper}>
        <Pulse />
      </div> */}
    </div>
  )
}

const Img2 = ({ src, alt }) => {
  const [imgHeight, setImgHeight] = useState(0)
  const [imgWidth, setImgWidth] = useState(0)
  const [test, setGridRowEnd] = useState(0)
  const imgRef = useRef(null)

  useEffect(() => {
    // console.log(typeof imgRef, imgRef)
    imgRef.current.onload = function() {
      const height = this.clientHeight
      const spans = Math.ceil(height / 9.5)

      setGridRowEnd(spans)
    }
    // document.dispatchEvent(new Event('updateLazyLoadWatcher'))
  }, [imgHeight])

  const target = `${src}&h=150&w=90`

  return (
    <div className={css2.ratio} style={{ gridRowEnd: `span ${test}` }}>
      <picture className={css2.picture}>
        <img
          className={css2.image}
          alt={alt}
          src={target}
          ref={imgRef}
          // src={native ? target : ''}
          // loading={native ? 'lazy' : undefined}
          // data-src={!native ? target : ''}
        />
      </picture>
      {/* <div className={css2.pulseWrapper}>
        <Pulse />
      </div> */}
    </div>
  )
}

export default LazyImg
