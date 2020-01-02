// Vendors
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// Styles
import css from './styles.scss'

// Components
// import Image from 'components/Image'
import LazyImage from 'components/LazyImage'
import Info from 'components/SpecificComponent/Info'

// Actions
import { toggleLightbox } from 'actions'

// Utils
import toCurrency from 'utils/formatters/currency'

const ItemCard = ({ data }) => {
  // Props
  const { id, albumId, title, url } = data

  // Internal Components
  const Features = () => {
    return (
      <>
        <Info label="id" content={id} />
        <Info label="album" content={albumId} formatter={toCurrency} suffix="/mês" />
        <Info label="title" content={title} />
      </>
    )
  }

  const MoreDetails = () => (
    <Link to={`/product/${id}`} className={css.moreDetails}>
      <span>mais detalhes</span>
    </Link>
  )

  return (
    //   <CSSTransition
    //     in
    //     appear
    //     timeout={200}
    //     onExit={() => console.log('exit')}
    //     classNames="card-motion"
    //   >
    <li className={css.card}>
      <div className={css.imageArea}>
        <LazyImage src={url} alt={`${title}`} />
      </div>
    </li>
    // </CSSTransition>
  )
}

const ItemCard2 = ({ data }) => {
  // Props
  const { urls } = data

  // Internal Components

  return (
    <CSSTransition in appear timeout={200} classNames="card-motion">
      <li className={css.card}>
        <LazyImage
          src={urls.small}
          // alt={`${title}`}
        />
      </li>
    </CSSTransition>
  )
}

const ItemCard3 = ({ image }) => {
  // State // Redux
  const dispatch = useDispatch()
  // Props
  const { urls, alt } = image
  // Methods
  const handleOpenLightbox = () =>
    dispatch(
      toggleLightbox({
        src: urls.small,
        alt,
        active: true
      })
    )

  return (
    <CSSTransition in appear timeout={200} classNames="card-motion">
      <li className={css.card} onClick={handleOpenLightbox} data-id="abc">
        <LazyImage
          src={urls.small}
          // alt={`${title}`}
        />
      </li>
    </CSSTransition>
  )
}

export default ItemCard3
