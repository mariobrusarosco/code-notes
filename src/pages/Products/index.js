// Vendors
import { Link } from 'react-router-dom'
import { pathOr } from 'ramda'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

const Products = () => {
  // States / Store selectors and dispatchers
  // const vivaProperties = useSelector(({ Properties }) =>
  //   pathOr([], [VIVA_REAL], Properties)
  // )
  // const [currentPage, setPage] = useState(1)

  // const totalOfProperties = pathOr(0, ['all', 'length'], vivaProperties)
  // const propertiesToRender = pathOr([], ['pagination', [currentPage]], vivaProperties)

  // TODO DRY in this behaviour
  // const changePage = page => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' }) // This scroll action would be an 'util'
  //   setPage(page)
  //   document.dispatchEvent(new Event('resetImagesOnDOM'))
  // }

  // const Paginator = () => {
  //   return (
  //     <div className={css.paginationArea}>
  //       <Pagination
  //         onChange={changePage}
  //         current={currentPage}
  //         defaultCurrent={0}
  //         total={totalOfProperties}
  //         defaultPageSize={20}
  //       />
  //     </div>
  //   )
  // }

  return (
    <div>
      All Products
      <ul>
        <li>
          <Link to="/product/1">Product</Link>
        </li>
        <li>
          <Link to="/products/2">Product</Link>
        </li>
      </ul>
      {/* <Paginator />
      <PropertyList properties={propertiesToRender} />
      <Paginator />  */}
    </div>
  )
}

export default Products
