// Vendors
import { pathOr, nth } from 'ramda'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import classnames from 'classnames'

// Styles
import css from './styles.scss'

// Components
import Image from 'components/Image'
import Info from 'components/SpecificComponent/Info'
import Gallery from 'components/SpecificComponent/Gallery'
import GoBack from 'components/GoBack'
// Utils
import toCurrency from 'utils/formatters/currency'

const Product = ({ match }) => {
  // Redux / Store
  const allExamples = useSelector(({ example }) => example.all)
  // State
  const [currentExample, setCurrentExample] = useState(null)
  const [currentImage, setImage] = useState('')

  // LifeCycle
  useEffect(() => {
    const ID = pathOr('', ['params', 'id'], match)
    const example = allExamples.find(example => example.id === ~~ID)

    setCurrentExample(example)
    setImage(example.url)
  }, [])

  // Props Destructuring

  // Internal Components
  const ImageArea = () => (
    <div className={css.imageArea}>
      <Image src={currentImage} />
    </div>
  )

  if (!currentExample) return null

  return (
    <section data-id="" className={classnames([css.page], 'product')}>
      <div className={css.wrapper}>
        <GoBack />
        <ImageArea />
        <Gallery
          images={[
            currentExample.url,
            currentExample.url,
            currentExample.url,
            currentExample.url,
            currentExample.url
          ]}
          onThumbnailClick={setImage}
        />

        <div className={css.infoArea}>
          <ul className={css.infoList}>
            <Info label="valor" content={14554} formatter={toCurrency} suffix="/mês" />
          </ul>
        </div>
      </div>

      <GoBack className={css.backButton} />
    </section>
  )
}

export default Product
