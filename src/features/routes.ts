import FormScreen from './screens/Form'
import ReduxScreen from './screens/Redux'
import ContextScreen from './screens/Context'

enum routes {
  FORM = 'form',
  FORM_CHECKBOX = 'form_checkbox',
  FORM_RADIO = 'form_radio',
  REDUX = '/redux',
  CONTEXT = 'context'
}

export interface ScreenRoute {
  screen: string
  component: React.ComponentType
  path: string
  exact: boolean
}

export const featureRoutes: ScreenRoute[] = [
  {
    screen: 'form',
    component: FormScreen,
    path: routes.FORM,
    exact: true
  },
  {
    screen: 'redux',
    component: ReduxScreen,
    path: routes.REDUX,
    exact: true
  },
  {
    screen: 'context',
    component: ContextScreen,
    path: routes.CONTEXT,
    exact: true
  }
]
