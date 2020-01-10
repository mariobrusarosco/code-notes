import { Route } from 'react-router-dom'

import HeaderLanding from 'components/HeaderLanding/index.tsx'

const LandingRoute = props => {
  console.log('[ LandingRoute ]')

  return (
    <>
      <HeaderLanding />
      <Route {...props} />
    </>
  )
}

export default LandingRoute
