import { Route, Redirect } from 'react-router-dom'

// Utils
// import HeaderApplication from 'components/HeaderApplication/index.tsx'

interface Props {
  path: string
  component: Function
}

const AuthenticatedRoute: React.FC<Props> = props => {
  console.log('[ AuthenticatedRoute ]', props)

  const userIsLogged = false

  if (!userIsLogged) <Redirect to="/test" />

  return (
    <>
      {/* <HeaderApplication /> */}
      <Route {...props} />
    </>
  )
}

export default AuthenticatedRoute
