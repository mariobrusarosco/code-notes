// Vendors
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
  FadeTransition
} from 'react-transition-group'
import Masonry from 'react-masonry-component'

import { memo } from 'react'

// Components
import ItemCard from 'components/ItemCard'
import LazyImage from 'components/LazyImage'

// Styles
import css from './styles.scss'

const ItemsList = memo(({ items }) => {
  if (!items.length) return null

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {items.map(item => (
          <ItemCard image={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
})

const ItemsList2 = ({ items = [] }) => {
  console.log(items)

  // if (!items.length) return null

  const childElements = items.map(function(element, i) {
    return (
      <li className={css.mansoryItem} key={element.id}>
        {/* <img src={element.urls.small} /> */}
        <LazyImage src={element.urls.small} />
      </li>
    )
  })

  const masonryOptions = {
    transitionDuration: 0
  }

  const imagesLoadedOptions = { background: '.my-bg-image-el' }

  return (
    <div className={css.list}>
      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    </div>
  )
}

export default ItemsList
