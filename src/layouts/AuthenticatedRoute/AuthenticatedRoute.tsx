import { Route, Redirect, RouteProps } from 'react-router-dom'

// Utils
// import HeaderApplication from 'components/HeaderApplication/index.tsx'

const AuthenticatedRoute: React.FunctionComponent<RouteProps> = props => {
  console.log('[ AuthenticatedRoute ]', props)

  const userIsLogged = localStorage.getItem('user')

  console.log({ userIsLogged })

  if (!userIsLogged) {
    return <Redirect to="/login" />
  }

  return (
    <>
      {/* <HeaderApplication /> */}
      <Route {...props} />
    </>
  )
}

export default AuthenticatedRoute
