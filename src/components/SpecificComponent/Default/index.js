// Vendors
import { pathOr } from 'ramda'
import classnames from 'classnames'

// Application Mapper
const { BUSINESS_TYPE } = pathOr({}, ['API_MAPPER', 'PROPERTY_CARD'], APP)

// Styles
import css from './styles.scss'

const BusinessType = ({ business, cssModifiers }) => {
  const cssClasses = classnames([cssModifiers], [css.businessType])

  return <p className={cssClasses}>Imóvel para {BUSINESS_TYPE[business]}</p>
}

export default BusinessType
